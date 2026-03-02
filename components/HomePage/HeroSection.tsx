import ButtonLink from "@/lib/ui/shared/ButtonLink";
import HeroImage from "@/public/assets/home/hero.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="container mx-auto
    flex flex-col md:flex-row gap-6 items-center my-16 justify-between"
    >
      <div className="text-center md:text-left md:max-w-[360px] lg:max-w-[512px] xl:max-w-[650px] flex flex-col gap-6">
        <h1 className="font-black text-4xl lg:text-5xl">
          Czy Polska może być najszczęśliwszym krajem na świecie?
        </h1>
        <p className="text-lg lg:text-xl leading-normal">
          To zależy to od nas! Mamy niesamowite społeczeństwo - jeśli będziemy
          działać razem, wykorzystując wiedzę naukową i wspierając ludzi dookoła
          nas - <strong>zdecydowanie TAK!</strong>
        </p>
        <div>
          <ButtonLink
            className="inline-block"
            color={"orange"}
            variant={"solid"}
            href={"https://www.instagram.com/fundacja_szczesliwsi/"}
            target="_blank"
          >
            Wchodzę w to! Jak chcemy to zrobić?
          </ButtonLink>
        </div>
      </div>
      <div>
        <Image src={HeroImage} width={641} height={641} alt="" />
      </div>
    </section>
  );
};

export { HeroSection };
