import ExperienceItem from '@/components/items/ExperienceItem';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TabsContent } from '@/components/ui/tabs';

import {
  FaCss3,
  FaHtml5,
  FaJava,
  FaNode,
  FaPhp,
  FaReact,
} from 'react-icons/fa';

import { IoLogoJavascript } from 'react-icons/io5';
import { FaGolang } from 'react-icons/fa6';
import { TbBrandKotlin } from 'react-icons/tb';

const experiences = [
  {
    date: 'May - Oct 2024',
    title:
      'Fullstack with AI Integrated Bootcamp - Skill Academy Pro X Ruangguru',
    position: 'Fullstack developer',
    skill: [
      {
        title: 'HTML',
        icon: <FaHtml5 />,
      },
      {
        title: 'CSS',
        icon: <FaCss3 />,
      },
      {
        title: 'Javascript',
        icon: <IoLogoJavascript />,
      },
      {
        title: 'Golang',
        icon: <FaGolang />,
      },
      {
        title: 'React',
        icon: <FaReact />,
      },
    ],
  },
  {
    date: 'August - October 2023',
    title: 'CV Avatar Solution Internship',
    position: 'Backend Developer',
    skill: [
      {
        title: 'PHP',
        icon: <FaPhp />,
      },
    ],
  },
  {
    date: 'June - Oct 2023',
    title: 'Udayana University 61st Anniversary',
    position: 'Documentation Division',
    skill: [],
  },
  {
    date: 'March - Oct 2023',
    title: 'SUPREMASI XVI - Udayana University',
    position: 'Volunteer and Contribution Division',
    skill: [],
  },
  {
    date: 'December 2022 - july 2023',
    title: 'AWS Back-End Academy',
    position: 'Backend Developer',
    skill: [
      {
        title: 'Javascript',
        icon: <IoLogoJavascript />,
      },
      {
        title: 'NodeJS',
        icon: <FaNode />,
      },
    ],
  },
  {
    date: 'August 2022 - October 2023',
    title: 'IDCAMP - Indosat',
    position: 'Mobile developer',
    skill: [
      {
        title: 'Java',
        icon: <FaJava />,
      },
      {
        title: 'Kotlin',
        icon: <TbBrandKotlin />,
      },
    ],
  },
];
function ExperienceTab() {
  return (
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
  );
}

export default ExperienceTab;
