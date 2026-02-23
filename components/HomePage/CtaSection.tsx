import ButtonLink from "@/lib/ui/shared/ButtonLink";

const CTASection = () => {
  return (
    <section className="py-16 bg-[#198F51] relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[url('@/public/assets/backgrounds/bubbles.svg')]">
      <div className="container mx-auto relative flex flex-col items-center justify-center text-center ">
        <h3 className="text-white font-extrabold text-3xl md:text-4xl leading-snug">
          Do zbudowania bazy wiedzy potrzebujemy najlepszych naukowych
          autorytetów z zakresu psychologii i zdrowia fizycznego, ale też np.
          zarządzania czasem i komunikacji. Masz kogoś do polecenia?
        </h3>
        <div className="flex-col md:flex-row flex gap-3 md:gap-6 mt-12">
          <ButtonLink
            color="orange"
            variant="solid"
            href="https://www.instagram.com/fundacja_szczesliwsi/"
            target="_blank"
          >
            Wyślę Wam na Instagramie
          </ButtonLink>
          <ButtonLink
            className="bg-[rgba(255,255,255,0.8)]"
            color="purple"
            variant="outline"
            href="https://www.linkedin.com/company/fundacja-szcz%C4%99%C5%9Bliwsi/"
            target="_blank"
          >
            Napiszę na LinkedIn
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export { CTASection };
