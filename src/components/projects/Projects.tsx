import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { solutions } from "../../lib/solutions";
import React from "react";
export default function Projects() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="w-full relative overflow-hidden bg-[#1C2529] my-16">
      <div className="container mx-auto relative py-14 flex flex-col md:flex-col lg:flow-root gap-5 px-4">
        {/* Left side */}
        <div className="w-full md:w-2/3 lg:w-[250px]">
          <button className="bg-white text-[#253237] font-semibold px-1 text-base md:text-base lg:text-sm">
            Works we did
          </button>
          <h1 className="text-[45px] font-medium text-white leading-none my-4">
            Our Projects
          </h1>
          <p className="text-base md:text-lg lg:text-sm font-medium text-[#EEF2F2]">
            Lorem ipsum dolor sit amet, umet u consectetur korim adipiscing elit
            Amet bin koki uboi ipsum dolor sit amet, consectetur korim
            adipiscing{" "}
          </p>
        </div>
        <Carousel
         plugins={[autoplayPlugin.current]}
         onMouseEnter={autoplayPlugin.current.stop}
         onMouseLeave={autoplayPlugin.current.play}
        className="w-full">
          <CarouselContent className="-ml-1">
            {solutions.map((solution, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 relative">
                  <img className="shrink-0 object-cover lg:h-[300px]" src={solution.image} alt="" />
                  <button className="text-lg shadow absolute bottom-6 left-5 shadow-[#1A1A1A4D] bg-[#1D0E45] p-4 text-[#EEF2F2]">{solution.name}</button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
