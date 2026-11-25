import { PersonParticulars, FileMeta } from "../types/cacTypes";
import { StructureItem } from "../data/structures";

export interface TrusteePayloadParams {
  structure: StructureItem;
  orgName1: string;
  orgName2: string;
  orgName3: string;
  category: string;
  aimsAndObjectives: string;
  dateEstablished: string;
  address: string;
  phone: string;
  email: string;
  chairman: PersonParticulars;
  secretary: PersonParticulars;
  trustees: PersonParticulars[];
  fundingSources: string;
  constitutionFile: FileMeta | null;
  additionalNotes: string;
}

export function buildTrusteeSubmission(p: TrusteePayloadParams) {
  return {
    type: "business_registration" as const,
    fullName: p.chairman.fullName || p.trustees[0]?.fullName || "",
    email: p.chairman.email || p.email,
    phone: p.chairman.phone || p.phone,
    subject: `Incorporated Trustees: ${p.orgName1}`,
    details: p.aimsAndObjectives,
    metadata: {
      structure: "Incorporated Trustees (IT)",
      structureId: "it",
      proposedOrgName1: p.orgName1,
      proposedOrgName2: p.orgName2,
      proposedOrgName3: p.orgName3,
      organisationCategory: p.category,
      aimsAndObjectives: p.aimsAndObjectives,
      dateOfEstablishment: p.dateEstablished,
      registeredOfficeAddress: p.address,
      organisationPhone: p.phone,
      organisationEmail: p.email,
      chairman: {
        fullName: p.chairman.fullName,
        dateOfBirth: p.chairman.dateOfBirth,
        residentialAddress: p.chairman.residentialAddress,
        nationality: p.chairman.nationality,
        occupation: p.chairman.occupation,
        email: p.chairman.email,
        phone: p.chairman.phone,
        signatureName: p.chairman.signature?.name,
        signatureDataUrl: p.chairman.signature?.dataUrl,
      },
      secretary: {
        fullName: p.secretary.fullName,
        dateOfBirth: p.secretary.dateOfBirth,
        residentialAddress: p.secretary.residentialAddress,
        nationality: p.secretary.nationality,
        occupation: p.secretary.occupation,
        email: p.secretary.email,
        phone: p.secretary.phone,
        signatureName: p.secretary.signature?.name,
        signatureDataUrl: p.secretary.signature?.dataUrl,
      },
      trusteesCount: p.trustees.length,
      trustees: p.trustees.map((t, i) => ({
        index: i + 1,
        fullName: t.fullName,
        dateOfBirth: t.dateOfBirth,
        residentialAddress: t.residentialAddress,
        nationality: t.nationality,
        occupation: t.occupation,
        email: t.email,
        phone: t.phone,
        passportPhotoName: t.passportPhoto?.name,
        passportPhotoDataUrl: t.passportPhoto?.dataUrl,
        idDocumentName: t.idDocument?.name,
        idDocumentDataUrl: t.idDocument?.dataUrl,
        signatureName: t.signature?.name,
        signatureDataUrl: t.signature?.dataUrl,
      })),
      proposedSourcesOfFunding: p.fundingSources,
      constitutionFileName: p.constitutionFile?.name,
      constitutionFileDataUrl: p.constitutionFile?.dataUrl,
      additionalNotes: p.additionalNotes || undefined,
    },
  };
}
