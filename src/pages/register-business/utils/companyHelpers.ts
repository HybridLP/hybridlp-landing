import { PersonParticulars, SecretaryParticulars, CorporateAffiliate } from "../types/cacTypes";
import { StructureItem } from "../data/structures";

export const createDefaultPerson = (): PersonParticulars => ({
  fullName: "",
  dateOfBirth: "",
  residentialAddress: "",
  nationality: "Nigerian",
  occupation: "",
  email: "",
  phone: "",
  sharesPercentage: "50%",
  sharesClass: "Ordinary",
  capitalContribution: "",
  profitSharingPercentage: "50%",
  passportPhoto: null,
  idDocument: null,
  signature: null,
});

export const createDefaultSecretary = (): SecretaryParticulars => ({
  hasSecretary: false,
  fullName: "",
  dateOfBirth: "",
  address: "",
  nationality: "Nigerian",
  occupation: "Legal Practitioner",
  professionalQualification: "",
  email: "",
  phone: "",
  signature: null,
});

export const createDefaultCorporateAffiliate = (): CorporateAffiliate => ({
  companyName: "",
  rcNumber: "",
  incorporationCert: null,
  memArt: null,
  statusReport: null,
  annualReturns: null,
  resolution: null,
  translation: null,
  repName: "",
  repDesignation: "",
  repEmail: "",
  repPhone: "",
});

export interface CompanySharesPayloadParams {
  structure: StructureItem;
  businessName1: string;
  businessName2: string;
  natureOfBusiness: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  shareCapital: string;
  fundingSource: string;
  shareholders: PersonParticulars[];
  directors: PersonParticulars[];
  secretary: SecretaryParticulars;
  additionalNotes: string;
}

export function buildCompanySharesSubmission(p: CompanySharesPayloadParams) {
  const isPLC = p.structure.id === "plc";
  const isGuarantee = p.structure.id === "guarantee";
  const firstDirector = p.directors[0];
  const firstShareholder = p.shareholders[0];

  return {
    type: "business_registration" as const,
    fullName: firstDirector?.fullName || firstShareholder?.fullName || "",
    email: firstDirector?.email || p.businessEmail,
    phone: firstDirector?.phone || p.businessPhone,
    subject: `${p.structure.shortName}: ${p.businessName1}`,
    details: p.natureOfBusiness,
    metadata: {
      structure: p.structure.title,
      structureId: p.structure.id,
      proposedBusinessName1: p.businessName1,
      proposedBusinessName2: p.businessName2,
      natureOfBusiness: p.natureOfBusiness,
      registeredOfficeAddress: p.businessAddress,
      companyPhone: p.businessPhone,
      companyEmail: p.businessEmail,
      proposedIssuedShareCapital: !isGuarantee ? p.shareCapital : undefined,
      proposedSourceOfFunding: isGuarantee ? p.fundingSource : undefined,
      shareholdersCount: p.shareholders.length,
      shareholders: p.shareholders.map((s, i) => ({
        index: i + 1,
        fullName: s.fullName,
        dateOfBirth: s.dateOfBirth,
        residentialAddress: s.residentialAddress,
        nationality: s.nationality,
        occupation: s.occupation,
        email: s.email,
        phone: s.phone,
        sharesPercentage: s.sharesPercentage,
        sharesClass: s.sharesClass,
        idDocumentName: s.idDocument?.name,
        idDocumentDataUrl: s.idDocument?.dataUrl,
        signatureName: s.signature?.name,
        signatureDataUrl: s.signature?.dataUrl,
      })),
      directorsCount: p.directors.length,
      directors: p.directors.map((d, i) => ({
        index: i + 1,
        fullName: d.fullName,
        dateOfBirth: d.dateOfBirth,
        residentialAddress: d.residentialAddress,
        nationality: d.nationality,
        occupation: d.occupation,
        email: d.email,
        phone: d.phone,
        idDocumentName: d.idDocument?.name,
        idDocumentDataUrl: d.idDocument?.dataUrl,
        signatureName: d.signature?.name,
        signatureDataUrl: d.signature?.dataUrl,
      })),
      companySecretary: p.secretary.hasSecretary || isPLC ? {
        fullName: p.secretary.fullName,
        dateOfBirth: p.secretary.dateOfBirth,
        address: p.secretary.address,
        nationality: p.secretary.nationality,
        occupation: p.secretary.occupation,
        professionalQualification: p.secretary.professionalQualification,
        email: p.secretary.email,
        phone: p.secretary.phone,
        signatureName: p.secretary.signature?.name,
        signatureDataUrl: p.secretary.signature?.dataUrl,
      } : undefined,
      additionalNotes: p.additionalNotes || undefined,
    },
  };
}
