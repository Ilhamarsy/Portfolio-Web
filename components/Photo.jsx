function Photo() {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-row gap-2">
        <div className="self-end relative photo-1 hidden md:block ">
          <div className="h-full w-full bg-gradient-to-tr from-white from-10% via-white/80 via-40% to-transparen absolute" />
          <div className="bg-[url('/assets/home_pic/pic-1.jpg')] bg-cover h-full w-full rounded-md"></div>
        </div>

        <div className="self-center relative photo-2 hidden md:block">
          <div className="h-full w-full bg-white/30 absolute" />
          <div className="bg-[url('/assets/home_pic/pic-2.jpg')] bg-cover h-full w-full rounded-md"></div>
        </div>
      </div>

      <div className="relative h-[340px] w-[300px] md:hidden">
        {/* Corner */}
        <div className="h-full w-full bg-gradient-to-br from-white from-10% to-transparen to-45% absolute" />
        <div className="h-full w-full bg-gradient-to-bl from-white from-10% to-transparen to-45% absolute" />
        <div className="h-full w-full bg-gradient-to-tr from-white from-10% to-transparen to-45% absolute" />
        <div className="h-full w-full bg-gradient-to-tl from-white from-10% to-transparen to-45% absolute" />

        {/* Side */}
        <div className="h-full w-full bg-gradient-to-t from-white to-transparen to-45% absolute" />
        <div className="h-full w-full bg-gradient-to-b from-white to-transparen to-45% absolute" />
        <div className="h-full w-full bg-gradient-to-l from-white to-transparen to-45% absolute" />
        <div className="h-full w-full bg-gradient-to-r from-white to-transparen to-45% absolute" />
        <div className="bg-[url('/assets/home_pic/pic-2.jpg')] bg-cover h-full w-full rounded-md"></div>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <div className="relative photo-3 hidden md:block">
          <div className="h-full w-full bg-white/30 bg-gradient-to-b from-white from-10% via-white/80 via-40% to-transparen absolute" />
          <div className="bg-[url('/assets/home_pic/pic-3.jpg')] bg-cover h-full w-full rounded-md"></div>
        </div>

        <div className="relative photo-4 hidden md:block">
          <div className="h-full w-full bg-gradient-to-tl from-white from-10% via-white/80 via-40% to-transparen absolute" />
          <div className="bg-[url('/assets/home_pic/pic-4.jpg')] bg-cover bg-center h-full w-full rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default Photo;
