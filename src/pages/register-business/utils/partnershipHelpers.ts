import { PersonParticulars, CorporateAffiliate } from "../types/cacTypes";
import { StructureItem } from "../data/structures";

export interface PartnershipPayloadParams {
  structure: StructureItem;
  businessName1: string;
  businessName2: string;
  natureOfBusiness: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  commencementDate: string;
  duration: string;
  agreementTerms: string;
  generalPartners: PersonParticulars[];
  secondaryPartners: PersonParticulars[];
  corporatePartners: CorporateAffiliate[];
  additionalNotes: string;
}

export function buildPartnershipSubmission(p: PartnershipPayloadParams) {
  const isLLP = p.structure.id === "llp";
  const firstPartner = p.generalPartners[0];

  return {
    type: "business_registration" as const,
    fullName: firstPartner?.fullName || "",
    email: firstPartner?.email || p.businessEmail,
    phone: firstPartner?.phone || p.businessPhone,
    subject: `${p.structure.shortName}: ${p.businessName1}`,
    details: p.natureOfBusiness,
    metadata: {
      structure: p.structure.title,
      structureId: p.structure.id,
      proposedPartnershipName1: p.businessName1,
      proposedPartnershipName2: p.businessName2,
      natureOfBusiness: p.natureOfBusiness,
      principalBusinessAddress: p.businessAddress,
      partnershipPhone: p.businessPhone,
      partnershipEmail: p.businessEmail,
      proposedCommencementDate: p.commencementDate,
      proposedDuration: p.duration || undefined,
      agreementTermsAndConditions: p.agreementTerms || undefined,
      generalPartnersCount: p.generalPartners.length,
      generalPartners: p.generalPartners.map((gp, i) => ({
        index: i + 1,
        fullName: gp.fullName,
        dateOfBirth: gp.dateOfBirth,
        residentialAddress: gp.residentialAddress,
        nationality: gp.nationality,
        occupation: gp.occupation,
        email: gp.email,
        phone: gp.phone,
        capitalContribution: gp.capitalContribution,
        agreedProfitSharingPercentage: gp.profitSharingPercentage,
        idDocumentName: gp.idDocument?.name,
        idDocumentDataUrl: gp.idDocument?.dataUrl,
        signatureName: gp.signature?.name,
        signatureDataUrl: gp.signature?.dataUrl,
      })),
      secondaryPartnersRole: isLLP ? "Designated Partners" : "Limited Partners",
      secondaryPartnersCount: p.secondaryPartners.length,
      secondaryPartners: p.secondaryPartners.map((sp, i) => ({
        index: i + 1,
        fullName: sp.fullName,
        dateOfBirth: sp.dateOfBirth,
        residentialAddress: sp.residentialAddress,
        nationality: sp.nationality,
        occupation: sp.occupation,
        email: sp.email,
        phone: sp.phone,
        capitalContribution: sp.capitalContribution,
        agreedProfitSharingPercentage: sp.profitSharingPercentage,
        idDocumentName: sp.idDocument?.name,
        idDocumentDataUrl: sp.idDocument?.dataUrl,
        signatureName: sp.signature?.name,
        signatureDataUrl: sp.signature?.dataUrl,
      })),
      corporatePartnersCount: p.corporatePartners.length,
      corporatePartners: p.corporatePartners.map((cp, i) => ({
        index: i + 1,
        companyName: cp.companyName,
        rcNumber: cp.rcNumber,
        hasCert: !!cp.incorporationCert,
        hasMemArt: !!cp.memArt,
        hasResolution: !!cp.resolution,
      })),
      additionalNotes: p.additionalNotes || undefined,
    },
  };
}
