
import bg from "../../../assets_/probono-bg.jpg";

export default () => {
  return (
    <section
      className={`flex h-[50%] px-[5%]  py-[5%] pt-[10%] justify-center  items-center  bg-blend-darken bg-cover`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center gap-4 mt-0">
        <h2 className="inter-font text-white text-center md:text-start text-3xl md:text-[52px] inter-font  font-bold  mt-4 md:mt-0">
          Pro Bono Services
        </h2>
        <p className="lato-reular text-white text-center md:text-start font-normal text-[14px] lg:text-lg  lator-regular">
        Legal representation for all who need it.
        </p>
      
      </div>
    </section>
  );
};
