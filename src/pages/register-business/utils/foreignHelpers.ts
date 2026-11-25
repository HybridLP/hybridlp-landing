import { PersonParticulars, SecretaryParticulars, CorporateAffiliate } from "../types/cacTypes";
import { StructureItem } from "../data/structures";

export interface ForeignPayloadParams {
  structure: StructureItem;
  businessName1: string;
  businessName2: string;
  natureOfBusiness: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  shareCapital: string;
  nigerianShareholders: PersonParticulars[];
  foreignShareholders: PersonParticulars[];
  foreignCorporates: CorporateAffiliate[];
  directors: PersonParticulars[];
  secretary: SecretaryParticulars;
  additionalNotes: string;
}

export function buildForeignSubmission(p: ForeignPayloadParams) {
  const firstDirector = p.directors[0];

  return {
    type: "business_registration" as const,
    fullName: firstDirector?.fullName || p.nigerianShareholders[0]?.fullName || p.foreignShareholders[0]?.fullName || "",
    email: firstDirector?.email || p.businessEmail,
    phone: firstDirector?.phone || p.businessPhone,
    subject: `Foreign Participation Company: ${p.businessName1}`,
    details: p.natureOfBusiness,
    metadata: {
      structure: "Company with Foreign Participation",
      structureId: "foreign",
      proposedBusinessName1: p.businessName1,
      proposedBusinessName2: p.businessName2,
      natureOfBusiness: p.natureOfBusiness,
      registeredOfficeInNigeria: p.businessAddress,
      companyPhone: p.businessPhone,
      companyEmail: p.businessEmail,
      proposedIssuedShareCapital: p.shareCapital,
      nigerianShareholdersCount: p.nigerianShareholders.length,
      nigerianShareholders: p.nigerianShareholders.map((ns, i) => ({
        index: i + 1,
        fullName: ns.fullName,
        sharesPercentage: ns.sharesPercentage,
        idDocumentName: ns.idDocument?.name,
        signatureName: ns.signature?.name,
      })),
      foreignIndividualShareholdersCount: p.foreignShareholders.length,
      foreignIndividualShareholders: p.foreignShareholders.map((fs, i) => ({
        index: i + 1,
        fullName: fs.fullName,
        countryOfResidence: fs.countryOfResidence,
        sharesPercentage: fs.sharesPercentage,
        internationalPassportName: fs.idDocument?.name,
        signatureName: fs.signature?.name,
      })),
      foreignCorporateShareholdersCount: p.foreignCorporates.length,
      foreignCorporateShareholders: p.foreignCorporates.map((fc, i) => ({
        index: i + 1,
        companyName: fc.companyName,
        rcNumber: fc.rcNumber,
        hasCert: !!fc.incorporationCert,
        hasMemArt: !!fc.memArt,
        hasResolution: !!fc.resolution,
        hasTranslation: !!fc.translation,
        repName: fc.repName,
      })),
      directorsCount: p.directors.length,
      directors: p.directors.map((d, i) => ({
        index: i + 1,
        fullName: d.fullName,
        countryOfResidence: d.countryOfResidence,
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
