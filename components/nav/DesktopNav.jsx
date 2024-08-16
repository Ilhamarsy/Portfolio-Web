"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "project",
    path: "/project",
  },
];

function DesktopNav({classname}) {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathName ? "text-accent border-b-2 border-accent" : ""
          } capitalize font-medium hover:text-accent transition-all ${classname}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default DesktopNav;
