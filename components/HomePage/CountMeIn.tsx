import ButtonLink from "@/lib/ui/shared/ButtonLink";

const CountMeIn = () => {
  return (
    <section className=" py-16  relative">
      <div className="container mx-auto flex">
        <div className="flex flex-col gap-6 ">
          <h3 className="text-4xl font-bold">Chcesz nam pomóc?</h3>
          <p className="text-xl lg:text-2xl max-w-[650px]">
            Jeśli uważasz, że to ma sens i jest chociaż szansa jedna na milion,
            że się uda - zapraszamy do współpracy!
          </p>

          <p className="text-lg max-w-[850px]">
            To wyzwanie na skalę większą niż Pokojowa Nagroda Nobla - sami nie
            damy rady - to jest możliwe tylko razem. Jeżeli chcesz się
            zaangażować, lub masz konkretny pomysł na poprawki w naszym planie -
            napisz do nas!
          </p>
          <div>
            <ButtonLink
              className="inline-block mt-4"
              color={"orange"}
              variant={"solid"}
              href={"https://www.instagram.com/fundacja_szczesliwsi/"}
              target="_blank"
            >
              Dołącz do nas!
            </ButtonLink>
          </div>
        </div>
        <div className="absolute h-full top-0 right-0 w-1/3 bg-[url('@/public/assets/backgrounds/messy-lines.svg')] bg-cover opacity-15" />
      </div>
    </section>
  );
};

export { CountMeIn };
