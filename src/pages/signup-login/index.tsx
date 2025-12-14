import { NavLink } from "react-router-dom";
import logo from "../../assets_/logo/favIcon.png";
import authBg from "../../assets_/auth-bg.png";
import authBg2 from "../../assets_/auth-bg2.png";

export default () => {
  return (
    // background
    <div className="relative w-screen h-screen overflow-hidden bg-no-repeat">
      <img
        src={authBg2}
        alt=""
        className="absolute top-0 w-[60%] md:w-[40%] h-auto md:h-[50%] -left-[10%] md:top-[10%] object-contain opacity-60 md:opacity-100"
      />
      <img
        src={authBg}
        alt=""
        className="absolute bottom-0 right-0 w-[70%] md:w-[40%] h-auto md:h-[80%] object-contain opacity-60 md:opacity-100"
      />
      {/* main content */}
      <div className=" inter-font z-20 absolute top-0 left-0 right-0 w-screen flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 bg-[#E9DFB0]/85 ">
        <img src={logo} className="size-16 sm:size-20" alt="" />
        <h3 className="inter-font font-semibold text-black text-lg sm:text-xl md:text-[20px] mt-2">
          Hybrid LP
        </h3>
        <p className="text-[#545454] mt-2 text-base sm:text-lg md:text-[20px] inter-font text-center px-4">
          Your legal solutions in one place.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 mt-12 lg:mt-24 w-full max-w-6xl px-4 justify-center items-center">
          <div
            style={{ boxShadow: "-4px 10px 20px 0px #00000040" }}
            className="bg-[#333333] w-full max-w-md lg:w-[470px] h-[200px] lg:h-[320px] rounded-2xl flex flex-col items-center justify-center gap-4 lg:gap-6 px-4 hover:transform hover:scale-[1.02] transition-all duration-300"
          >
            <h4 className="text-white text-lg lg:text-xl font-medium text-center">
              Signup/Login as
            </h4>
            <NavLink
              className="bg-white cursor-pointer text-black w-48 lg:w-64 py-3 rounded-lg text-base lg:text-lg font-medium hover:bg-gray-100 transition-colors text-center shadow-lg"
              to="https://app.hybridlp.com/login"
              target="_blank"
            >
              A Client
            </NavLink>
          </div>

          <div
            style={{ boxShadow: "-4px 10px 20px 0px #00000040" }}
            className="bg-[#E6E6E6] w-full max-w-md lg:w-[470px] h-[200px] lg:h-[320px] rounded-2xl flex flex-col items-center justify-center gap-4 lg:gap-6 px-4 hover:transform hover:scale-[1.02] transition-all duration-300"
          >
            <h4 className="text-[#333] text-lg lg:text-xl font-medium text-center">
              Signup/Login as
            </h4>
            <NavLink
              className="bg-[#333333] cursor-pointer text-white w-48 lg:w-64 py-3 rounded-lg text-base lg:text-lg font-medium hover:bg-[#222222] transition-colors text-center shadow-lg"
              to="https://lawyer.hybridlp.com/login"
              target="_blank"
            >
              A Lawyer
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
