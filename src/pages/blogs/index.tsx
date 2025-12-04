import Hero from "./components/hero";
import bg from "../../assets_/landing-bg.jpg";
import Blogs from "./components/blogs";

export default () => {
  return (
    <>
      <div
        className="bg-cover bg-center px-4 sm:px-6 md:px-8 lg:px-[7%] py-6 sm:py-8 md:py-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Hero />
        <main>
          <Blogs />
        </main>
      </div>
    </>
  );
};
