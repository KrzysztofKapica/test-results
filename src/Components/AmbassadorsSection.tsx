import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";

const AmbassadorsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const ambassadors = [1, 2, 3, 4, 5, 6];
  console.log();
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
          {/* PRZYCISK LEWY */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex items-center justify-center min-w-[50px] h-[50px] rounded-full border-2 border-white text-white hover:bg-white hover:text-brandBlue transition-all z-10"
          >
            <span className="text-2xl">❮</span>
          </button>

          <div className="w-full overflow-hidden">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-12"
            >
              {ambassadors.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  {/* TWOJA WĄSKA KARTA */}
                  <div className="w-[200px] h-[300px] bg-white rounded-lg shadow-xl flex flex-col items-center justify-center text-black">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mb-4" />
                    <span className="font-bold">Ambasador {item}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* PRZYCISK PRAWY */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex items-center justify-center min-w-[50px] h-[50px] rounded-full border-2 border-white text-white hover:bg-white hover:text-brandBlue transition-all z-10"
          >
            <span className="text-2xl">❯</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export { AmbassadorsSection };
