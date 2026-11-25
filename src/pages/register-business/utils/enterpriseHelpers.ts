import { PartnerData } from "../components/PartnerFields";

export const createDefaultPartner = (): PartnerData => ({
  fullName: "",
  dateOfBirth: "",
  gender: "Male",
  nationality: "Nigerian",
  residentialAddress: "",
  personalEmail: "",
  personalPhone: "",
  occupation: "",
  nin: "",
  idDocument: null,
  passportPhoto: null,
  signature: null,
});

export interface EnterprisePayloadParams {
  businessName1: string;
  businessName2: string;
  proprietorshipType: string;
  natureOfBusiness: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  additionalInfo: string;
  partners: PartnerData[];
}

export function buildEnterpriseSubmission(params: EnterprisePayloadParams) {
  const {
    businessName1,
    businessName2,
    proprietorshipType,
    natureOfBusiness,
    businessAddress,
    businessPhone,
    businessEmail,
    additionalInfo,
    partners,
  } = params;

  const firstPartner = partners[0];

  return {
    type: "business_registration" as const,
    fullName: firstPartner?.fullName || "",
    email: firstPartner?.personalEmail || businessEmail,
    phone: firstPartner?.personalPhone || businessPhone,
    subject: `Enterprise / Business Name: ${businessName1}`,
    details: natureOfBusiness,
    metadata: {
      structure: "Enterprise / Business Name",
      proprietorshipType,
      proposedBusinessName1: businessName1,
      proposedBusinessName2: businessName2,
      natureOfBusiness,
      businessAddress,
      businessPhone,
      businessEmail,
      partnersCount: partners.length,
      partners: partners.map((p, i) => ({
        partnerIndex: i + 1,
        fullName: p.fullName,
        dateOfBirth: p.dateOfBirth,
        gender: p.gender,
        nationality: p.nationality,
        residentialAddress: p.residentialAddress,
        personalEmail: p.personalEmail,
        personalPhone: p.personalPhone,
        occupation: p.occupation,
        nin: p.nin,
        hasIdDocument: !!p.idDocument,
        idDocumentName: p.idDocument?.name,
        idDocumentDataUrl: p.idDocument?.dataUrl,
        passportPhotoName: p.passportPhoto?.name,
        passportPhotoDataUrl: p.passportPhoto?.dataUrl,
        signatureName: p.signature?.name,
        signatureDataUrl: p.signature?.dataUrl,
      })),
      additionalInfo: additionalInfo || undefined,
    },
  };
}
