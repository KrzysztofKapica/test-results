"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, forwardRef, useImperativeHandle } from "react";

export interface CarouselApi {
  scrollPrev: () => void;
  scrollNext: () => void;
}

export const Carousel = forwardRef(({ items }: { items: ReactNode[] }, ref) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  
  useImperativeHandle(ref, () => ({
    scrollPrev: () => emblaApi?.scrollPrev(),
    scrollNext: () => emblaApi?.scrollNext(),
  }));

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex gap-6">
        {items.map((item, i) => (
          <div key={i} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
});

Carousel.displayName = "Carousel";