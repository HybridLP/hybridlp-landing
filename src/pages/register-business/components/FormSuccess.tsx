import { CheckCircle2 } from "lucide-react";

interface Props {
  fullName: string;
  email: string;
  phone: string;
  structure: string;
  businessName: string;
  onReset: () => void;
}

export default function FormSuccess({
  fullName,
  email,
  phone,
  structure,
  businessName,
  onReset,
}: Props) {
  return (
    <div className="bg-[#15233F] border border-[#CAA500]/40 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
      <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
        <CheckCircle2 className="w-10 h-10" />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold inter-font text-white mb-3">
        Registration Form Submitted!
      </h3>
      <p className="text-gray-300 text-base lato-regular max-w-xl mx-auto mb-6 leading-relaxed">
        Thank you, <strong className="text-white">{fullName}</strong>. Your registration request for{" "}
        <strong className="text-[#CAA500]">{businessName}</strong> ({structure}) has been received. A confirmation
        has been sent to <strong className="text-white">{email}</strong>.
      </p>

      <div className="bg-[#0B132B] border border-gray-800 rounded-xl p-6 max-w-md mx-auto text-left mb-8 space-y-2 text-sm lato-regular">
        <div className="flex justify-between border-b border-gray-800 pb-2">
          <span className="text-gray-400">Proposed Name:</span>
          <span className="text-white font-medium">{businessName}</span>
        </div>
        <div className="flex justify-between border-b border-gray-800 py-2">
          <span className="text-gray-400">Structure:</span>
          <span className="text-white font-medium">{structure}</span>
        </div>
        <div className="flex justify-between pt-2">
          <span className="text-gray-400">Contact Phone:</span>
          <span className="text-white font-medium">{phone}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="bg-transparent border border-[#CAA500] text-[#CAA500] px-6 py-3 rounded-lg font-semibold hover:bg-[#CAA500]/10 transition-all text-sm md:text-base cursor-pointer"
      >
        Register Another Business
      </button>
    </div>
  );
}
