'use client'

import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from 'react-icons/hi'
import { useEffect, useState } from "react"

export default function Footer() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // add a little shadow when you scroll down
    useEffect(() => {
        function onScroll() {
        setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    
    return (
        <nav className={`fixed w-full h-16 z-50 bg-[#161616] text-white backdrop-blur transition-all duration-300 ease-in-out ` + (scrolled ? 'mt-0 shadow-md shadow-gray-600' : 'mt-6')}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* mobile hamburger */}
                <button
                className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle menu"
                >
                {menuOpen ? (
                    <HiX className="h-6 w-6 text-white" />
                ) : (
                    <HiMenu className="h-6 w-6 text-white" />
                )}
                </button>
                
                {/* logo */}
                <div>
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" alt="logo" width={135} height={40} />
                </Link>
                </div>

                {/* desktop links */}
                <div className="hidden md:flex space-x-8 items-center">
                    <Link href='/' className="hover:text-primary transition" >Home</Link>
                    <Link href='#about-us' className="hover:text-primary transition" >About us</Link>
                    <Link href='#services' className="hover:text-primary transition" >Services</Link>
                    <Link href='#branches' className="hover:text-primary transition" >Branches</Link>
                    <Link href='#jobs' className="hover:text-primary transition" >Jobs <span className="bg-primary text-white text-sm font-bold px-2 py-1 rounded-[99px]">12</span></Link>
                {/* {['Home', 'About us', 'Services', 'Branches', 'Jobs'].map((item) => (
                    <Link
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="hover:text-primary transition"
                    >
                    {item}
                    </Link>
                ))} */}
                </div>

                {/* contact links */}
                <div className="hidden md:flex gap-2.5">
                    <Link
                        href="/contact"
                        className="px-5 py-3 border-2 border-white text-white rounded-4xl hover:bg-primary transition"
                    >
                        Contact us
                    </Link>
                    <Link
                        href="/contact"
                        className="px-5 py-3 bg-[#7D4283] text-white rounded-4xl hover:bg-[#7D4283]/80 transition"
                    >
                        Join us
                    </Link>
                </div>

                
            </div>

            {/* mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur shadow-inner transition">
                <div className="px-4 pt-2 pb-4 space-y-2">
                    {['Home', 'About us', 'Services', 'Branches', 'Jobs'].map((item) => (
                    <Link
                        key={item}
                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                        className="block text-gray-700 py-2"
                        onClick={() => setMenuOpen(false)}
                    >
                        {item}
                    </Link>
                    ))}
                    <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg transition"
                    onClick={() => setMenuOpen(false)}
                    >
                    Get Started
                    </Link>
                </div>
                </div>
            )}
        </nav>
    )
}