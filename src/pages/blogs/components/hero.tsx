export default () => {
  return (
    <div className="w-[30%] flex flex-col space-y-2 mt-8">
      <h1>Blog Posts</h1>
      <p >
        New updates, latest in legal tool features, legal insights, and
        professional guides.
      </p>
      <div className="flex items-center rounded-4xl overflow-hidden border border-[#545454] py-0">
        <input type="email"className="p-4 flex-1" placeholder="Enter your email"/>
        <button className="bg-white rounded-4xl w-1/3 p-4 text-black lato-thin h-full">Subscribe</button>
      </div>
    </div>
  );
};
