"use client"

import { useEffect, useRef, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import type { EmblaCarouselType } from "embla-carousel"

interface Testimonial {
  id: number
  name: string
  avatar: string
  quote: string
  verified: boolean
}

export default function Testimonials() {
  // explicitly type api as EmblaCarouselType or undefined
  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jonathan Sweeney",
      avatar: "/clients/client-01.webp",
      quote:
        "I love that model. I [used to have to] call all around, and I absolutely love that model that you could save me the time and headache of doing that.",
      verified: true,
    },
    {
      id: 2,
      name: "Barbara Cook",
      avatar: "/clients/client-02.webp",
      quote:
        "I am so happy with your company. Ever since my insurance switched to you, everything and everybody I've spoken to has been extremely, extremely pleasant, helpful, and they listen to my concerns instead of just saying okay!",
      verified: true,
    },
    {
      id: 3,
      name: "Mary Rogers",
      avatar: "/clients/client-03.webp",
      quote:
        "I just want to thank you for the great job you did during my transition to oxygen. You unraveled all the confusion and the new company is wonderful.",
      verified: true,
    },
    {
      id: 4,
      name: "David Johnson",
      avatar: "/clients/client-01.webp",
      quote:
        "Outstanding service and support. The team goes above and beyond to ensure customer satisfaction. Highly recommended for anyone looking for reliable solutions.",
      verified: true,
    },
    {
      id: 5,
      name: "Sarah Wilson",
      avatar: "/clients/client-02.webp",
      quote:
        "Professional, efficient, and always available when needed. Their expertise has been invaluable to our business growth and success.",
      verified: true,
    },
  ]

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
    testimonial,
  }) => (
    <div className="bg-neutral-800 rounded-lg p-6 h-full">
      {/* Avatar and Name */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
          {testimonial.verified && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
        <h3 className="text-white font-semibold text-lg">
          {testimonial.name}
        </h3>
      </div>

      {/* Quote */}
      <blockquote className="text-gray-300 leading-relaxed">
        &quot;{testimonial.quote}&quot;
      </blockquote>
    </div>
  )

  return (
    <section className=" py-16 bg-primary mb-96">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">
            Our clients’ opinions
          </h2>
        </div>

        <Carousel
          setApi={setApi} // now matches (api: EmblaCarouselType|undefined) => void
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem
                key={t.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={t} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Arrows */}
          <div className="hidden lg:block">
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </div>
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1 mt-8">
          {Array.from({ length: count }).map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx + 1 === current
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              onClick={() => api?.scrollTo(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
