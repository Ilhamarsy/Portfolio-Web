"use client";

import Photo from "@/components/Photo";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

const user = {
  name: "Ilham Arsy",
  description: "Student majoring in Informatics at Udayana University with an interest in software development, specifically in backend development.",
  specialist: [
  "Student",
  "Sotfware Developer",
  "Beginner Developer",
]}

export default function Home() {
  return (
    <section className="h-full md:h-[70vh] mb-24 md:mb-0 overflow-hidden">
      <div className="container px-4 xl:px-0 mx-auto h-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:pt-8 gap-4 md:gap-8 h-full">
          <div className="text-center md:text-left text-container">
            <span className="h2 text-gray-400 font-normal whitespace-nowrap">Hi! It's me</span>
            <h1 className="h1 whitespace-nowrap uppercase">{user.name}</h1>
            <span className="h3 text-gray-400 font-normal">
              I'm a{" "}
              <span className="text-accent font-semibold">
                <Typewriter
                  words={user.specialist}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </span>

            <p className="text-sm mt-6 sm:max-w-[400px] md:max-w-full">{user.description}</p>

            <div className="mt-4 flex justify-center md:justify-start">
              <Link href="https://docs.google.com/document/d/1qRJKDOrB1EoND-LFanMvrKX6W8dS44-z/edit?usp=sharing&ouid=111503191358255056030&rtpof=true&sd=true">
              <button className="rounded-2xl border-2 border-accent bg-white px-6 py-2 md:px-12 md:py-3 text-sm font-semibold uppercase text-accent transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#508D4E] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none flex items-center gap-2">
                Download CV
                <FiDownload className="text-xl sm:text-base" />
              </button>
              </Link>
            </div>
          </div>

          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
