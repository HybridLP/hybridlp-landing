import { NavLink } from "react-router-dom";
import logo from "../../assets_/logo/favIcon.png";

export default () => {
  return (
    <div className="inter-font flex flex-col bg-[#E9DFB0] items-center justify-center min-h-screen p-4 sm:p-6">
      <img src={logo} className="size-16 sm:size-20" alt="" />
      <h3 className="inter-font font-semibold text-black text-lg sm:text-xl md:text-[20px] mt-2">
        Hybrid LP
      </h3>
      <p className="text-[#545454] mt-2 text-base sm:text-lg md:text-[20px] inter-font text-center px-4">
        Your legal solutions in one place.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 gap-4 md:space-x-8 mt-6 sm:mt-8 w-full max-w-2xl px-4">
        <div className="bg-[#333333] shadow-md w-full max-w-xs mx-auto h-[170px] rounded-lg space-y-2 flex flex-col items-center px-8 justify-center">
          <h4 className="text-white text-sm sm:text-base md:text-[16px] font-medium text-center">
            Signup/Login as
          </h4>
          <NavLink
            className="bg-white shadow-sm text-black w-2/3 flex items-center justify-center py-2 rounded-md text-sm sm:text-base hover:bg-gray-100 transition-colors"
            to="https://app.hybridlp.com/login"
          target="_blank"
          >
            A Client
          </NavLink>
        </div>
        <div className="bg-[#E6E6E6] shadow-md w-full max-w-xs mx-auto h-[170px] rounded-lg space-y-2 flex flex-col items-center px-8 justify-center">
          <h4 className="text-[#333] text-sm sm:text-base md:text-[16px] font-medium text-center">
            Signup/Login as
          </h4>
          <NavLink
            className="bg-[#333333] text-white shadow-sm w-2/3 flex items-center justify-center py-2 rounded-md text-sm sm:text-base hover:bg-[#222222] transition-colors"
            to="https://lawyer.hybridlp.com/login"
            target="_blank"
          >
            A Lawyer
          </NavLink>
        </div>
      </div>
    </div>
  );
};
