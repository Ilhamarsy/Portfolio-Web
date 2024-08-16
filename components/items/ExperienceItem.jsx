function ExperienceItem({ data }) {
  return (
    <li
      className="min-h-[170px] border-[1px] border-black py-2 px-4 rounded-xl flex flex-col items-start gap-1 shadow-md hover:shadow-md hover:shadow-black/60 shadow-black/30 justify-between transition-all"
    >
      <div className="w-full">
        <span className="text-sm text-accent">{data.date}</span>
        <h3 className="leading-[1.1] text-lg font-semibold line-clamp-2">
          {data.title}
        </h3>
        <span className="text-base text-[#787878]">{data.position}</span>
      </div>
      <div className="flex flex-row gap-2 flex-wrap mt-6 w-full justify-center md:justify-start">
        {data.skill.map((skill, index) => (
          <div key={index} className="flex flex-row gap-1 items-center border-[1px] border-black rounded-md px-2 py-1">
            <div>{skill.icon}</div>
            <span className="text-xs">{skill.title}</span>
          </div>
        ))}
      </div>
    </li>
  );
}

export default ExperienceItem;
