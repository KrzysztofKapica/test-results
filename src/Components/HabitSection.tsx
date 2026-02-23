import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";


import "swiper/css";

import "swiper/css/bundle";

import { register } from "swiper/element/bundle";
import { Autoplay, Navigation } from "swiper/modules"; // Usunięto Pagination
import { Swiper, SwiperSlide } from "swiper/react";

const cardText = [
  "Cieszenie się chwilą",
  "Wdzięczność",
  "Zapisywanie faktów",
  "Pozytywne stwierdzenia",
  "Picie wody rano",
  "Technika oddechowa 4/6",
];

const HabitSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    register();
  }, []);

  const arrowStyles = `
    hidden md:flex items-center justify-center 
    min-w-[50px] h-[50px] 
    rounded-full border-2 border-white 
    bg-transparent text-white 
    transition-all duration-300 
    hover:bg-white hover:text-brandGreen
    cursor-pointer z-10
  `;

  return (
    <section className="bg-brandGreen flex flex-col justify-around px-6 py-24 bg-[url('/backgrounds/dots.svg')] overflow-hidden">
      <div className="flex flex-col items-center font-bold text-xl gap-10 w-full">
        <h3 className="text-white text-center">
          Zbadaliśmy takie mikro-nawyki jak:
        </h3>

        <div className="flex items-center justify-center w-full max-w-7xl mx-auto gap-4">
          
          {/* PRZYCISK LEWY */}
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className={arrowStyles}
            type="button"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>

          <div className="w-full overflow-hidden">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Autoplay]} // Tylko te dwa moduły
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // className teraz jest czysta, tylko padding na dole dla "oddechu" kart
              className="pb-8" 
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
                1280: { slidesPerView: 4, spaceBetween: 50 },
              }}
            >
              {cardText.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-200 rounded-lg w-[192px] h-[256px] relative mx-auto shadow-xl overflow-hidden">
                    <div className="absolute bottom-0 text-sm h-1/4 bg-white w-full rounded-b-lg text-center flex items-center justify-center px-2 text-black font-semibold">
                      {card}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* PRZYCISK PRAWY */}
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className={arrowStyles}
            type="button"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="text-white flex items-center flex-col h-1/3 pt-12">
        <h3 className="font-bold text-xl mb-4">Co chcieliśmy sprawdzić?</h3>
        <div className="flex justify-around flex-wrap text-center w-full min-h-32 items-center gap-8">
          <p className="max-w-xs leading-relaxed opacity-90">
            Badaliśmy wpływ regularności na samopoczucie.
          </p>
          <p className="max-w-xs leading-relaxed opacity-90">
            Analizowaliśmy czas potrzebny na zbudowanie trwałego nawyku.
          </p>
        </div>
      </div>
    </section>
  );
};

export { HabitSection };
