import {
  FaNode,
} from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandKotlin } from 'react-icons/tb';

import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const projects = [
  {
    title: 'Forum API',
    desc: 'The Forum API provides comprehensive functionalities for managing online discussion platforms. It allows users to create threads, post comments, like and reply to comments, and manage user authentication. This API is ideal for building community-driven applications where users can interact, share ideas, and engage in discussions.',
    img: '/assets/project_pic/forum.png',
    skills: [
      {
        title: 'NodeJS',
        icon: <FaNode />,
      },
      {
        title: 'Javascript',
        icon: <IoLogoJavascript />,
      },
    ],
    link: 'https://github.com/Ilhamarsy/Forum-API',
  },
  {
    title: 'Surya App API',
    desc: 'The Surya App API is designed to streamline work report management. It enables users to submit, track, and manage work reports efficiently. This API simplifies the process of organizing and reviewing work reports, making it an essential tool for organizations that prioritize productivity and accountability.',
    img: '/assets/project_pic/surya.jpeg',
    skills: [
      {
        title: 'Golang',
        icon: <FaGolang />,
      },
    ],
    link: 'https://github.com/Ilhamarsy/surya-app',
  },
  {
    title: 'OpenMusic API',
    desc: 'The OpenMusic API offers robust features for managing music-related content. It allows users to add albums, songs, and playlists, create collaborations with other users, and export data to client-side applications. This API is perfect for music platforms that need seamless management of audio content and collaborative features.',
    img: '/assets/project_pic/openmusic.jpg',
    skills: [
      {
        title: 'NodeJS',
        icon: <FaNode />,
      },
      {
        title: 'Javascript',
        icon: <IoLogoJavascript />,
      },
    ],
    link: 'https://github.com/Ilhamarsy/OpenMusic-API',
  },
  {
    title: 'SIC Letter Management API',
    desc: 'The SIC Letter Management API automates and simplifies the management of organizational letters. It handles the creation, sending, storing, and tracking of letters within an organization. This API is tailored for businesses and institutions that require efficient and reliable letter management to streamline communication processes.',
    img: '/assets/project_pic/sic.png',
    skills: [
      {
        title: 'NodeJS',
        icon: <FaNode />,
      },
      {
        title: 'Javascript',
        icon: <IoLogoJavascript />,
      },
    ],
    link: '',
  },
  {
    title: 'Story App',
    desc: 'The Story App is a platform for sharing stories, powered by a user-friendly API. Users can create and share their personal stories with a wider audience, while the API handles the backend processes such as story creation, storage, and retrieval. This application is perfect for storytelling enthusiasts and content creators who want to connect with their audience.',
    img: '/assets/project_pic/story.png',
    skills: [
      {
        title: 'Kotlin',
        icon: <TbBrandKotlin />,
      },
    ],
    link: 'https://github.com/Ilhamarsy/StoryApp',
  },
];

export const metadata = {
  title: 'Project',
  description: 'This is project page',
}

function Project() {
  return (
    <div className="h-fit flex items-center justify-center pt-4 md:pt-0 md:py-4 mb-20">
      <div className="container mx-auto">
        <div className="h2 font-bold text-center mt-10">My Project</div>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
          {projects.map(({ title, desc, img, skills, link }, index) => (
            <div
              key={index}
              className="sm:h-[41rem] h-[32rem] sm:w-[550px] w-[80vw] lg:min-h-[32.5rem] flex flex-col items-center justify-center"
            >
              <div className="h-full w-full border border-black/25 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                <div className="p-[10px]">
                  <div className="relative flex items-center justify-center sm:w-[530px] w-[76vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={img}
                        alt={title}
                        className="z-10 absolute bottom-0 object-fill w-full h-full border rounded-xl"
                      />
                    </div>
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-md text-base line-clamp-1">
                    {title}
                  </h1>

                  <p className="text-gray-500 text-sm lg:text-md lg:font-normal line-clamp-3">
                    {desc}
                  </p>

                  <div className="w-full flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {skills.map((data, index) => (
                        <div
                          key={index}
                          className="border border-black/30 rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <div className="p-2">{data.icon}</div>
                        </div>
                      ))}
                    </div>

                    {link != '' ? (
                      <Link href={link} target="_blank">

                        <FaGithub className="text-2xl hover:text-gray-600 transition-colors duration-300 size-8" />
                      </Link>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
