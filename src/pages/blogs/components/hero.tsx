export default () => {
  return (
    <div className="w-full md:w-1/2 lg:w-[30%] flex flex-col space-y-3 sm:space-y-4 mt-6 sm:mt-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-[10%]">Blog Posts</h1>
      <p className="text-sm sm:text-base text-white/90">
        New updates, latest in legal tool features, legal insights, and
        professional guides.
      </p>
      <div className="flex flex-col gap-4 md:gap- sm:flex-row items-stretch sm:items-center rounded-lg overflow-hidden border border-[#545454]">
        <input type="email" className="p-3 sm:p-4 flex-1 text-sm sm:text-base" placeholder="Enter your email"/>
        <button className="bg-white rounded-none sm:rounded-lg sm:mx-1 sm:my-1 px-4 sm:px-6 py-3 sm:py-3 text-black lato-thin text-sm sm:text-base hover:bg-gray-100 transition-colors">Subscribe</button>
      </div>
    </div>
  );
};
