
import lawyer from "../../../assets_/lawyer.png";
import lawyerProfile2 from "../../../assets_/lawyer-profile.png";
import lawyerImage2 from "../../../assets_/lawyer-profile.png";
import alhaja from "../../../assets_/alhaja.png";
import chibugor from "../../../assets_/chibugor.png";
import thomas from "../../../assets_/thomas.png";
export interface LawyerData {
  name: string;
  image: string;
  profileImage: string;
  expertise: string;
}

export const stages: LawyerData[] = [
  {
    name: "P. John Doe Esq.",
    profileImage: lawyer, 
    image: lawyer, 
    expertise: "Property Law | Real Estate",
  },
  {
    name: "A. Muhammed Esq",
    profileImage: lawyerProfile2,
    image: lawyerImage2,
    expertise: "Corporate | Property Law",
  },
  {
    name: "M. precious Esq",
    profileImage: alhaja,
    image: alhaja,
    expertise: "Corporate | Tax Law",
  },
  {
    name: "K. Chibugor Esq",
    profileImage: chibugor,
    image: chibugor,
    expertise: "Corporate | Tax Law",
  },
  {
    name: "K. Thomas Esq",
    profileImage: thomas,
    image: thomas,
    expertise: "Corporate | Tax Law",
  },
];

interface DynamicLawyerCardProps {
  data: LawyerData;
}

const DynamicLawyerCard = ({ data }: DynamicLawyerCardProps) => {
  return (
    <div className="w-full manrope  h-[150px] md:h-[175px] text-start  rounded-lg object-cover bg-[#E6E6E6] px-6 md:px-[47px] py-4 md:py-6 text-[#333333]">
      <h3 className="text-md manrope md:text-lg font-semibold text-gray-800 mb-2 md:mb-6 pointer-events-none select-none flex items-center gap-2">
        <span className="bg-linear-to-b from-[#4C9C00] to-[#A6F55B] rounded-full w-3 h-3" />{" "}
        <span>Available for work</span>
      </h3>

      <div className="flex flex-col gap-1 md:gap-2">
        <div className="flex items-center gap-2 md:gap-4 ">
          <img
            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] mt-2 object-center object-cover rounded-full"
            src={data.profileImage}
            alt={data.name}
          />
          <div className="flex flex-col gap-1 ">
           
            <div className="text-[14px] md:text-[16px] font-medium flex items-center gap-2">
              <span className="shrink-0">
                <JusticeScale />
              </span>
              <span className="truncate">{data.expertise}</span>
            </div>
            <p className="flex items-center gap-2 mt-2 inter-font text-xs text-[12px] md:text-[14px] font-medium">
              <span className="text-[#B89900] font-medium">10+ </span>
              <span className="font-medium">yrs of exp<span className="hidden md:flex">erience</span> </span>
              <RatingStars size={14} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicLawyerCard;

const JusticeScale = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.44 0H8.44V2.085C8.18137 2.1765 7.95278 2.33717 7.77911 2.54955C7.60544 2.76192 7.49334 3.01785 7.455 3.2895L3.81 4.267C3.69724 4.29747 3.59871 4.36646 3.5315 4.462L0.604003 8.609H2.53975e-06C-0.000437461 9.01148 0.0562958 9.41198 0.168502 9.7985C0.643502 11.4265 2.067 12.6085 3.75 12.6085C5.4975 12.6085 6.9655 11.3335 7.382 9.6085C7.46067 9.28167 7.50028 8.94666 7.5 8.6105V8.609H7.0325L4.7325 5.055L7.6535 4.2715C7.8329 4.57079 8.11103 4.79817 8.44 4.9145V16H6.94V17H3.94V18H13.94V17H10.94V16H9.44V4.915C9.72883 4.81292 9.97948 4.62486 10.1583 4.3761C10.337 4.12734 10.4354 3.8298 10.44 3.5235L13.01 2.8345L11.1765 5.5H10.44C10.44 5.845 10.481 6.18 10.558 6.5C10.9745 8.225 12.443 9.5 14.19 9.5C15.8725 9.5 17.2965 8.318 17.7715 6.6895C17.7895 6.62717 17.8062 6.564 17.8215 6.5C17.9004 6.17303 17.9402 5.83785 17.94 5.5015V5.5H16.967L14.62 1.745C14.5644 1.65107 14.4795 1.57793 14.3784 1.53676C14.2773 1.49559 14.1654 1.48865 14.06 1.517L10.12 2.574C9.9443 2.34992 9.70844 2.18049 9.44 2.0855V0ZM12.3905 5.5H15.788L14.17 2.9115L12.3905 5.5ZM5.8415 8.609L3.922 5.6425L1.828 8.609H5.8415Z"
        fill="black"
      />
    </svg>
  );
};

const RatingStars = ({ size = 24 }) => {
  const Star = ({
    color,
    isOutline,
  }: {
    color: string;
    isOutline: boolean;
  }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isOutline ? "none" : color}
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );

  return (
    <span style={{ display: "flex", gap: "4px" }}>
      {[1, 2, 3, 4].map((i) => (
        <Star key={i} color="#B89900" isOutline={false} />
      ))}
      <Star color="#333333" isOutline={true} />
    </span>
  );
};
