import { useEffect, useRef, useState } from "react";

const Counter = ({ targetValue }: { targetValue: number }) => {
  const [count, setCount] = useState(0);
  const [shouldStart, setShouldStart] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // threshold 0.7 oznacza, że aż 70% sekcji musi być na ekranie
        if (entry.isIntersecting) {
          // Dodajemy małe opóźnienie (delay), żeby użytkownik zauważył start
          setTimeout(() => {
            setShouldStart(true);
          }, 400); 
        }
      },
      { threshold: 0.7 } 
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    const end = targetValue;
    const duration = 2000; // Zwiększyłem do 2s, żeby efekt był wyraźniejszy
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const increment = end / totalFrames;

    let currentFrame = 0;
    const timer = setInterval(() => {
      currentFrame++;
      start += increment;
      
      if (currentFrame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [shouldStart, targetValue]);

  return <span ref={countRef}>{count}%</span>;
};

const TestResultsSection = () => {
  return (
    <section className="bg-[url('/backgrounds/dots.svg')] bg-brandYellow py-12 flex items-center justify-around min-h-96 flex-wrap overflow-hidden">
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
      <div className="grid text-2xl grid-rows-2 grid-cols-1 w-1/2 text-center gap-6 my-4 sm:grid-cols-2 ">
        <div className="flex flex-col justify-center">
          <p className="font-bold text-3xl">
            <Counter targetValue={50} />
          </p>
          <p className="text-lg">zależy od genów</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-3xl">
            <Counter targetValue={10} />
          </p>
          <p className="text-lg">zależy od okoliczności życiowych</p>
        </div>
        <div className="flex flex-col justify-end">
          <p className="italic text-lg text-gray-700">Co najważniejsze...</p>
        </div>
        <div className="flex flex-col justify-end">
          <p className="font-bold text-5xl text-brandBlue">
            <Counter targetValue={40} />
          </p>
          <p className="text-lg font-semibold">zależy od nas samych!</p>
        </div>
      </div>
    </section>
  );
};

export { TestResultsSection };
