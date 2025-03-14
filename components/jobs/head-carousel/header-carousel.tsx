"use client";

interface Props {
  data: DataProps[];
}

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
import { ArrowRightIcon } from "@/lib/icons";
import { DataProps } from "./data";

function HeaderCarousel({ data }: Props) {
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
        <CarouselContent className="py-2 px-8 ">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex-[0_0_80%] pr-1 pl-1 -ml-1"
            >
              <div className="0">
                <Card className="p-0">
                  <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden relative rounded-xl">
                    <div className="h-full w-full">
                      <img
                        src={item.image}
                        alt=""
                        height="100%"
                        width="100%"
                        className="h-full w-full"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="absolute top-0 leading-0 h-full w-full z-10 bg-black/50" />
                    </div>
                    <div className="absolute bottom-0 left-0 h-full w-full flex flex-col justify-end z-10 p-6 space-y-2">
                      <p className="text-[0.75rem] font-semibold text-white/85 tracking-wider uppercase">
                        {item.category}
                      </p>
                      <h1 className="font-bold text-2xl text-white line-clamp-3">
                        {item.description}
                      </h1>
                      <p className="text-white/70 text-[13px]">{item.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="py-4 flex items-center justify-between h-12 px-6 relative">
          <div className="flex items-center gap-2 relative">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
            <CarouselNext className="relative right-0 top-0 translate-y-0" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[0.8rem] font-medium">
              Continue scrolling for more content
            </p>
            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HeaderCarousel;
