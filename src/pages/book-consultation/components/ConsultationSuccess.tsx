import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

interface Props {
  fullName: string;
  email: string;
  phone: string;
  practiceArea: string;
  mode: string;
  preferredDate?: string;
  urgency: string;
  onReset: () => void;
}

export default function ConsultationSuccess({
  fullName,
  email,
  phone,
  practiceArea,
  mode,
  preferredDate,
  urgency,
  onReset,
}: Props) {
  return (
    <div className="bg-[#15233F] border border-[#CAA500]/40 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
      <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
        <CheckCircle2 className="w-10 h-10" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold inter-font text-white mb-3">
        Consultation Scheduled!
      </h2>
      <p className="text-gray-300 text-base md:text-lg lato-regular max-w-xl mx-auto mb-6 leading-relaxed">
        Thank you, <strong className="text-white">{fullName}</strong>. Your consultation request has been registered.
        A confirmation email has been dispatched to <strong className="text-[#CAA500]">{email}</strong>. Our legal team
        will contact you to finalize the session details.
      </p>

      <div className="bg-[#0B132B] border border-gray-800 rounded-xl p-6 max-w-md mx-auto text-left mb-8 space-y-2 text-sm lato-regular">
        <div className="flex justify-between border-b border-gray-800 pb-2">
          <span className="text-gray-400">Practice Area:</span>
          <span className="text-white font-medium">{practiceArea}</span>
        </div>
        <div className="flex justify-between border-b border-gray-800 py-2">
          <span className="text-gray-400">Preferred Mode:</span>
          <span className="text-white font-medium">{mode}</span>
        </div>
        <div className="flex justify-between border-b border-gray-800 py-2">
          <span className="text-gray-400">Preferred Date:</span>
          <span className="text-white font-medium">{preferredDate || "Earliest available"}</span>
        </div>
        <div className="flex justify-between border-b border-gray-800 py-2">
          <span className="text-gray-400">Urgency:</span>
          <span className="text-white font-medium">{urgency}</span>
        </div>
        <div className="flex justify-between pt-2">
          <span className="text-gray-400">Contact Phone:</span>
          <span className="text-white font-medium">{phone}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          type="button"
          onClick={onReset}
          className="w-full sm:w-auto bg-transparent border border-[#CAA500] text-[#CAA500] px-6 py-3 rounded-lg font-semibold hover:bg-[#CAA500]/10 transition-all text-sm md:text-base cursor-pointer"
        >
          Book Another Consultation
        </button>
        <Link
          to="/"
          className="w-full sm:w-auto bg-linear-to-b from-[#CAA500] to-[#825900] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all text-sm md:text-base text-center"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
