import Link from "next/link";
import DesktopNav from "./nav/DesktopNav";
import MobileNav from "./nav/MobileNav";

import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header className="py-6 xl:py-8 text-black">
      <div className="container px-4 xl:px-0 mx-auto flex justify-between items-center">
        <Link href="https://www.instagram.com/ham.arsy?igsh=dHY4aXhpNXJxcmZ1">
          <h1 className="text-4xl font-semibold">
            ham<span className="text-accent">.arsy</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          <DesktopNav />
          <Link href="https://github.com/Ilhamarsy">
            <FaGithub className="size-8" />
          </Link>
        </div>

        {/* <div className="md:hidden">
          <MobileNav />
        </div> */}
        <Link href="https://github.com/Ilhamarsy" className="md:hidden">
          <FaGithub className="size-8" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
