"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";

import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";

import { twMerge } from "tailwind-merge";

import {
  FaCss3,
  FaHtml5,
  FaJava,
  FaNode,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import { TbBrandKotlin } from "react-icons/tb";
import ExperienceItem from "@/components/items/ExperienceItem";
import EducationItem from "@/components/items/EducationItem";
import SkillsItem from "@/components/items/SkillsItem";
import Link from "next/link";

const experiences = [
  {
    date: "May - Oct 2024",
    title:
      "Fullstack with AI Integrated Bootcamp - Skill Academy Pro X Ruangguru",
    position: "Fullstack developer",
    skill: [
      {
        title: "HTML",
        icon: <FaHtml5 />,
      },
      {
        title: "CSS",
        icon: <FaCss3 />,
      },
      {
        title: "Javascript",
        icon: <IoLogoJavascript />,
      },
      {
        title: "Golang",
        icon: <FaGolang />,
      },
      {
        title: "React",
        icon: <FaReact />,
      },
    ],
  },
  {
    date: "August - October 2023",
    title: "CV Avatar Solution Internship",
    position: "Backend Developer",
    skill: [
      {
        title: "PHP",
        icon: <FaPhp />,
      },
    ],
  },
  {
    date: "June - Oct 2023",
    title: "Udayana University 61st Anniversary",
    position: "Documentation Division",
    skill: [],
  },
  {
    date: "March - Oct 2023",
    title: "SUPREMASI XVI - Udayana University",
    position: "Volunteer and Contribution Division",
    skill: [],
  },
  {
    date: "December 2022 - july 2023",
    title: "AWS Back-End Academy",
    position: "Backend Developer",
    skill: [
      {
        title: "Javascript",
        icon: <IoLogoJavascript />,
      },
      {
        title: "NodeJS",
        icon: <FaNode />,
      },
    ],
  },
  {
    date: "August 2022 - October 2023",
    title: "IDCAMP - Indosat",
    position: "Mobile developer",
    skill: [
      {
        title: "Java",
        icon: <FaJava />,
      },
      {
        title: "Kotlin",
        icon: <TbBrandKotlin />,
      },
    ],
  },
];

const educations = [
  {
    date: "September 2022 - Present",
    title: "Udayana University",
    major: "Computer Science",
    score: "GPA 3.88 / 4",
  },
  {
    date: "July 2019 – 2022",
    title: "SMA N 1 Kuta Selatan",
    major: "Science",
    score: "",
  },
];

const skills = [
  {
    title: "Javascript",
    icon: ({ className, props }) => (
      <IoLogoJavascript className={className} {...props} />
    ),
  },
  {
    title: "HTML",
    icon: ({ className, props }) => (
      <FaHtml5 className={className} {...props} />
    ),
  },
  {
    title: "CSS",
    icon: ({ className, props }) => <FaCss3 className={className} {...props} />,
  },
  {
    title: "PHP",
    icon: ({ className, props }) => <FaPhp className={className} {...props} />,
  },
  {
    title: "Golang",
    icon: ({ className, props }) => (
      <FaGolang className={className} {...props} />
    ),
  },
  {
    title: "Kotlin",
    icon: ({ className, props }) => (
      <TbBrandKotlin className={className} {...props} />
    ),
  },
  {
    title: "Java",
    icon: ({ className, props }) => <FaJava className={className} {...props} />,
  },
];

function About() {
  return (
    <div className="h-fit flex items-center justify-center pt-4 md:pt-0 md:py-4">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col md:flex-row gap-[40px]"
        >
          <TabsList className="flex flex-col w-full md:max-w-[280px] sm:max-w-[380px] xl:max-w-[380px] mx-auto xl:mx-0 gap-4 md:gap-6 self-center ">
            <h1 className="h2 w-full text-center">About Me</h1>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <div className="w-full">
            {/* Experience Content */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="h3 font-bold px-0 lg:px-4">My Experience</h3>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] px-4 pb-10 md:pb-4">
                    {experiences.map((data, index) => (
                      <ExperienceItem key={index} data={data} />
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Content */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="h3 font-bold px-0 lg:px-4">My Education</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] px-4 pb-10 md:pb-4">
                    {educations.map((data, index) => (
                      <EducationItem key={index} data={data} />
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Content */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="h3 font-bold px-0 lg:px-4">My Skills</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="flex flex-wrap justify-evenly md:justify-start gap-[15px] px-4 pb-10 md:pb-4">
                    {skills.map((data, index) => (
                      <SkillsItem key={index} data={data} />
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Contact Content */}
            <TabsContent value="contact" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="h3 font-bold px-0 lg:px-4">Contact Me</h3>
                <div className="grid gap-4 grid-cols-12">
                  <Block
                    whileHover={{
                      rotate: "2.5deg",
                      scale: 1.1,
                    }}
                    className="col-span-6 bg-red-500 md:col-span-3"
                  >
                    <a
                      href="#"
                      className="grid h-full place-content-center text-3xl text-white"
                    >
                      <SiYoutube />
                    </a>
                  </Block>
                  <Block
                    whileHover={{
                      rotate: "-2.5deg",
                      scale: 1.1,
                    }}
                    className="col-span-6 bg-green-600 md:col-span-3"
                  >
                    <a
                      href="#"
                      className="grid h-full place-content-center text-3xl text-white"
                    >
                      <SiGithub />
                    </a>
                  </Block>
                  <Block
                    whileHover={{
                      rotate: "-2.5deg",
                      scale: 1.1,
                    }}
                    className="col-span-6 bg-zinc-50 md:col-span-3"
                  >
                    <a
                      href="#"
                      className="grid h-full place-content-center text-3xl text-black"
                    >
                      <SiTiktok />
                    </a>
                  </Block>
                  <Block
                    onClick={() => {
                      console.log("a");
                    }}
                    whileHover={{
                      rotate: "2.5deg",
                      scale: 1.1,
                    }}
                    className="col-span-6 bg-blue-500 md:col-span-3"
                  >
                    <div className="grid h-full place-content-center text-3xl text-white">
                      <SiTwitter />
                    </div>
                  </Block>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{
    //     opacity: 1,
    //     transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    //   }}
    //   className="h-full flex items-center justify-center py-12 md:py-4"
    // >
    // </motion.div>
  );
}

const Block = ({ className, ...rest }) => {
  return (
    <motion.button
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

export default About;
