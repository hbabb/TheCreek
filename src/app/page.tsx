import { Metadata } from "next";
import Image from "next/image";
import McbcLogo from "../../public/McbcTransparentLogoOnly.svg"
import McbcLogoWhite from "../../public/McbcTransparentLogoOnly-white.svg"
import { Header } from "@/components/layout/Header"
import { PastorMessage } from "@/components/layout/PastorMessage";

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    
    <div className="animate-appear flex min-h-screen flex-col items-center justify-between dark:bg-creek-blue mx-auto w-full">
      <Header />

      <main className="flex flex-col  w-full flex-1 items-center justify-center lg:flex-row lg:justify-around">

        {/* Logo Section */}
        <div className="flex flex-col items-center w-full lg:w-1/3 mx-6 px-6 ">
          <div className="relative w-11/12 -mb-12 text-creek-blue dark:text-creek-white">
            <Image
              src={McbcLogo}
              alt="Motlow Creek Baptist Church Logo"
              width={800}
              height={800}
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src={McbcLogoWhite}
              alt="Motlow Creek Baptist Church Logo"
              width={800}
              height={800}
              className="hidden dark:block object-contain"
              priority
            />
          </div>
          <div className="flex flex-col items-center text-creek-blue dark:text-creek-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider font-allura">
              Motlow Creek Baptist Church
            </h1>
            <h3 className="text-base md:text-lg lg:text-xl font-roboto-400 uppercase tracking-[0.2em] [word-spacing:0.3em]">
              Where Faith Grows and Hearts Connect
            </h3>
          </div>
        </div>

        {/* Message from the Pastor */}
        <PastorMessage />

      </main>

      {/* <Footer /> */}
    </div>
  );
}
