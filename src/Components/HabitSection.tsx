import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const cardText = [
  "Cieszenie się chwilą",
  "Wdzięczność",
  "Zapisywanie faktów",
  "Pozytywne stwierdzenia",
  "Picie wody rano",
  "Technika oddechowa 4/6",
];

const HabitSection = () => {
  useEffect(() => {
    register();
  }, []);

  return (
    <section className="bg-brandGreen flex flex-col justify-around px-6 py-24 bg-[url('/backgrounds/dots.svg')] overflow-hidden">
      <div className="flex flex-col items-center font-bold text-xl gap-10 w-full">
        <h3 className="text-white text-center">
          Zbadaliśmy takie mikro-nawyki jak:
        </h3>

        <div className="w-full max-w-7xl mx-auto min-w-0 ">
          <Swiper
            className=" [&_.swiper-button-prev]:text-white [&_.swiper-button-next]:text-white "
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {cardText.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-200 rounded-lg w-[192px] h-[256px] relative mx-auto shadow-xl">
                  <div className="absolute bottom-0 text-sm h-1/4 bg-white w-full rounded-b-lg text-center flex items-center justify-center px-2 text-black font-semibold">
                    {card}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="text-white flex items-center flex-col h-1/3 pt-12">
        <h3 className="font-bold text-xl mb-4">Co chcieliśmy sprawdzić?</h3>
        <div className="flex justify-around flex-wrap text-center w-full min-h-32 items-center gap-8">
          <p className="max-w-xs leading-relaxed opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            aliquid
          </p>
          <p className="max-w-xs leading-relaxed opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            aliquid
          </p>
        </div>
      </div>
    </section>
  );
};

export { HabitSection };
