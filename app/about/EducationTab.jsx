import EducationItem from '@/components/items/EducationItem';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TabsContent } from '@/components/ui/tabs';
import React from 'react';

const educations = [
  {
    date: 'September 2022 - Present',
    title: 'Udayana University',
    major: 'Computer Science',
    score: 'GPA 3.88 / 4',
  },
  {
    date: 'July 2019 – 2022',
    title: 'SMA N 1 Kuta Selatan',
    major: 'Science',
    score: '',
  },
];

function EducationTab() {
  return (
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
  );
}

export default EducationTab;
