import { Link } from "react-router-dom";

export default function QuickServicesSection() {
  return (
    <section className="px-6 md:px-8 lg:px-20 xl:px-38.25 my-6 md:my-10">
      {/* Duplicated "Not Sure What Legal Help You Need?" design for "Already Know What You Need?" */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#15233F] border border-gray-800 rounded-xl p-6 md:p-8 gap-4">
        <h2 className="text-white text-xl md:text-2xl font-semibold inter-font text-center md:text-left">
          Already Know What You Need?
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/book-consultation"
            className="bg-linear-to-b from-[#CAA500] to-[#825900] text-white text-sm md:text-base font-semibold py-3 px-6 rounded-lg transition-all duration-300 active:scale-95 whitespace-nowrap hover:opacity-90 flex items-center gap-2"
          >
            Book a Consultation
          </Link>
          <Link
            to="/quick-service"
            className="border border-[#CAA500] text-[#CAA500] hover:bg-[#CAA500]/10 text-sm md:text-base font-semibold py-3 px-6 rounded-lg transition-all duration-300 active:scale-95 whitespace-nowrap flex items-center gap-2"
          >
            Explore Other Features
          </Link>
        </div>
      </div>
    </section>
  );
}
