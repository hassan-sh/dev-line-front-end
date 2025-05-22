'use client'

import Image from "next/image"

const services = [
  {
    title: "Video Making",
    description: "Random content",
    icon: "/icons/video.svg", // Add your SVGs in public/icons
  },
  {
    title: "Branding",
    description: "Random content to fill the blank space",
    icon: "/icons/branding.svg",
  },
  {
    title: "Marketing strategy",
    description: "Random content to fill the blank space",
    icon: "/icons/marketing.svg",
  },
  {
    title: "Email Marketing",
    description: "Random content",
    icon: "/icons/email.svg",
  },
  {
    title: "Social Media Managing",
    description: "Random content to fill the blank space",
    icon: "/icons/social.svg",
  },
  {
    title: "Content Writing",
    description: "Random content to fill the blank space",
    icon: "/icons/writing.svg",
  },
]

export default function OurServices() {
  return (
    <section className="mx-4 md:mx-12 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">Our services</h2>
        <p className="text-[#646A69] mb-12">
          Transforming your online presence with innovative digital strategies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white w-[118px] md:w-[152px] aspect-square p-1 rounded-md">
                <div className="w-full h-full p-8 bg-primary rounded-full flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={30}
                    height={30}
                    className="w-full"
                  />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="text-[#646A69] text-sm max-w-xs">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
