import { PersonParticulars, SecretaryParticulars, CorporateAffiliate } from "../types/cacTypes";
import { StructureItem } from "../data/structures";

export interface ConglomeratePayloadParams {
  structure: StructureItem;
  businessName1: string;
  businessName2: string;
  natureOfBusiness: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  shareCapital: string;
  projectDetails: string;
  consortiumDuration: string;
  consortiumTerms: string;
  controllingInterestDetails: string;
  affiliates: CorporateAffiliate[];
  shareholders: PersonParticulars[];
  directors: PersonParticulars[];
  secretary: SecretaryParticulars;
  additionalNotes: string;
}

export function buildConglomerateSubmission(p: ConglomeratePayloadParams) {
  const isHolding = p.structure.id === "holding";
  const isConsortium = p.structure.id === "consortium";
  const affiliateLabel = isHolding ? "Subsidiary Companies" : isConsortium ? "Participating Companies" : "Associated Companies";
  const firstDirector = p.directors[0];

  return {
    type: "business_registration" as const,
    fullName: firstDirector?.fullName || p.shareholders[0]?.fullName || "",
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
      proposedIssuedShareCapital: p.shareCapital,
      projectDetails: isConsortium ? p.projectDetails : undefined,
      consortiumDuration: isConsortium ? p.consortiumDuration : undefined,
      consortiumAgreementTerms: isConsortium ? p.consortiumTerms : undefined,
      controllingInterestDetails: isHolding ? p.controllingInterestDetails : undefined,
      affiliatesType: affiliateLabel,
      affiliatesCount: p.affiliates.length,
      affiliates: p.affiliates.map((a, i) => ({
        index: i + 1,
        companyName: a.companyName,
        rcNumber: a.rcNumber,
        hasCert: !!a.incorporationCert,
        hasMemArt: !!a.memArt,
        hasStatusReport: !!a.statusReport,
        hasAnnualReturns: !!a.annualReturns,
        hasResolution: !!a.resolution,
        repName: a.repName,
        repDesignation: a.repDesignation,
      })),
      shareholdersCount: p.shareholders.length,
      shareholders: p.shareholders.map((s, i) => ({
        index: i + 1,
        fullName: s.fullName,
        sharesPercentage: s.sharesPercentage,
        idDocumentName: s.idDocument?.name,
        signatureName: s.signature?.name,
      })),
      directorsCount: p.directors.length,
      directors: p.directors.map((d, i) => ({
        index: i + 1,
        fullName: d.fullName,
        idDocumentName: d.idDocument?.name,
        signatureName: d.signature?.name,
      })),
      companySecretary: p.secretary.hasSecretary ? {
        fullName: p.secretary.fullName,
        email: p.secretary.email,
        phone: p.secretary.phone,
      } : undefined,
      additionalNotes: p.additionalNotes || undefined,
    },
  };
}
