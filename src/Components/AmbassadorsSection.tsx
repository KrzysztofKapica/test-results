import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";

import "swiper/css/bundle";

const AmbassadorsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const ambassadors = [1, 2, 3, 4, 5, 6];

  return (
    <section className="bg-brandBlue py-24 bg-[url('/backgrounds/dots.svg')] overflow-hidden">
      <div className="flex flex-col items-center gap-10 w-full px-6">
        <div className="text-white text-center">
          <h3 className="font-bold text-xl uppercase tracking-wider mb-2">
            Ambasadorzy
          </h3>
          <p className="opacity-90">
            Tutaj znajdziecie publikacje ambasadorów naszego badania:
          </p>
        </div>

        <div className="flex items-center justify-center w-full max-w-7xl mx-auto gap-4">
         
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex items-center justify-center min-w-[50px] h-[50px] rounded-full border-2 border-white text-white hover:bg-white hover:text-brandBlue transition-all z-10"
            type="button"
          >
            <span className="text-2xl leading-none">❮</span>
          </button>

          <div className="w-full overflow-hidden">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-4" 
            >
              {ambassadors.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="w-[200px] h-[300px] bg-white rounded-lg shadow-xl flex flex-col items-center justify-center text-black">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mb-4" />
                    <span className="font-bold">Ambasador {item}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex items-center justify-center min-w-[50px] h-[50px] rounded-full border-2 border-white text-white hover:bg-white hover:text-brandBlue transition-all z-10"
            type="button"
          >
            <span className="text-2xl leading-none">❯</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export { AmbassadorsSection };
