"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Carousel, CarouselApi } from "../../../lib/ui/shared/Carousel";
import { missionItems } from "./mission.data";
import { MissionCard } from "./MissionCard";

const MissionSection = () => {
  const carouselRef = useRef<CarouselApi>(null);

  const cards = missionItems.map((item) => (
    <MissionCard key={item.id} {...item} />
  ));


  const arrowStyles = `
    absolute top-1/2 -translate-y-1/2 z-[50] 
    w-14 h-14 flex items-center justify-center 
    rounded-full border-2 border-white bg-transparent text-white
    transition-all duration-300 
    hover:bg-white hover:text-[#3D38F5]
    cursor-pointer hidden lg:flex
  `;

  return (
    <section id="misja" className="container mx-auto mb-16 px-4">
      <div className="text-center my-16">
        <h2 className="text-4xl font-extrabold mb-4">
          Co my konkretnie chcemy zrobić?
        </h2>
        <p className="text-xl max-w-4xl mx-auto">
          Chcemy podnieść poziom szczęśliwości w Polsce...
        </p>
      </div>

      <div className="mb-16 hidden lg:block relative px-20">
        <Carousel items={cards} ref={carouselRef} />

        <button 
          className={`${arrowStyles} -left-2`}
          onClick={() => carouselRef.current?.scrollPrev()}
        >
          <ChevronLeft size={36} strokeWidth={2.5} />
        </button>

        <button 
          className={`${arrowStyles} -right-2`}
          onClick={() => carouselRef.current?.scrollNext()}
        >
          <ChevronRight size={36} strokeWidth={2.5} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2 gap-4 lg:hidden">
        {cards}
      </div>
    </section>
  );
};

export { MissionSection };
