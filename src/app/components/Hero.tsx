'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
    <section className='flex flex-col gap-4 mx-2.5 md:ml-[88px] mt-32'>
        <div className='flex'>
            <div className='max-w-[632px] flex-2 md:mr-[85px] xl:mr-[185px] text-center md:text-left flex flex-col gap-10'>
                <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
                    Transform your business with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E879F9] to-[#C75ED0]/36">Creative Marketing Solutions!</span>
                </h1>
                <p className="text-gray-300 max-w-lg text-lg">
                    Welcome to Focus Marketing Solutions! We&apos;re a creative team dedicated to driving your business forward with innovative marketing strategies. From digital marketing to social media management, we&apos;re here to help you succeed. Let&apos;s build something extraordinary together
                </p>
                <div className="flex flex-col sm:flex-row gap-4 font-bold">
                    <Link
                        href="/get-started"
                        className="inline-block px-6 py-3 bg-primary rounded-full text-center transition"
                    >
                        Join us
                    </Link>
                    <Link
                        href="/learn-more"
                        className="inline-block px-6 py-3 border border-white hover:bg-primary hover:text-gray-900 rounded-full text-center transition"
                    >
                        Contact us
                    </Link>
                </div>
            </div>
            <div className='hidden md:block h-auto flex-1 justify-items-end'>
                <Image
                    src="/images/hero01.webp"
                    alt="Modern skyscrapers"
                    width={535}
                    height={445}
                    className="h-full object-cover rounded-2xl shadow-lg" />
            </div>
        </div>
        <div className='hidden md:flex'>
            {/* Bottom left */}
            <div className='h-auto max-w-[632px] flex-2 md:mr-[85px] xl:mr-[185px] flex items-end'>
                <div className='relative'>
                    <Image
                        src="/images/hero02.webp"
                        alt="Creative workspace"
                        width={300}
                        height={300}
                        className=" w-[350px] object-cover rounded-lg"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black  "></div>
                </div>
            </div>
            {/* Bottom right */}
            <div className='h-auto'>
                <div className='relative'>
                    <Image
                        src="/images/hero03.webp"
                        alt="Team brainstorming"
                        width={250}
                        height={250}
                        className="h-full object-cover rounded-lg shadow-lg"
                        />
                    <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                </div>
            </div>
            {/* <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black to-transparent pointer-events-none"></div> */}
        </div>
    </section>
    </>
  )
}
