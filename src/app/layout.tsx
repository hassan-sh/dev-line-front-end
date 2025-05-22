import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export const metadata: Metadata = {
  title: "Brand Name - Creative Marketing Solutions",
  description: "Transform your business with our creative marketing, web, and analytics services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='bg-background text-white antialiased'>
        {/* Lines Background Pattern fixed for the entire page */}
        {/* <Image
          src="/background-lines.svg" // Make sure to replace with your actual path
          alt="Purple Lines"
          width={800}
          height={800}
          className="fixed -z-10 w-dvw -left-4 bottom-0 object-contain"
        /> */}
        <Navbar />
        <main className="max-w-[1440px] mx-auto flex flex-col gap-20 mb-20">
          {children}
        </main>
        <Testimonials />
        <Footer />
      </body>
    </html>
  );
}
