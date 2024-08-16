function EducationItem({ data }) {
  return (
    <li
      className="min-h-[170px] border-[1px] border-black py-2 px-4 rounded-xl flex flex-col items-start gap-1 shadow-md hover:shadow-md hover:shadow-black/60 shadow-black/30 justify-between transition-all"
    >
      <div className="w-full text-center md:text-start">
        <span className="text-sm text-accent">{data.date}</span>
        <h3 className="leading-[1.1] text-lg font-semibold line-clamp-2">
          {data.title}
        </h3>
        <span className="text-base text-[#787878]">{data.major}</span>
      </div>
      <div className="flex flex-row gap-3 flex-wrap mt-6 w-full justify-center md:justify-start items-center">
        {data.score.length > 0 ? (
          <>
            <span className="w-[6px] h-[6px] rounded-full bg-accent" />
            <span className="text-accent text-base ">{data.score}</span>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </li>
  );
}

export default EducationItem;
