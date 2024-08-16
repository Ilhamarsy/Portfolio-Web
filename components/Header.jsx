"use client"

import Link from "next/link";
import DesktopNav from "./nav/DesktopNav";

import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`py-4 xl:py-6 text-black bg-white ${scrolled ? "shadow " : ""}`}>
      <div className="container px-4 xl:px-0 mx-auto flex justify-between items-center">
        <Link href="https://www.instagram.com/ham.arsy?igsh=dHY4aXhpNXJxcmZ1" target="_blank">
          <h1 className="text-2xl md:text-4xl font-bold">
            ham<span className="text-accent">.arsy</span>
          </h1>
        </Link>

        <div className="flex items-center gap-12">
          <DesktopNav classname="hidden md:block"/>
          <Link href="https://github.com/Ilhamarsy" target="_blank">
            <FaGithub className="size-8" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
