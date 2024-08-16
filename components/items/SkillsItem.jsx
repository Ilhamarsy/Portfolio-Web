function SkillsItem({ data }) {
  return (
    <li className="border-[1px] border-black py-2 px-4 rounded-xl group relative flex flex-col items-start gap-1 shadow-md hover:shadow-md hover:shadow-black/60 shadow-black/30 justify-between transition-all">
      <div className="p-[10px]">
        <data.icon className="size-14" />
      </div>
      <span className="absolute top-0 scale-0 transition-all rounded bg-accent p-2 text-xs text-white font-semibold group-hover:scale-100">
        {data.title}
      </span>
    </li>
  );
}

export default SkillsItem;
