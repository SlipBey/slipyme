"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useTicker } from "./useTicker";
import { cn } from "@/lib/cn";

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
  className?: string;
}

const TAP_DRAG_THRESHOLD = 6;

export function Carousel<T extends CarouselItemBase>({
  items,
  renderCard,
  keyExtractor = (_, i) => i,
  onSelect,
  autoSpeed = -58,
  inertiaDecay = 0.965,
  itemWidth = 280,
  gap = 24,
  tapMs = 260,
  dragFactor = 20,
  wheelFactor = 1.2,
  className,
}: CarouselProps<T>) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const activePointerId = useRef<number | null>(null);
  const downX = useRef(0);
  const lastX = useRef(0);
  const moved = useRef(false);
  const downIdx = useRef<number | null>(null);
  const downAt = useRef(0);

  const safeItems = useMemo(() => items.filter(Boolean), [items]);
  const baseCount = safeItems.length;

  const looped = useMemo(() => {
    if (!baseCount) return [] as T[];
    return [...safeItems, ...safeItems, ...safeItems];
  }, [safeItems, baseCount]);

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

  useEffect(() => {
    if (baseCount <= 1) return;
    start();
    return () => stop();
  }, [baseCount, start, stop]);

  useEffect(() => {
    let raf = 0;

    const paint = () => {
      const track = trackRef.current;
      if (track) {
        track.style.transform = `translate3d(${getOffset()}px,0,0)`;
      }
      raf = requestAnimationFrame(paint);
    };

    raf = requestAnimationFrame(paint);
    return () => cancelAnimationFrame(raf);
  }, [getOffset]);

  const getCardIndexFromEvent = useCallback(
    (ev: Event | React.SyntheticEvent) => {
      const node = (ev.target as HTMLElement | null)?.closest?.(
        "[data-carousel-card]",
      );
      if (!node) return null;
      const idx = Number((node as HTMLElement).dataset.idx);
      return Number.isFinite(idx) ? idx : null;
    },
    [],
  );

  const normalizeOffset = useCallback(
    (value: number) => {
      let next = value;
      const w = Math.max(1, baseWidth);
      while (next <= -w) next += w;
      while (next >= 0) next -= w;
      return next;
    },
    [baseWidth],
  );

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!e.isPrimary || (e.pointerType === "mouse" && e.button !== 0)) return;
      if (!outerRef.current || baseCount <= 1) return;

      isDraggingRef.current = true;
      setVelocity(0);
      activePointerId.current = e.pointerId;
      downX.current = e.clientX;
      lastX.current = e.clientX;
      downIdx.current = getCardIndexFromEvent(e);
      downAt.current = performance.now();
      moved.current = false;

      try {
        outerRef.current.setPointerCapture(e.pointerId);
      } catch {}
    },
    [baseCount, getCardIndexFromEvent, isDraggingRef, setVelocity],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDraggingRef.current || activePointerId.current !== e.pointerId)
        return;

      const dx = e.clientX - lastX.current;
      lastX.current = e.clientX;

      if (
        !moved.current &&
        Math.abs(e.clientX - downX.current) > TAP_DRAG_THRESHOLD
      ) {
        moved.current = true;
      }

      setOffset(normalizeOffset(getOffset() + dx));
      addVelocity(dx * dragFactor);
    },
    [
      addVelocity,
      dragFactor,
      getOffset,
      isDraggingRef,
      normalizeOffset,
      setOffset,
    ],
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (activePointerId.current !== e.pointerId) return;

      if (outerRef.current) {
        try {
          outerRef.current.releasePointerCapture(e.pointerId);
        } catch {}
      }

      const elapsed = performance.now() - downAt.current;
      const isTap = !moved.current && elapsed <= tapMs;

      if (isTap && onSelect && baseCount > 0) {
        const upIdx = getCardIndexFromEvent(e);
        const idx = upIdx ?? downIdx.current;
        if (idx != null) {
          const baseIdx = ((idx % baseCount) + baseCount) % baseCount;
          onSelect(safeItems[baseIdx]);
        }
      }

      isDraggingRef.current = false;
      activePointerId.current = null;
      downIdx.current = null;
    },
    [
      baseCount,
      getCardIndexFromEvent,
      isDraggingRef,
      onSelect,
      safeItems,
      tapMs,
    ],
  );

  const onPointerCancel = useCallback(() => {
    isDraggingRef.current = false;
    activePointerId.current = null;
    downIdx.current = null;
  }, [isDraggingRef]);

  useEffect(() => {
    const el = outerRef.current;
    if (!el || baseCount <= 1) return;

    const onWheelDom = (e: WheelEvent) => {
      let delta = 0;
      if (Math.abs(e.deltaX) >= Math.abs(e.deltaY)) delta = e.deltaX;
      else if (e.shiftKey) delta = e.deltaY;

      if (delta === 0) return;

      addVelocity(delta * wheelFactor);
      setOffset(normalizeOffset(getOffset() + delta));
      e.preventDefault();
    };

    el.addEventListener("wheel", onWheelDom, { passive: false });
    return () => el.removeEventListener("wheel", onWheelDom);
  }, [
    addVelocity,
    baseCount,
    getOffset,
    normalizeOffset,
    setOffset,
    wheelFactor,
  ]);

  if (!baseCount) return null;

  return (
    <div
      ref={outerRef}
      className={cn("relative overflow-hidden select-none", className)}
      style={{
        touchAction: "pan-y",
        WebkitOverflowScrolling: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        overscrollBehavior: "contain",
        cursor: baseCount > 1 ? "grab" : "default",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      <div
        ref={trackRef}
        className="flex will-change-transform py-5"
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
              data-carousel-card
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
