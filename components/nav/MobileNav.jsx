"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Project",
    path: "/project",
  },
];

export const MobileNav = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const pathname = usePathname(); 
  const refs = useRef([]); 

  useEffect(() => {
    const activeLinkIndex = links.findIndex((link) => link.path === pathname);
    if (activeLinkIndex !== -1 && refs.current[activeLinkIndex]) {
      const activeLink = refs.current[activeLinkIndex];
      const { width } = activeLink.getBoundingClientRect();
      setPosition({ left: activeLink.offsetLeft, width, opacity: 1 });
    }
  }, [pathname]);

  return (
    <ul
      onMouseLeave={() => {
        const activeLinkIndex = links.findIndex((link) => link.path === pathname);
        if (activeLinkIndex !== -1 && refs.current[activeLinkIndex]) {
          const activeLink = refs.current[activeLinkIndex];
          const { width } = activeLink.getBoundingClientRect();
          setPosition({ left: activeLink.offsetLeft, width, opacity: 1 });
        } else {
          setPosition((prev) => ({
            ...prev,
            opacity: 0,
          }));
        }
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1 drop-shadow-md"
    >
      {links.map((link, index) => (
        <Tab
          setPosition={setPosition}
          key={index}
          path={link.path}
          ref={(el) => (refs.current[index] = el)}
          isActive={pathname === link.path}
        >
          {link.name}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = React.forwardRef(({ children, setPosition, path, isActive }, ref) => {
  return (
    <Link
      ref={ref}
      href={path}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase ${
        isActive ? "text-white" : "text-white"
      } mix-blend-difference md:px-5 md:py-3 md:text-base`}
    >
      {children}
    </Link>
  );
});

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{ duration: 0.3 }} 
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

Tab.displayName = "Tab"; 
