"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function HeaderCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full flex flex-col"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="py-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex-[0_0_80%] pr-1 pl-1 -ml-1"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="py-4 flex justify-between items-center h-12 px-6">
          <div className="flex items-center gap-2 relative">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
            <CarouselNext className="relative right-0 top-0 translate-y-0" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HeaderCarousel;
