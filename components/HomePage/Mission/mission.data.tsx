import Communication from "@/public/assets/home/carousel/communication.webp";
import Goals from "@/public/assets/home/carousel/goals.webp";
import HelpingOthers from "@/public/assets/home/carousel/helping-others.webp";
import MentalReadiness from "@/public/assets/home/carousel/mental-readiness.webp";
import MuchMore from "@/public/assets/home/carousel/much-more.webp";
import Relations from "@/public/assets/home/carousel/relations.webp";
import TeamBuilding from "@/public/assets/home/carousel/teambuilding.webp";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type MissionCard = {
  id: number;
  title: string;
  summary: string | React.ReactNode;
  image: string | StaticImport;
  bgShapes:
    | "bubbles"
    | "straight-lines"
    | "messy-lines"
    | "circly-lines"
    | "dots";
  bgColor: "green" | "blue" | "orange" | "yellow" | "purple";
  shapeMode?: "cover" | "contain";
};

export const missionItems: MissionCard[] = [
  {
    id: 1,
    title: "Odporność psychiczna",
    bgShapes: "bubbles",
    bgColor: "green",
    image: MentalReadiness,
    summary: (
      <>
        Wylosowaliśmy ciekawe czasy - potrzebujemy sprawdzonych metod
        zarządzania stresem i rozróżniania:
        <ul className="list-disc pl-5">
          <li className="">
            Na co mamy wpływ, żeby działać z pełnym zaangażowaniem tam, gdzie
            możemy poprawić sytuację i osiągnąć efekty!
          </li>
          <li className="">
            I na co wpływu nie mamy i czym nie warto się przejmować. I jak się
            nie przejmować!
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "Mana - relacje z bliskimi",
    bgShapes: "messy-lines",
    bgColor: "purple",
    image: Relations,
    summary: (
      <>
        Wiesz, że w{" "}
        <a
          href="https://news.harvard.edu/gazette/story/2023/02/work-out-daily-ok-but-how-socially-fit-are-you/"
          target="_blank"
          className="hover:underline text-blue-600 font-semibold"
        >
          badaniu Harvarda
        </a>{" "}
        wykazali, że satysfakcja z bliskich relacji, szczególnie małżeńskich,
        jest silniejszym wskaźnikiem zdrowia i długowieczności niż niski poziom
        cholesterolu? <br />
        Kto chce dożyć szczęśliwie 80 lat? Bo ja chętnie!
      </>
    ),
  },
  {
    id: 3,
    title: "Skuteczna komunikacja",
    bgShapes: "straight-lines",
    bgColor: "yellow",
    image: Communication,
    summary: (
      <>
        Podstawa każdej relacji i projektu - po prostu warto się umieć (i
        chcieć) z drugą osobą dogadać. <br />
        Tym bardziej, że jesteśmy załogą jednego statku i musimy zgodnie ciągnąć
        za liny!
      </>
    ),
  },
  {
    id: 4,
    title: "Zamiana marzeń w cele",
    bgColor: "orange",
    bgShapes: "circly-lines",
    summary: (
      <>
        Zaczyna się od marzeń, ale ważne, żeby te najlepsze zamieniać w cele, a
        potem w plany i... <br />
        spełniać! <br />
        Bo tylko my to możemy zrobić! <br />A cel w życiu to ważny czynnik
        szczęścia!
      </>
    ),
    image: Goals,
  },
  {
    id: 5,
    title: "Budowanie społeczności",
    bgColor: "blue",
    bgShapes: "dots",
    summary: (
      <>
        W pracy spędzamy jedną trzecią naszego życia - posiadanie pracy, którą
        się lubi, o którą się dba i którą uważa się za znaczącą jest bardzo
        ważne dla ogólnej satysfakcji z życia i zdrowia.
      </>
    ),
    image: TeamBuilding,
  },
  {
    id: 6,
    title: "Pomaganie innym",
    bgColor: "green",
    bgShapes: "straight-lines",
    summary: (
      <>
        Badania wykazały silną korelację z satysfakcją życiową oraz ogólnym
        dobrostanem psychicznym. Jest to zjawisko tak powszechne, że w
        przeglądzie systematycznym 100% z 29 unikalnych badań poparło pozytywny
        wpływ pomagania na samopoczucie psychiczne Oraz w przyszłości
      </>
    ),
    image: HelpingOthers,
  },
  {
    id: 7,
    title: "I wiele innych",
    bgColor: "orange",
    bgShapes: "bubbles",
    summary: (
      <>
        Jest mnóstwo przebadanych metod do przetestowania, medytacja,
        wdzięczność, uważność, czy nawet podstawa - zdrowa, dopasowana pod nasz
        organizm dieta, to wszystko ma znaczenie!
      </>
    ),
    image: MuchMore,
  },
];
