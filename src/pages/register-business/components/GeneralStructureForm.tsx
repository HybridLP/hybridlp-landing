import React, { useState } from "react";
import { Send, AlertCircle, ShieldCheck, FileText } from "lucide-react";
import { serviceRequestService } from "../../../services/serviceRequestService";
import { StructureItem } from "../data/structures";
import GeneralStructureFields, { GeneralStructureFormData } from "./GeneralStructureFields";

interface Props {
  structure: StructureItem;
  onSuccess: (data: { fullName: string; email: string; phone: string; businessName: string }) => void;
}

export default function GeneralStructureForm({ structure, onSuccess }: Props) {
  const [formData, setFormData] = useState<GeneralStructureFormData>({
    fullName: "",
    email: "",
    phone: "",
    businessName1: "",
    businessName2: "",
    businessNature: "",
    businessAddress: "",
    directorsCount: "2",
    shareCapital: "1,000,000",
    additionalNotes: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await serviceRequestService.submit({
        type: "business_registration",
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: `${structure.shortName}: ${formData.businessName1}`,
        details: formData.businessNature,
        metadata: {
          structure: structure.title,
          structureId: structure.id,
          proposedBusinessName1: formData.businessName1,
          proposedBusinessName2: formData.businessName2 || undefined,
          natureOfBusiness: formData.businessNature,
          registeredAddress: formData.businessAddress,
          directorsOrPartnersCount: formData.directorsCount || undefined,
          shareCapitalOrGuarantee: formData.shareCapital || undefined,
          additionalNotes: formData.additionalNotes || undefined,
        },
      });

      onSuccess({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName1,
      });
    } catch (err: any) {
      console.error("Structure registration submission error:", err);
      setError(err?.response?.data?.error || "Failed to submit registration. Please check your inputs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 lato-regular">
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="p-4 rounded-xl bg-[#0B132B] border border-[#CAA500]/30 flex items-center justify-between">
        <span className="text-sm text-gray-300">Selected Structure:</span>
        <span className="text-sm font-semibold text-[#CAA500]">{structure.title}</span>
      </div>

      <GeneralStructureFields formData={formData} onChange={handleChange} />

      <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-gray-800 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#CAA500]" />
          <span>CAC Accredited Legal Filing</span>
        </div>
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#CAA500]" />
          <span>Full documentation, certificate & status report</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-linear-to-b from-[#CAA500] to-[#825900] text-white py-4 rounded-lg font-semibold text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 active:scale-98 cursor-pointer"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Send className="w-5 h-5" /> Submit {structure.shortName} Form
          </>
        )}
      </button>
    </form>
  );
}
