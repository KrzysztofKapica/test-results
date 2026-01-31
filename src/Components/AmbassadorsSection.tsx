const cardStyles = "w-64 h-[40vh] justify-center gap-4 flex-wrap bg-white";

const AmbassadorsSection = () => {
  return (
    <section className="bg-brandBlue py-6 bg-[url('src/assets/backgrounds/dots.svg')]">
      <div className="w-full flex flex-col items-center gap-4 p-8 text-white text-center">
        <h3 className="font-bold text-xl">Ambasadorzy</h3>
        <p>Tutaj znajdziecie publikacje ambasadorów naszego badania:</p>
      </div>
      <div className="flex w-full justify-center gap-4 flex-wrap">
        <div className={cardStyles}></div>
        <div className={cardStyles}></div>
        <div className={cardStyles}></div>
        <div className={cardStyles}></div>
      </div>
    </section>
  );
};

export { AmbassadorsSection };
