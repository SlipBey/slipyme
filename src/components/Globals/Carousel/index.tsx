"use client";

import React, { useMemo, useRef, useCallback, useEffect } from "react";
import { useTicker } from "./useTicker";

export type KeyExtractor<T> = (item: T, index: number) => string | number;
export type RenderCard<T> = (item: T, baseIndex: number) => React.ReactNode;

export interface CarouselItemBase {
  title?: string;
  image: string;
  excerpt?: string;
}

export interface CarouselProps<T> {
  items: T[];
  renderCard: RenderCard<T>;
  keyExtractor?: KeyExtractor<T>;
  onSelect?: (item: T) => void;
  autoSpeed?: number;
  inertiaDecay?: number;
  itemWidth?: number;
  gap?: number;
  tapMs?: number;
  dragFactor?: number;
  wheelFactor?: number;
}

export function Carousel<T extends CarouselItemBase>({
  items,
  renderCard,
  keyExtractor = (_, i) => i,
  onSelect,
  autoSpeed = -60,
  inertiaDecay = 0.965,
  itemWidth = 280,
  gap = 24,
  tapMs = 260,
  dragFactor = 20,
  wheelFactor = 1.2,
}: CarouselProps<T>) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const baseCount = items.length;

  const looped = useMemo(() => {
    if (!baseCount) return [] as T[];
    return [...items, ...items, ...items];
  }, [items, baseCount]);

  const baseWidth =
    baseCount > 0 ? baseCount * itemWidth + (baseCount - 1) * gap : 1;

  const {
    getOffset,
    setOffset,
    addVelocity,
    setVelocity,
    start,
    stop,
    isDraggingRef,
  } = useTicker({
    autoSpeed,
    inertiaDecay,
    loopWidth: baseWidth,
  });

  const activePointerId = useRef<number | null>(null);
  const downX = useRef(0);
  const lastX = useRef(0);
  const moved = useRef(false);
  const downIdx = useRef<number | null>(null);
  const downAt = useRef(0);

  const TAP_MAX_MS = tapMs;
  const DRAG_THRESHOLD = 6;

  useEffect(() => {
    start();
    return () => stop();
  }, [start, stop]);

  useEffect(() => {
    let raf = 0;
    const paint = () => {
      const track = trackRef.current;
      if (track) {
        const off = getOffset();
        track.style.transform = `translate3d(${off}px,0,0)`;
      }
      raf = requestAnimationFrame(paint);
    };
    raf = requestAnimationFrame(paint);
    return () => cancelAnimationFrame(raf);
  }, [getOffset]);

  const getCardIndexFromEvent = useCallback(
    (ev: Event | React.SyntheticEvent) => {
      const node = (ev.target as HTMLElement | null)?.closest?.("[data-card]");
      if (!node) return null;
      const idx = Number((node as HTMLElement).dataset.idx);
      return Number.isFinite(idx) ? idx : null;
    },
    [],
  );

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!e.isPrimary || (e.pointerType === "mouse" && e.button !== 0)) return;
      const outer = outerRef.current;
      if (!outer) return;

      isDraggingRef.current = true;
      setVelocity(0);

      activePointerId.current = e.pointerId;
      downX.current = e.clientX;
      lastX.current = e.clientX;
      downIdx.current = getCardIndexFromEvent(e);
      downAt.current = performance.now();
      moved.current = false;

      try {
        outer.setPointerCapture(e.pointerId);
      } catch {}
    },
    [getCardIndexFromEvent, isDraggingRef, setVelocity],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current || activePointerId.current !== e.pointerId)
        return;
      const dx = e.clientX - lastX.current;
      lastX.current = e.clientX;

      if (
        !moved.current &&
        Math.abs(e.clientX - downX.current) > DRAG_THRESHOLD
      ) {
        moved.current = true;
      }

      const off = getOffset() + dx;
      let newOff = off;
      const w = baseWidth;
      if (newOff <= -w) newOff += w;
      if (newOff >= 0) newOff -= w;

      setOffset(newOff);
      addVelocity(dx * dragFactor);
    },
    [
      DRAG_THRESHOLD,
      getOffset,
      setOffset,
      addVelocity,
      isDraggingRef,
      baseWidth,
      dragFactor,
    ],
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (activePointerId.current !== e.pointerId) return;

      const outer = outerRef.current;
      if (outer) {
        try {
          outer.releasePointerCapture(e.pointerId);
        } catch {}
      }

      const elapsed = performance.now() - downAt.current;
      const isTap = !moved.current && elapsed <= TAP_MAX_MS;

      if (isTap && onSelect && baseCount > 0) {
        const upIdx = getCardIndexFromEvent(e);
        const idx = upIdx ?? downIdx.current;
        if (idx != null) {
          const baseIdx = ((idx % baseCount) + baseCount) % baseCount;
          onSelect(items[baseIdx]);
        }
      }

      isDraggingRef.current = false;
      activePointerId.current = null;
      downIdx.current = null;
    },
    [
      TAP_MAX_MS,
      onSelect,
      items,
      baseCount,
      getCardIndexFromEvent,
      isDraggingRef,
    ],
  );

  const onPointerCancel = useCallback(() => {
    isDraggingRef.current = false;
    activePointerId.current = null;
    downIdx.current = null;
  }, [isDraggingRef]);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    const onWheelDom = (e: WheelEvent) => {
      let delta = 0;
      if (Math.abs(e.deltaX) >= Math.abs(e.deltaY)) delta = e.deltaX;
      else if (e.shiftKey) delta = e.deltaY;

      if (delta !== 0) {
        addVelocity(delta * wheelFactor);
        const off = getOffset() + delta;
        let newOff = off;
        const w = baseWidth;
        if (newOff <= -w) newOff += w;
        if (newOff >= 0) newOff -= w;
        setOffset(newOff);

        e.preventDefault();
      }
    };

    el.addEventListener("wheel", onWheelDom, { passive: false });
    return () => el.removeEventListener("wheel", onWheelDom);
  }, [addVelocity, getOffset, setOffset, baseWidth, wheelFactor]);

  return (
    <div
      ref={outerRef}
      className="relative overflow-hidden select-none"
      style={{
        touchAction: "pan-y",
        WebkitOverflowScrolling: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        overscrollBehavior: "contain",
        cursor: isDraggingRef.current ? "grabbing" : "grab",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      <div
        ref={trackRef}
        className="flex will-change-transform py-4"
        style={{
          transform: "translate3d(0,0,0)",
          gap: `${gap}px`,
        }}
      >
        {looped.map((item, idx) => {
          const baseIdx = baseCount ? idx % baseCount : idx;
          return (
            <div
              key={`${keyExtractor(item, baseIdx)}-${idx}`}
              data-card
              data-idx={baseIdx}
              className="shrink-0"
              style={{
                width: `${itemWidth}px`,
                userSelect: "none",
                pointerEvents: "auto",
              }}
              onDragStart={(e) => e.preventDefault()}
            >
              {renderCard(item, baseIdx)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
