import { Link } from "react-router-dom";
import cacFormPdf from "../../../assets/CAC FORM.pdf";
import { ArrowDown, Calendar } from "lucide-react";

interface Props {
  onScrollToForm: () => void;
}

export default function BottomBanner({ onScrollToForm }: Props) {
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#15233F] to-[#0D1629] border border-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl mb-16">
      <h2 className="text-2xl md:text-3xl font-bold inter-font mb-4 text-white">
        Not Sure Which One Is Right for You?
      </h2>
      <p className="text-gray-300 text-base md:text-lg lato-regular mb-8">
        Tell us what you want to do. We’ll help you choose the right structure or handle the full filing on your behalf.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          type="button"
          onClick={onScrollToForm}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-linear-to-b from-[#CAA500] to-[#825900] text-white px-8 py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all shadow-md active:scale-95 text-center cursor-pointer"
        >
          <ArrowDown className="w-5 h-5" />
          Get a Lawyer to do it for you
        </button>
        <Link
          to="/book-consultation"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#15233F] border border-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-base hover:border-[#CAA500] transition-all active:scale-95 text-center"
        >
          <Calendar className="w-5 h-5 text-[#CAA500]" />
          Book a Session with Us
        </Link>
        <a
          href={cacFormPdf}
          download="CAC_FORM.pdf"
          className="w-full sm:w-auto bg-transparent border-2 border-[#CAA500] text-[#CAA500] px-6 py-4 rounded-lg font-semibold text-base hover:bg-[#CAA500]/10 transition-all active:scale-95 text-center"
        >
          Download CAC Form (PDF)
        </a>
      </div>
    </div>
  );
}
