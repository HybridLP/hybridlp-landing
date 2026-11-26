import { CheckCircle2, RotateCcw } from "lucide-react";
import { NavLink } from "react-router-dom";

interface Props {
  serviceLabel: string;
  fullName: string;
  email: string;
  onReset: () => void;
}

export default function QuickServiceSuccess({
  serviceLabel,
  fullName,
  email,
  onReset,
}: Props) {
  return (
    <div
      style={{ boxShadow: "-4px 10px 20px 0px #00000040" }}
      className="bg-[#333333] text-white rounded-2xl p-8 max-w-lg w-full text-center space-y-5"
    >
      <div className="w-14 h-14 rounded-full bg-[#E9DFB0] text-[#333333] flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div>
        <h4 className="text-xl font-semibold inter-font">Request Received</h4>
        <p className="text-gray-300 text-sm mt-2 leading-relaxed">
          Thank you, <span className="text-white font-medium">{fullName}</span>. Your{" "}
          <span className="text-[#E9DFB0] font-medium">{serviceLabel}</span> request has
          been sent to our legal team. We will reply directly to{" "}
          <span className="text-white font-medium">{email}</span>.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="button"
          onClick={onReset}
          className="flex-1 bg-white text-black py-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Send Another</span>
        </button>
        <NavLink
          to="/"
          className="flex-1 bg-white/10 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors text-center"
        >
          Back to Home
        </NavLink>
      </div>
    </div>
  );
}
