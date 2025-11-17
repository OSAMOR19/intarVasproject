"use client";

"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin({ list }: { list?: any }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[300px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent
        style={{
          backgroundColor: "transparent",
        }}
      >
        {list?.map((item, index) => (
          <CarouselItem key={index}>
            <Card className="min-h-[200px] bg-[#0C0C0C] flex flex-col items-center justify-around space-y-4 p-2">
              <CardContent>
                {" "}
                <div
                  className={`bg-[#1F2228] z-10 w-16 h-16 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-[#2A2D35]`}
                >
                  {item?.icon}
                </div>
              </CardContent>
              <CardContent>
                <div className="flex-1">
                  <h3 className="text-sm transition-all text-center duration-300 hover:text-white">
                    <span className="text-blue-500 font-medium transition-all duration-300 hover:text-blue-400">
                      {item?.title}
                    </span>
                    <span className="text-gray-300 ml-2 transition-all duration-300 hover:text-gray-200">
                      {item?.subtitle}
                    </span>
                  </h3>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
