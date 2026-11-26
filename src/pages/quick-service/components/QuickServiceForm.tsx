import React from "react";
import { AlertCircle, ArrowLeft, Send } from "lucide-react";
import type { QuickServiceOption } from "../constants";

const TIMELINES = ["Flexible", "Within 48 hrs", "Urgent (Today)"];

interface Props {
  selected: QuickServiceOption;
  fullName: string;
  email: string;
  phone: string;
  timeline: string;
  details: string;
  loading: boolean;
  error: string | null;
  onChange: (
    field: "fullName" | "email" | "phone" | "timeline" | "details",
    value: string
  ) => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const inputCls =
  "w-full rounded-lg bg-white text-[#333333] placeholder-[#777777] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E9DFB0]";

export default function QuickServiceForm({
  selected,
  fullName,
  email,
  phone,
  timeline,
  details,
  loading,
  error,
  onChange,
  onBack,
  onSubmit,
}: Props) {
  return (
    <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
      {/* Left summary panel in #E6E6E6 */}
      <div
        style={{ boxShadow: "-4px 10px 20px 0px #00000040" }}
        className="lg:col-span-2 bg-[#E6E6E6] text-[#333333] rounded-2xl p-6 flex flex-col justify-between"
      >
        <div>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#545454] hover:text-black transition-colors cursor-pointer mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Change service</span>
          </button>

          <p className="text-xs uppercase tracking-widest text-[#545454] font-semibold">
            Selected Service
          </p>
          <h4 className="text-2xl font-semibold text-black inter-font mt-1 leading-tight">
            {selected.label}
          </h4>
          <p className="text-sm text-[#545454] mt-3 leading-relaxed">
            {selected.hint}
          </p>
        </div>

        <div className="mt-8 pt-5 border-t border-black/10 space-y-2 text-xs text-[#545454]">
          <p className="font-semibold text-[#333333]">How it works:</p>
          <p>1. Submit your brief note on the right.</p>
          <p>2. Our legal team reviews it immediately.</p>
          <p>3. We respond directly to your email — no Briefspace sign-up needed.</p>
        </div>
      </div>

      {/* Right form card in #333333 */}
      <form
        onSubmit={onSubmit}
        style={{ boxShadow: "-4px 10px 20px 0px #00000040" }}
        className="lg:col-span-3 bg-[#333333] text-white rounded-2xl p-6 sm:p-8 space-y-4"
      >
        {error && (
          <div className="flex items-center gap-2 rounded-lg bg-red-500/20 border border-red-400/40 px-3.5 py-2.5 text-xs text-red-200">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div>
          <label className="block text-xs text-gray-200 mb-1.5">Full Name *</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="e.g. Chinedu Okafor"
            className={inputCls}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs text-gray-200 mb-1.5">Email Address *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => onChange("email", e.target.value)}
              placeholder="you@example.com"
              className={inputCls}
            />
          </div>
          <div>
            <label className="block text-xs text-gray-200 mb-1.5">Phone Number *</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => onChange("phone", e.target.value)}
              placeholder="+234 800 000 0000"
              className={inputCls}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-200 mb-1.5">How Soon Do You Need This?</label>
          <div className="grid grid-cols-3 gap-2">
            {TIMELINES.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => onChange("timeline", opt)}
                className={`py-2 px-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  timeline === opt
                    ? "bg-[#E9DFB0] text-[#333333] font-semibold"
                    : "bg-white/10 text-gray-200 hover:bg-white/20"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-200 mb-1.5">
            Tell Us What You Need *
          </label>
          <textarea
            required
            rows={4}
            value={details}
            onChange={(e) => onChange("details", e.target.value)}
            placeholder={selected.promptPlaceholder}
            className={`${inputCls} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black py-3.5 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          <Send className="w-4 h-4" />
          <span>{loading ? "Sending Request..." : "Send Request"}</span>
        </button>
      </form>
    </div>
  );
}
