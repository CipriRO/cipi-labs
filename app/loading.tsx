const Loading = () => {
  return (
    <main className="grid grid-cols-[repeat(auto-fit,250px)] justify-center gap-8">
      {Array.of(0, 0, 0, 0, 0, 0, 0, 0).map((_, id) => (
        <article
          key={id}
          className="flex flex-col items-start justify-between rounded-xl bg-secondary-50 p-3 shadow-sm"
        >
          <div className="aspect-square w-full" />

          <div className="w-full space-y-1">
            <div className="h-[22px] w-full rounded-xl bg-secondary-100" />
            <div className="h-[22px] w-24 rounded-xl bg-secondary-100" />
            <div className="h-[20px] w-14 rounded-xl bg-secondary-100" />
          </div>
        </article>
      ))}
    </main>
  );
};
export default Loading;
