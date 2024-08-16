import SkillsItem from '@/components/items/SkillsItem';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TabsContent } from '@/components/ui/tabs';
import React from 'react';

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

const skills = [
  {
    title: 'Node JS',
    icon: ({ className, props }) => <FaNode className={className} {...props} />,
  },
  {
    title: 'Javascript',
    icon: ({ className, props }) => (
      <IoLogoJavascript className={className} {...props} />
    ),
  },
  {
    title: 'HTML',
    icon: ({ className, props }) => (
      <FaHtml5 className={className} {...props} />
    ),
  },
  {
    title: 'React',
    icon: ({ className, props }) => (
      <FaReact className={className} {...props} />
    ),
  },
  {
    title: 'CSS',
    icon: ({ className, props }) => <FaCss3 className={className} {...props} />,
  },
  {
    title: 'PHP',
    icon: ({ className, props }) => <FaPhp className={className} {...props} />,
  },
  {
    title: 'Golang',
    icon: ({ className, props }) => (
      <FaGolang className={className} {...props} />
    ),
  },
  {
    title: 'Kotlin',
    icon: ({ className, props }) => (
      <TbBrandKotlin className={className} {...props} />
    ),
  },
  {
    title: 'Java',
    icon: ({ className, props }) => <FaJava className={className} {...props} />,
  },
];

function SkillsTab() {
  return (
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
  );
}

export default SkillsTab;
