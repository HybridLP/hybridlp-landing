import { NavLink } from "react-router-dom";
import logo from "../../assets_/logo/favIcon.png";

export default () => {
  return (
    <div className="inter-font flex flex-col bg-[#E9DFB0] items-center justify-center h-screen">
      <img src={logo} className="size-20" alt="" />
      <h3 className="inter-font font-semibold text-black text-[20px]">
        Hybrid LP
      </h3>
      <p className="text-[#545454] mt-2 text-[20px] inter-font">
        Your legal solutions in one place.
      </p>
      <div className="flex space-x-8 mt-4">
        <div className="bg-[#333333] shadow-md w-xs h-[170px] rounded-lg space-y-2 flex flex-col items-center px-8 justify-center">
          <h4 className="text-white  text-[16px] font-medium">
            Signup/Login as
          </h4>
          <NavLink
            className="bg-white shadow-sm text-black w-2/3 flex items-center justify-center py-2 rounded-md"
            to="https://app.hybridlp.com"
          target="_blank"
          >
            A Client
          </NavLink>
        </div>
        <div className="bg-[#E6E6E6] shadow-md w-xs h-[170px] rounded-lg space-y-2 flex flex-col items-center px-8 justify-center">
          <h4 className="text-[#333]  text-[16px] font-medium">
            Signup/Login as
          </h4>
          <NavLink
            className="bg-[#333333] text-white shadow-sm  w-2/3 flex items-center justify-center py-2 rounded-md"
            to="https://lawyer.hybridlp.com"
            target="_blank"
          >
            A Lawyer
          </NavLink>
        </div>
      </div>
    </div>
  );
};
