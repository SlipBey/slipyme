import { useEffect, useRef, useCallback } from "react";

interface Opts {
  autoSpeed: number;
  inertiaDecay: number;
  loopWidth: number;
}

const MAX_DT = 0.05;
const MAX_V = 1000;
const EPS = 0.02;

export function useTicker({ autoSpeed, inertiaDecay, loopWidth }: Opts) {
  const offset = useRef(0);
  const velocity = useRef(0);
  const running = useRef(false);
  const lastTS = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  const getOffset = useCallback(() => offset.current, []);
  const setOffset = useCallback(
    (val: number) => {
      let v = val;
      const w = Math.max(1, loopWidth);
      if (v <= -w) v += w;
      if (v >= 0) v -= w;
      offset.current = v;
    },
    [loopWidth],
  );

  const addVelocity = useCallback((dv: number) => {
    const next = velocity.current + dv;
    velocity.current = Math.max(-MAX_V, Math.min(MAX_V, next));
  }, []);

  const setVelocity = useCallback((v: number) => {
    velocity.current = Math.max(-MAX_V, Math.min(MAX_V, v));
  }, []);

  const step = useCallback(
    (ts: number) => {
      if (!running.current) return;

      if (lastTS.current == null) lastTS.current = ts;
      let dt = (ts - lastTS.current) / 1000;
      lastTS.current = ts;
      if (dt > MAX_DT) dt = MAX_DT;

      const autoV = isDraggingRef.current ? 0 : autoSpeed;
      const totalV = autoV + velocity.current;

      let next = offset.current + totalV * dt;

      const w = Math.max(1, loopWidth);
      if (next <= -w) next += w;
      if (next >= 0) next -= w;
      offset.current = next;

      if (!isDraggingRef.current && Math.abs(velocity.current) > EPS) {
        const k = -Math.log(Math.max(0.0001, inertiaDecay));
        velocity.current *= Math.exp(-k * dt);
        if (Math.abs(velocity.current) < EPS) velocity.current = 0;
      }

      requestAnimationFrame(step);
    },
    [autoSpeed, inertiaDecay, loopWidth],
  );

  const start = useCallback(() => {
    if (running.current) return;
    running.current = true;
    lastTS.current = performance.now();
    requestAnimationFrame(step);
  }, [step]);

  const stop = useCallback(() => {
    running.current = false;
  }, []);

  useEffect(() => {
    start();
    return () => stop();
  }, [start, stop]);

  return {
    getOffset,
    setOffset,
    addVelocity,
    setVelocity,
    start,
    stop,
    isDraggingRef,
  };
}
