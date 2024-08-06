"use client";

import { MobileNav } from "@/components/nav/MobileNav";
import Photo from "@/components/Photo";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container px-4 xl:px-0 mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 xl:pb-24">
          <div className="text-center md:text-left order-2 md:order-1">
            <span className="h2 text-gray-400 font-normal">Hi! It's me</span>
            <h1 className="h1">ILHAM ARSY</h1>
            <span className="h3 text-gray-400 font-normal">
              I'm a{" "}
              <span className="text-accent font-semibold">
                <Typewriter
                  words={[
                    "Student",
                    "Sotfware Developer",
                    "Beginner Developer",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </span>

            <div className="mt-4 flex justify-center md:justify-start">
              <button className="rounded-2xl border-2 border-accent bg-white px-6 py-2 md:px-12 md:py-3 text-sm font-semibold uppercase text-accent transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#508D4E] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none flex items-center gap-2">
                Download CV
                <FiDownload className="text-xl sm:text-base" />
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
