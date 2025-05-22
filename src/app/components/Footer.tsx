'use client'

import Link from 'next/link'
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FormEvent, useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        // API call here
    };

  return (
    <footer className="bg-primary pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 pb-12">
            {/* register & description */}
            <div className=' text-center md:text-left mx-3 flex flex-col gap-4 lg:w-1/2'>
                <h3 className='font-semibold text-2xl'>What are you waiting for?</h3>
                <p className="text-[#F8F8F8] text-lg leading-relaxed">
                    Register now to get the best delivery experience for you and your clients in Iraq!
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mt-3">
                    <div className="">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full md:w-80 bg-foreground rounded-[200px] text-gray-800 font-medium text-lg px-4 py-3 focus:ring-2 focus:ring-primary"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSubmitting || isSuccess}
                        />
                        {error && <p className="text-yellow-200 text-sm mt-1">{error}</p>}
                    </div>
                    <button
                    type="submit"
                    className={`bg-background text-white font-medium text-lg py-3 px-6 rounded-[200px] transition-colors cursor-pointer ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    disabled={isSubmitting || isSuccess}
                    >
                    {isSubmitting ? 'Subscribing...' : isSuccess ? 'You have successfully subscribed' : 'register now'}
                    </button>
                </form>
            </div>

            {/* nav links */}
            <div className='mx-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
                {/* logo & nav links */}
                <div className="md:col-span-2 flex flex-col md:flex-row md:items-start md:space-x-12 gap-6">
                    <div>
                        <Link href="/" className="flex items-center">
                            <Image src="/logo.png" alt="YourBrand" width={101} height={30} />
                        </Link>
                    </div>

                    <div className='flex justify-between gap-4 text-left'>
                        <div>
                            <h4 className="font-semibold mb-3 text-white">The company</h4>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li>
                                <Link href="/" className="hover:text-white transition">
                                    Who are we
                                </Link>
                                </li>
                                <li>
                                <Link href="/about" className="hover:text-white transition">
                                    Services
                                </Link>
                                </li>
                                <li>
                                <Link href="/services" className="hover:text-white transition">
                                    Jobs 12
                                </Link>
                                </li>
                                <li>
                                <Link href="/pricing" className="hover:text-white transition">
                                    Branches
                                </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3 text-white">Help Center</h4>
                            <ul className="space-y-2 text-sm text-white/80">
                                <li>
                                <Link href="/" className="hover:text-white transition">
                                    Common questions
                                </Link>
                                </li>
                                <li>
                                <Link href="/about" className="hover:text-white transition">
                                    Contact us
                                </Link>
                                </li>
                                <li>
                                <Link href="/services" className="hover:text-white transition">
                                    Register as merchant
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>                

                {/* social */}
                <div className="flex flex-col space-y-4 items-start md:items-end">
                    <Link href="https://facebook.com/#" aria-label="Facebook" >
                        <div className="text-white font-semibold bg-white/25 flex gap-2.5 rounded-[58px] p-1 w-[150px]">
                            <span className='bg-white text-primary rounded-full w-7 h-7 min-w-7 min-h-7 flex items-center justify-center' >
                            <FaFacebookF size={18} />
                            </span>
                            <span>Facebook</span>
                        </div>
                    </Link>
                    <Link href="https://instagram.com/#" aria-label="Facebook" >
                        <div className="text-white font-semibold bg-white/25 flex gap-2.5 rounded-[58px] p-1 w-[150px]">
                            <span className='bg-white text-primary rounded-full w-7 h-7 min-w-7 min-h-7 flex items-center justify-center' >
                            <FaInstagram size={18} />
                            </span>
                            <span>Instagram</span>
                        </div>
                    </Link>
                    <Link href="https://linkedin.com" aria-label="Facebook" >
                        <div className="text-white font-semibold bg-white/25 flex gap-2.5 rounded-[58px] p-1 w-[150px]">
                            <span className='bg-white text-primary rounded-full w-7 h-7 min-w-7 min-h-7 flex items-center justify-center' >
                            <FaLinkedinIn size={18} />
                            </span>
                            <span>LinkedIn</span>
                        </div>
                    </Link>
                </div>
                
            </div>

            {/* copyright */}
            <div className="pt-4 pb-6 text-center w-3/5 mx-auto px-4 text-xs text-white/80">
                <p>© {new Date().getFullYear()} Leader Express Delivery Company. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}
