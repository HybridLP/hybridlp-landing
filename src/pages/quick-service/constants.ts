export interface QuickServiceOption {
  id: string;
  label: string;
  hint: string;
  promptPlaceholder: string;
  href?: string;
}

export const QUICK_SERVICES: QuickServiceOption[] = [
  {
    id: "register_business",
    label: "Register a Business",
    hint: "Full CAC registration for Enterprises, Ltds, NGOs, Partnerships & more.",
    promptPlaceholder: "",
    href: "/register-business",
  },
  {
    id: "request_legal_drafting",
    label: "Request Legal Drafting",
    hint: "Custom contracts, NDAs, deeds, and corporate instruments.",
    promptPlaceholder: "",
    href: "/request-legal-drafting",
  },
  {
    id: "vet_agreement",
    label: "Vet Agreement",
    hint: "Spot hidden risks and unfavorable clauses before signing.",
    promptPlaceholder: "What type of agreement is it, who are the parties, and what is your signing deadline?",
  },
  {
    id: "agreements",
    label: "Agreements",
    hint: "Custom contracts, NDAs, MOUs, or service agreements.",
    promptPlaceholder: "Describe the transaction or relationship this agreement should cover and key terms...",
  },
  {
    id: "letters_notices_petitions",
    label: "Letters / Notices / Petitions",
    hint: "Formal demand letters, quit notices, or legal petitions.",
    promptPlaceholder: "Who is the recipient, what happened, and what outcome or timeline are you demanding?",
  },
  {
    id: "verify_company_status",
    label: "Verify a Company Status",
    hint: "CAC due diligence & active standing check.",
    promptPlaceholder: "Share the company name and RC/BN number (if available) and why you are verifying...",
  },
  {
    id: "file_annual_returns",
    label: "File Annual Returns",
    hint: "Keep your CAC corporate records compliant & penalty-free.",
    promptPlaceholder: "Share your company name, RC/BN number, and the years pending if known...",
  },
  {
    id: "confirm_tax_liability",
    label: "Confirm Tax Liability",
    hint: "Clarity on corporate, VAT, or personal tax obligations.",
    promptPlaceholder: "Describe your business/income structure and the specific tax question or notice received...",
  },
  {
    id: "court_appearance",
    label: "Court Appearance",
    hint: "Prompt legal representation for an upcoming court date.",
    promptPlaceholder: "State the court location, hearing date, suit number (if any), and brief background...",
  },
  {
    id: "attend_meeting",
    label: "Attend Meeting",
    hint: "A practitioner in the room for negotiations or board meetings.",
    promptPlaceholder: "Share the meeting date, location/virtual link context, and what is being negotiated...",
  },
  {
    id: "review_agreement",
    label: "Review Agreement",
    hint: "Clause-by-clause review with clear redline recommendations.",
    promptPlaceholder: "Describe the agreement and any specific clauses or concerns you want us to focus on...",
  },
  {
    id: "legal_opinion",
    label: "Legal Opinion",
    hint: "Structured written legal advice on a specific question.",
    promptPlaceholder: "Outline the facts and the exact legal question(s) you need our written opinion on...",
  },
];
