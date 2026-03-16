import board from "../../../assets_/board.png";

import lawyerImage2 from "../../../assets_/lawyer-profile.png";
import alhaja from "../../../assets_/alhaja.png";
import chibugor from "../../../assets_/chibugor.png";
import thomas from "../../../assets_/thomas.png";

export default () => {
  return (
    <section
      className={`min-h-screen   md:min-h-[130dvh] relative  pt- md:pt-[5%] pb-8 md:pb-0  items-center   overflow-hidden- `}
    >
      <div className="absolute  top-0 left-0 right-0 inset-0 z-50 pointer-events-none" />
      <div className="flex flex-col items-center text-center h-fit  bg-white md:mx-[181px] md:rounded-t-2xl pt-[20%]  md:pt-[10%]">
        <h3 className="uppercase text-[14px] md:text-[16px] lato-regular w-fit text-[#6A7586] py-2 px-10 font-semibold border-solid border-[1.5px] border-[#6A7586] rounded-full">
          Hybrid Law Practice
        </h3>
        <div className="mt-2 md:mt-4">
          <h1 className="text-[#333333] inter-font text-center text-3xl md:text-4xl lg:text-[56px] whitespace-wrap font-bold leading-tight">
            Connect with
          </h1>
          <h1 className="text-[#B89900] inter-font text-center text-3xl md:text-4xl lg:text-[56px] whitespace-wrap font-bold leading-tight">
            Legal Experts
          </h1>
        </div>

        <p className="text-[#8A8A8A] text-center font-regular text-[16px] md:text-[18px] lg:text-[24px] lator-regular italic w-fit my-4 md:my-6 lg:my-8 px-4 md:px-0">
          Providing Tailored Legal Counsel and Solutions
        </p>
        <div className="flex items-center gap-4">
          <a
            className="bg-linear-to-b from-[#CAA500] to-[#825900] text-white w-full max-w-[280px] md:max-w-[320px] lg:w-[268px] text-[14px] md:text-[16px] rounded-lg text-center py-3 px-6 md:p-4 mb-6 md:mb-8 transition-all duration-300 active:scale-95 h-[52px] md:h-[60px] flex items-center justify-center overflow-hidden"
            href="https://app.hybridlp.com"
          >
            Get a lawyer
          </a>
          <a
            className="bg-linear-to-b border-[#CAA500] border-[1.5px] border-solid text-[#CAA500] w-full max-w-[280px] md:max-w-[320px] lg:w-[268px] whitespace-nowrap text-[14px] md:text-[16px] rounded-lg text-center py-3 px-6 md:p-4 mb-6 md:mb-8 transition-all duration-300 active:scale-95 h-[52px] md:h-[60px] flex items-center justify-center overflow-hidden"
            href={"https://lawyer.hybridlp.com"}
          >
            Join our Lawyers
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center mb-4">
          <div className="inline-flex relative ">
            <img
              src={alhaja}
              className="size-11 rounded-full object-center object-cover  -ml-0"
              alt=""
            />
            <img
              src={lawyerImage2}
              className="size-11 rounded-full object-center object-cover  -ml-4"
              alt=""
            />
            <img
              src={chibugor}
              className="size-11 rounded-full object-center object-cover  -ml-4"
              alt=""
            />
            <img
              src={thomas}
              className="size-11 rounded-full object-center object-cover  -ml-4"
              alt=""
            />
          </div>
          <p className="text-black text-center font-regular lato-regular text-[16px] md:text-[18px] lg:text-[22px] lator-regular italic w-fit my-4 md:my-6 lg:my-8 px-4 md:px-0">
            5,123+ People trust Hybridlp
          </p>
          <div className="flex flexx-row items-center text-md text-[#CAA500]">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                fill="#CAA500"
                key={i}
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.926 20.2a1 1 0 0 1-.466-.115l-4.471-2.352-4.471 2.348a1 1 0 0 1-1.451-1.054l.854-4.98L3.3 10.521a1 1 0 0 1 .555-1.706l5-.727 2.237-4.531A1 1 0 0 1 11.989 3a1 1 0 0 1 .9.558l2.236 4.53 5 .727a1 1 0 0 1 .555 1.706l-3.618 3.527.854 4.98a1 1 0 0 1-.99 1.172z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-[75%] md:top-[65%] z-10 w-full   mt-auto  md:pb-8 md:mb-4 md:mt-8 px-4 lg:px-[90px]">
        <img src={board} alt="" />
      </div>
    </section>
  );
};
