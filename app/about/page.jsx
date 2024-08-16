import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ExperienceTab from './ExperienceTab';
import EducationTab from './EducationTab';
import SkillsTab from './SkillsTab';
import ContactTab from './ContactTab';

export const metadata = {
  title: 'About',
  description: 'This is about page',
}

function About() {
  return (
    <div className="h-fit flex items-center justify-center pt-0 md:py-4 mt-20">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col md:flex-row gap-[40px]"
        >
          <TabsList className="flex flex-col w-full md:max-w-[280px] sm:max-w-[380px] xl:max-w-[380px] mx-auto xl:mx-0 gap-4 md:gap-6 ">
            <h1 className="h2 w-full text-center">About Me</h1>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <div className="w-full">
            {/* Experience Content */}
            <ExperienceTab />

            {/* Education Content */}
            <EducationTab />

            {/* Skills Content */}
            <SkillsTab />

            {/* Contact Content */}
            <ContactTab />
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default About;
