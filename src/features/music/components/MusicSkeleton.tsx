export function MusicSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/45 p-4 shadow-sm ring-1 ring-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/4 dark:ring-white/10"
        >
          <div className="aspect-square animate-pulse rounded-2xl bg-zinc-200/70 dark:bg-white/10" />
          <div className="mt-4 h-4 w-2/3 animate-pulse rounded-full bg-zinc-200/70 dark:bg-white/10" />
          <div className="mt-3 h-3 w-1/2 animate-pulse rounded-full bg-zinc-200/70 dark:bg-white/10" />
          <div className="mt-5 h-10 animate-pulse rounded-xl bg-zinc-200/70 dark:bg-white/10" />
        </div>
      ))}
    </div>
  );
}
