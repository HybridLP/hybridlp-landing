import Hero from "./components/hero";
import bg from "../../assets_/landing-bg.jpg";
import Blogs from "./components/blogs";

export default () => {
  return (
    <>
      <div
        className="bg-cover bg-center px-[7%] py-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Hero />
        <main>
          <Blogs/>
            
        </main>
      </div>
    </>
  );
};
