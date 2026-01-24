import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import {
  getPublicJudgements,
  Judgement,
} from "../../services/judgementService";

export default () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCases, setVisibleCases] = useState(6);
  const [judgements, setJudgements] = useState<Judgement[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchJudgements = async () => {
    try {
      const data = await getPublicJudgements(100, 0);
      console.log(data);
      setJudgements(data);
    } catch (error) {
      console.error("Failed to fetch judgements", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJudgements();
  }, []);

  const handleLoadMore = () => {
    setVisibleCases((prev) => prev + 6);
  };

  const filteredCases = (Array.isArray(judgements) ? judgements : []).filter(
    (case_) =>
      case_.citation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.judgement?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Helper to strip HTML tags for description preview
  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-[7%] py-8 sm:py-12 md:py-16 pt-24 sm:pt-28 md:pt-[10%]">
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
        <div className="flex-1">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Hybrid LP Handled Cases
          </h1>
          <p className="text-white/80 text-base sm:text-lg">
            See the full judgements of all cases handled by Hybrid law practice
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full lg:max-w-md lg:ml-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by citation or content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-transparent border border-gray-500 rounded-lg text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14 mb-8 sm:mb-10 md:mb-12">
        {filteredCases.slice(0, visibleCases).map((case_, index) => (
          <div
            key={case_.id || index}
            onClick={() => {
              if (case_.link) {
                window.open(case_.link, "_blank");
              }
            }}
            className={`border-l-2 border-t-2 rounded-tl-lg border-[#8A8A8A] p-4 sm:p-5 transition-colors ${
              case_.link ? "hover:border-white cursor-pointer" : ""
            }`}
          >
            {/* Case Header */}
            <div className="mb-3 sm:mb-4">
              <h3 className="text-[#E8E8E8] text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-medium mb-2 lato-semibold break-words">
                {case_.citation}
              </h3>
              <div className="w-10 sm:w-12 h-0.5 bg-gray-500 mt-2 sm:mt-3"></div>
            </div>

            {/* Case Principle - Using part of judgement as principle/preview */}
            <div className="mb-3 sm:mb-4">
              <h4 className="text-[#E8E8E8] font-semibold text-lg sm:text-xl md:text-[22px] lg:text-[24px] mb-2 lato-regular break-words">
                {/* Principle placeholder or condensed view */}
              </h4>
            </div>

            {/* Case Description */}
            <p className="text-[#E8E8E8] text-sm sm:text-base md:text-[16px] text-justify leading-relaxed lato-regular line-clamp-4">
              {stripHtml(case_.judgement)}
            </p>
          </div>
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-white py-12">Loading cases...</div>
      )}

      {/* Load More Button */}
      {!loading && visibleCases < filteredCases.length && (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            className="flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors inter-font font-semibold text-sm sm:text-base"
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
      {!loading && filteredCases.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-white/60 text-base sm:text-lg">
            No cases found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};
