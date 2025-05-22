'use client'

import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="relative overflow-hidden ">
            {/* Lines Background Pattern only for Services section, comment this image if need to make it fixed fpr the whole page*/}
            <Image
                src="/background-lines.svg" // Make sure to replace with your actual path
                alt="Purple Lines"
                width={800}
                height={800}
                className=" absolute -z-10 -left-24 bottom-0 object-contain"
            />
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-white text-xl sm:text-2xl font-semibold mb-6">About Us</h2>
                <p className="text-white text-base sm:text-lg leading-relaxed mb-8">
                    Welcome to <span className="text-primary font-semibold">Focus Marketing Solutions</span>! We&apos;re a creative team dedicated to driving your business
                    forward with innovative marketing strategies. From digital marketing to social media management,
                    we’re here to help you succeed.{" "}
                    <span className="text-primary font-semibold">Let&apos;s build something extraordinary together.</span>
                </p>

                <Link
                href="/about"
                className="inline-block border border-primary text-primary hover:bg-primary hover:text-white transition-colors w-full md:w-fit px-8 py-3 rounded-full text-base font-medium"
                >
                    Read more
                </Link>
            </div>
        </section>
    )
}