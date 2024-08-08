import React from "react";

function ExperienceItem({ key, data }) {
  return (
    <li
      key={key}
      className="min-h-[170px] border-[1px] border-black py-2 px-4 rounded-xl flex flex-col items-start gap-1 shadow-md hover:shadow-lg justify-between"
    >
      <div className="w-full">
        <span className="text-sm text-accent">{data.date}</span>
        <h3 className="leading-[1.1] text-lg font-semibold line-clamp-2">
          {data.title}
        </h3>
        <span className="text-base text-[#787878]">{data.position}</span>
      </div>
      <div className="flex flex-row gap-2 flex-wrap mt-6 w-full justify-center md:justify-start">
        {data.skill.map((skill) => (
          <div className="flex flex-row gap-1 items-center border-[1px] border-black rounded-md px-2 py-1">
            <div>{skill.icon}</div>
            <span className="text-xs">{skill.title}</span>
          </div>
        ))}
      </div>
    </li>
  );
}

export default ExperienceItem;
