import { useState } from "react";
import { Search } from "lucide-react";

export default () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCases, setVisibleCases] = useState(6);

  const handleLoadMore = () => {
    setVisibleCases((prev) => prev + 6);
  };

  const filteredCases = judgementCases.filter(
    (case_) =>
      case_.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.citation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.principle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" min-h-screen px-[7%] py-16 pt-[10%]">
      {/* Header Section */}
      <div className="mb-12  flex justify-between items-end">
        <div>
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Hybrid LP Handled Cases
          </h1>
          <p className="text-white/80 text-lg">
            See the full judgements of all cases handled by Hybrid law practice
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md ml-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by 'name of the party'"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-12">
        {filteredCases.slice(0, visibleCases).map((case_, index) => (
          <div
            key={index}
            className="border-l-2 border-t-2 rounded-tl-lg border-[#8A8A8A] p-5 hover:border-white transition-colors"
          >
            {/* Case Header */}
            <div className="mb-4">
              <h3 className="text-[#E8E8E8] text-[32px]  font-medium mb-2 lato-semibold">
                {case_.title}
                {case_.citation}
              </h3>
              <div className="w-12 h-0.5 bg-gray-500 mt-3"></div>
            </div>

            {/* Case Principle */}
            <div className="mb-4">
              <h4 className="text-[#E8E8E8] font-semibold text-[24px] mb-2 lato-regular">
                Principle of law - "{case_.principle}"
              </h4>
            </div>

            {/* Case Description */}
            <p className="text-[#E8E8E8] text-[16px] text-justify leading-relaxed lato-regular ">
              {case_.description}
            </p>
          </div>
        ))}
      </div>
      {/* Load More Button */}
      {visibleCases < filteredCases.length && (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            className="flex items-center px-6 py-3 bg-white text-black rounded-full  hover:bg-gray-100 transition-colors inter-font font-semibold"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            Load more
          </button>
        </div>
      )}

      {/* No Results */}
      {filteredCases.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/60 text-lg">
            No cases found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};

const judgementCases = [
  {
    title: "Ololade V. Asake CBN- 1958",
    citation: "1 NWLR (PT.89) P.213",
    principle: "justification for grant of an ex parte order of injunction",
    description:
      "The basis of granting any ex-parte order of injunction is the existence of special circumstances and invariably, an all - pervading real urgency, which requires that the order must be made. Otherwise, an irretrievable harm or injury would be occasioned to the prejudice of the Applicant...",
  },
  {
    title: "Ololade V. Asake CBN- 1958",
    citation: "1 NWLR (PT.89) P.213",
    principle: "justification for grant of an ex parte order of injunction",
    description:
      "The basis of granting any ex-parte order of injunction is the existence of special circumstances and invariably, an all - pervading real urgency, which requires that the order must be made. Otherwise, an irretrievable harm or injury would be occasioned to the prejudice of the Applicant...",
  },
  {
    title: "Ololade V. Asake CBN- 1958",
    citation: "1 NWLR (PT.89) P.213",
    principle: "justification for grant of an ex parte order of injunction",
    description:
      "The basis of granting any ex-parte order of injunction is the existence of special circumstances and invariably, an all - pervading real urgency, which requires that the order must be made. Otherwise, an irretrievable harm or injury would be occasioned to the prejudice of the Applicant...",
  },
  {
    title: "Ololade V. Asake CBN- 1958",
    citation: "1 NWLR (PT.89) P.213",
    principle: "justification for grant of an ex parte order of injunction",
    description:
      "The basis of granting any ex-parte order of injunction is the existence of special circumstances and invariably, an all - pervading real urgency, which requires that the order must be made. Otherwise, an irretrievable harm or injury would be occasioned to the prejudice of the Applicant...",
  },
  {
    title: "Ololade V. Asake CBN- 1958",
    citation: "1 NWLR (PT.89) P.213",
    principle: "justification for grant of an ex parte order of injunction",
    description:
      "The basis of granting any ex-parte order of injunction is the existence of special circumstances and invariably, an all - pervading real urgency, which requires that the order must be made. Otherwise, an irretrievable harm or injury would be occasioned to the prejudice of the Applicant...",
  },
  {
    title: "Ololade V. Asake CBN- 1958",
    citation: "1 NWLR (PT.89) P.213",
    principle: "justification for grant of an ex parte order of injunction",
    description:
      "The basis of granting any ex-parte order of injunction is the existence of special circumstances and invariably, an all - pervading real urgency, which requires that the order must be made. Otherwise, an irretrievable harm or injury would be occasioned to the prejudice of the Applicant...",
  },
  {
    title: "Ololade V. Asake CBN- 1958",
    citation: "1 NWLR (PT.89) P.213",
    principle: "justification for grant of an ex parte order of injunction",
    description:
      "The basis of granting any ex-parte order of injunction is the existence of special circumstances and invariably, an all - pervading real urgency, which requires that the order must be made. Otherwise, an irretrievable harm or injury would be occasioned to the prejudice of the Applicant...",
  },
  {
    title: "Ololade V. Asake CBN- 1958",
    citation: "1 NWLR (PT.89) P.213",
    principle: "justification for grant of an ex parte order of injunction",
    description:
      "The basis of granting any ex-parte order of injunction is the existence of special circumstances and invariably, an all - pervading real urgency, which requires that the order must be made. Otherwise, an irretrievable harm or injury would be occasioned to the prejudice of the Applicant...",
  },
  {
    title: "Ololade V. Asake CBN- 1958",
    citation: "1 NWLR (PT.89) P.213",
    principle: "justification for grant of an ex parte order of injunction",
    description:
      "The basis of granting any ex-parte order of injunction is the existence of special circumstances and invariably, an all - pervading real urgency, which requires that the order must be made. Otherwise, an irretrievable harm or injury would be occasioned to the prejudice of the Applicant...",
  },
];
