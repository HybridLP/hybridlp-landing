import bg from "../../../assets_/brief submission.jpg";
const items = [
  {
    title: "Briefs",
    content:
      "When you’ve got a dispute, just open Hybrid LP and brief the most capable lawyers in the field.",
  },
  {
    title: "Collaborate",
    content:
      "Which-ever area of law your brief falls, you get merged with the best lawyers in the field to address your brief.",
  },
  {
    title: "Share Briefs",
    content:
      "Lawyers share personal briefs with colleague lawyers to collaborate and fast track productivity.",
  },
];
export default () => {
  return (
    <>
      <div className=" flex py-20   gap-18 bg-black text-white md:px-32">
        <div className="flex flex-col space-y-2 ">
          <div className=" flex flex-col space-y-4 w-full ">
            <h6 className="text-black h-14 bg-gray-100 w-[40%] flex items-center justify-center rounded-md  text-center text-[16px] lato-regular ">
              About HybridLP
            </h6>
            <h1 className="text-[30px] lg:text-[40px] text-white font-bold inter">
              Your Legal Powerhouse
            </h1>
            {items.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={` rounded-md  ${
                    idx === 0 ? "border-l-10" : "border-l-2"
                  } border-[#DED08A]  flex flex-col w-full h-28 shadow-xs shadow-[#FFFFFF40] p-2 bg-[#1D1D1D]`}
                >
                  <h3 className="text-[24px] inter-font">{item.title}</h3>
                  <p className="text-white font-normal text-sm md:text-lg lator-regular">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col space-y-2 w-[95%]">
          <p className="text-white text-[20px] lato-regular font-normal ">
            Hybrid Law Practice is your legal powerhouse designed for your
            seamless legal offering/service experience. Every brief,
            collaboration, interview find it’s place, keeping you at the top of
            your game.
          </p>
          <div className="flex justify-end space-x-2">
            {[1, 2, 3].map((_, index) => (
              <div className="rounded-full w-4 h-4 bg-gray-200" key={index} />
            ))}
          </div>
          <img
            src={bg}
            alt="brief submission"
            loading="lazy"
            className="w-full h-[70%] rounded-2xl "
          />
        </div>
      </div>
    </>
  );
};
