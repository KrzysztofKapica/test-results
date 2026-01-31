const TestResultsSection = () => {
  return (
    <section className="bg-[url('src/assets/backgrounds/dots.svg')] bg-brandYellow py-12 flex items-center justify-around min-h-96 flex-wrap">
      <div className="flex flex-col flex-wrap items-center w-64 h-48 text-center justify-around my-4 mx-2">
        <h3 className="text-2xl font-bold">Cel badania</h3>
        <p className="text-sm">
          Chcemy pokazać, że zmiany na lepsze nie oznaczają wywracania życia do
          góry nogami. Wystarczy{" "}
          <span className="font-bold">systematyka i 10 minut dziennie!</span>
        </p>
        <p className="text-sm">
          Wyjaśnijmy, od czego zależy nasze szczęście, na podstawie zasady
          50-10-40.
        </p>
      </div>
      <div className="grid text-xl grid-rows-2 grid-cols-2 w-1/2 text-center gap-6 my-4">
        <div className="flex flex-col  justify-center">
          <p className="font-bold">00%</p>
          <p>zależy od genów</p>
        </div>
        <div className="flex flex-col  justify-center">
          <p className="font-bold">00%</p>
          <p>zależy od okoloiczności życiowych</p>
        </div>
        <div className="flex flex-col  justify-end">
          <p>Co najważniejsze</p>
        </div>
        <div className="flex flex-col  justify-end">
          <p className="font-bold">00%</p>
          <p>zależy od nas samych!</p>
        </div>
      </div>
    </section>
  );
};

export { TestResultsSection };
