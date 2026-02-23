import ButtonLink from "@/lib/ui/shared/ButtonLink";
import StarBlue from "@/public/assets/home/star-blue.svg";
import StarGreen from "@/public/assets/home/star-green.svg";
import StarOrange from "@/public/assets/home/star-orange.svg";
import StarPurple from "@/public/assets/home/star-purple.svg";
import StarYellow from "@/public/assets/home/star-yellow.svg";
import Star from "@/public/assets/home/star.svg";
import Image from "next/image";

const data = [
  { name: "Zarządzania stresem", id: 1, img: StarYellow },
  { name: "Pracy z emocjami", id: 2, img: StarBlue },
  { name: "Zdrowego snu", id: 3, img: StarOrange },
  { name: "Dopasowanej diety", id: 4, img: StarPurple },
  { name: "Aktywności fizycznej", id: 5, img: StarGreen },
];

const KnowledgeBase = () => {
  return (
    <section id="baza-wiedzy" className="mt-16 overflow-x-hidden">
      <div className="relative before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-1/2 before:bg-[#2F2F2F] before:-z-10">
        <div
          className={[
            "relative w-fit mx-auto",
            "before:content-[''] before:absolute before:top-0 before:right-1/2 before:w-[100%] before:h-1/2 before:bg-[url('@/public/assets/backgrounds/circly-lines.svg')] before:bg-cover before:bg-right-top before:-z-10",
            "after:content-[''] after:absolute after:top-0 after:left-1/2  after:w-[100%] after:h-1/2 after:bg-[url('@/public/assets/backgrounds/wavy-lines.svg')] after:-z-10 after:bg-cover",
          ].join(" ")}
        >
          <Image
            className="relative z-10"
            src={Star}
            width={1186}
            height={1137}
            alt=""
          />

          <div className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <h3 className="text-md sm:text-xl md:text-3xl lg:text-5xl text-white font-extrabold">
              Baza wiedzy
            </h3>
            <p className="text-sm sm:text-md md:text-lg text-white lg:text-xl mt-4">
              Zbieramy rekomendacje najlepszych autorytetów naukowych w obszarze
              zdrowia psychicznego i fizycznego, a szczególnie:
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#2F2F2F] w-full text-white relative -top-[1px]">
        <div className="container mx-auto relative -top-18 sm:-top-36 md:-top-48 lg:-top-64 z-10">
          <ul className="text-md md:text-lg lg:text-3xl font-extrabold flex flex-wrap gap-16 justify-center mb-32">
            {data.map((item) => {
              return (
                <li
                  className="flex flex-nowrap gap-8 items-center"
                  key={item.id}
                >
                  <Image
                    className="max-w-12 md:max-w-24 lg:max-w-unset"
                    src={item.img}
                    height={89}
                    width={92}
                    alt="star"
                  />
                  {item.name}
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col items-center gap-8 relative  sm:top-12">
            <p className="text-xl md:text-2xl font-bold text-center">
              Znasz człowieka, którego wiedza powinna się tutaj znaleźć?
            </p>
            <ButtonLink
              variant="solid"
              color="orange"
              href="https://www.instagram.com/fundacja_szczesliwsi/"
              target="_blank"
            >
              Napisz do Nas!
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export { KnowledgeBase };
