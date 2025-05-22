'use client'

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export default function GPTPartners() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  )

  return (
    <section className="mx-4 md:mx-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-white text-xl sm:text-2xl font-semibold mb-6">Our Partners</h2>

        <Carousel
          opts={{
            align: "center",
            loop: true
          }}
          plugins={[autoplayPlugin.current]}
          className="w-full overflow-visible"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {[
              { src: "/partners/cib_bank.svg", alt: "CIB Bank", height: 70 },
              { src: "/partners/bmw.svg", alt: "BMW", height: 50 },
              { src: "/partners/huawei.svg", alt: "Huawei", height: 50 },
              { src: "/partners/nasa.svg", alt: "NASA", height: 50 },
            ].map((partner, i) => (
              <CarouselItem
                key={i}
                className="pl-4 md:pl-6 basis-[80%] sm:basis-[60%] md:basis-[45%] lg:basis-[32%]"
              >
                <div className="bg-white rounded-lg h-[88px] flex items-center justify-center shadow-md">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={200}
                    height={partner.height}
                    className={`h-[${partner.height}px] object-contain`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
