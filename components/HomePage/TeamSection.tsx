import ButtonLink from "@/lib/ui/shared/ButtonLink";
import CeoImage from "@/public/assets/home/ceo.svg";
import Image from "next/image";

const TeamSection = () => {
  return (
    <section className="flex flex-col md:flex-row gap-12 justify-around">
      <div className="md:flex-1/3 md:order-2 md:max-w-[971px] rounded-tr-xl rounded-br-xl bg-[#F3C11B] relative h-[500px] md:h-auto before:h-full  before:w-full before:bg-[url('@/public/assets/backgrounds/straight-lines.svg')] before:absolute before:top-0 before:left-0  before:bg-left before:bg-cover">
        <Image
          className="object-cover absolute bottom-[-15px] md:bottom-unset  md:top-1/2 left-[30px] md:-left-[30px] md:right-[-30px] transform md:-translate-y-1/2 max-w-[250px] md:max-w-unset"
          src={CeoImage}
          width={340}
          height={492}
          alt=""
        />
      </div>
      <div className="max-w-[900px] pt-5 pb-15 md:py-20 lg:py-25 container flex-2/3 text-center flex gap-4 flex-col items-center">
        <h2 className="max-w-[700px] font-extrabold text-3xl md:text-4xl lg:text-4xl">
          Superbohaterami, którzy mogą zmieniać na lepsze świat dookoła nas,
          jesteś Ty i ja!
        </h2>
        <p className="text-md md:text-lg">
          Angelo Korzekwa, <b>Founder Fundacji Szczęśliwi</b>
        </p>

        <p className="text-lg lg:text-xl">
          Kim jesteśmy? <br />
          Ludźmi, którzy chcą zostawić ten świat choć trochę lepszym, niż go
          zastali. A nawet jeszcze lepiej - zobaczyć ten świat chociaż trochę
          lepszym i się nim cieszyć. <b>Nim i dobrymi ludźmi dookoła nas.</b>
        </p>
        <div className="mt-6">
          <ButtonLink
            color="blue"
            variant="outline"
            href="https://www.instagram.com/fundacja_szczesliwsi/"
            target="_blank"
          >
            Rolki o zespole znajdziesz na naszym Insta!
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
export { TeamSection };
