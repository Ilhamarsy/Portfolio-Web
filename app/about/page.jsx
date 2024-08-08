"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion } from "framer-motion";
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
    title:
      "Udayana University",
    major: "Computer Science",
    score: "GPA 3.88 / 4"
  },
  {
    date: "July 2019 – 2022",
    title:
      "SMA N 1 Kuta Selatan",
    major: "Science",
    score: ""
  },
]

function About() {
  return (
    <div className="h-full flex items-center justify-center py-12 md:py-4">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col md:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full md:max-w-[280px] sm:max-w-[380px] xl:max-w-[380px] mx-auto xl:mx-0 gap-6 self-center ">
            <h1 className="h2 w-full text-center">About Me</h1>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <div className=" w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="h3 font-bold">My Experience</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] px-4 lg:pr-4 lg:px-0 pb-4">
                    {experiences.map((data, index) => <ExperienceItem key={index} data={data}/>)}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="h3 font-bold">My Education</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] px-4 lg:pr-4 lg:px-0 pb-4">
                    {educations.map((data, index) => <EducationItem key={index} data={data}/>)}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="contact" className="w-full">
              contact
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

export default About;
