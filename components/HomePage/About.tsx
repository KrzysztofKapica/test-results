import ButtonLink from "@/lib/ui/shared/ButtonLink";
import LogoSimple from "@/public/assets/global/logo-simple.svg";
import AboutImage from "@/public/assets/home/about.svg";
import Image from "next/image";
const About = () => {
  return (
    <section
      id="o-nas"
      className="flex flex-col md:flex-row gap-12 justify-around"
    >
      <div className="md:flex-1/3 md:max-w-[971px] bg-[#F06E36] relative h-[500px] md:h-auto before:h-full before:w-1/3 before:bg-[url('@/public/assets/backgrounds/bubbles.svg')] before:absolute before:top-0 before:left-0  before:bg-left  before:bg-repeat">
        <Image
          className="absolute top-3 right-3"
          src={LogoSimple}
          width={44}
          height={44}
          alt=""
        />
        <Image
          className="object-cover absolute bottom-[-15px] md:bottom-unset  md:top-4/7 right-[30px] md:right-[-30px] transform md:-translate-y-1/2 max-w-[250px] md:max-w-unset"
          src={AboutImage}
          width={287}
          height={414}
          alt=""
        />
      </div>
      <div className=" max-w-[900px] pt-5 pb-15 md:py-20 lg:py-28 container flex-2/3 text-center flex gap-4 flex-col items-center">
        <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
          O Fundacji Szczęśliwsi
        </h2>
        <p className="text-xl lg:text-2xl">
          Dążymy do tego, by szczęście było codziennością, nie wyjątkiem.
        </p>

        <p className="text-lg lg:text-xl">
          Według Harvard Study of Adult Development najważniejsze aspekty
          wpływające na długotrwałe szczęście i zadowolenie z życia to:
        </p>
        <ol className="list-decimal text-left text-lg lg:text-xl">
          <li>Relacje międzyludzkie</li>
          <li>Zdrowie fizyczne i psychiczne</li>
          <li>Poczucie celu i sensu życia</li>
        </ol>

        <div className="flex-col md:flex-row flex mx-auto gap-6 mt-6">
          <ButtonLink
            href="https://www.youtube.com/watch?v=8KkKuTCFvzI"
            color="blue"
            variant="solid"
            target="_blank"
          >
            Posłuchaj dyrektora tych badań
          </ButtonLink>
          <ButtonLink
            href="/assets/home/fundacja-szczesliwsi-prezentacja.pdf"
            color="blue"
            variant="outline"
            target="_blank"
          >
            Nasz plan
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export { About };
