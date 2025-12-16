import { Link } from "react-router-dom";
import bg from "../../../assets_/hero-image.png";

export default () => {
  return (
    <section
      className={`flex h-screen  px-[5%] lg:px-30 py-[5%] mt-0 pt-[10%]  items-center  bg-blend-darken bg-cover`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-4 mt-0 lg:w-[70%]">
        <h2 className="text-white text-center md:text-start text-2xl md:text-[52px] inter-font  font-bold  mt-4 md:mt-0">
          Connect with Legal Experts
        </h2>
        <h2 className="text-white text-center md:text-start text-xl md:text-[20px] inter-font  font-bold  mt-4 md:mt-0">
          Collaborate and manage case files electronically
        </h2>
        <p className="text-white text-center md:text-start font-normal text-[14px] lg:text-lg  lator-regular">
          An integrated Electronic law Office Management designed to deliver a
          wide range of legal services and consultations, enable real-time
          collaborations through an enhanced process from a secured digital
          workspace.
        </p>
        <Link
          className="bg-gradient-to-b from-[#CAA500] to-[#825900] text-white w-full md:w-[30%] text-[16px] rounded-md  md:rounded-full text-center p-4"
          to="#"
        >
          <span className="text-white lato-regular">Get a lawyer</span>
        </Link>
      </div>
    </section>
  );
};
