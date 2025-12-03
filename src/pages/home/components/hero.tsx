import { Link } from "react-router-dom";
import bg from "../../../assets_/bg.jpg";

export default () => {
  return (
    <section
      className={`flex h-[40%]  px-[5%] lg:px-30 py-[5%] mt-0 pt-[10%]  items-center  bg-blend-darken bg-cover`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-4 mt-0 lg:w-[70%]">
        <h2 className="text-white text-center md:text-start text-3xl md:text-[52px] inter-font  font-bold  mt-4 md:mt-0">
        Access legal services, Collaborate and Work On Briefs From Anywhere</h2>
        <p className="text-white text-center md:text-start font-normal text-[14px] lg:text-lg  lator-regular">
          Access limitless legal services and consultations, Collaborate  with Colleagues, Manage Cases, Conduct Interviews And Sort Paper-works From The Comfort Of Your Home, leveraging On The Power Of An Electronic Law Office
        </p>
        <Link
          className="bg-gradient-to-b from-[#CAA500] to-[#825900] text-white w-full md:w-[30%] text-[16px] rounded-md  md:rounded-full text-center p-4"
          to="#"
        ><span className="text-white lato-regular">

            Join Our Lawyers
          </span>
        </Link>
      </div>
    </section>
  );
};
