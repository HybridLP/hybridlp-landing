export interface FileMeta {
  name: string;
  size: number;
  dataUrl: string;
}

export interface PersonParticulars {
  id?: string;
  fullName: string;
  dateOfBirth: string;
  residentialAddress: string;
  nationality: string;
  occupation: string;
  email: string;
  phone: string;
  countryOfResidence?: string;
  sharesPercentage?: string;
  sharesClass?: string;
  capitalContribution?: string;
  profitSharingPercentage?: string;
  designation?: string;
  passportPhoto?: FileMeta | null;
  idDocument?: FileMeta | null;
  signature?: FileMeta | null;
}

export interface SecretaryParticulars {
  hasSecretary: boolean;
  fullName: string;
  dateOfBirth: string;
  address: string;
  nationality: string;
  occupation: string;
  professionalQualification?: string;
  email: string;
  phone: string;
  signature?: FileMeta | null;
}

export interface CorporateAffiliate {
  id?: string;
  companyName: string;
  rcNumber?: string;
  incorporationCert?: FileMeta | null;
  memArt?: FileMeta | null;
  statusReport?: FileMeta | null;
  annualReturns?: FileMeta | null;
  resolution?: FileMeta | null;
  translation?: FileMeta | null;
  repName?: string;
  repDateOfBirth?: string;
  repAddress?: string;
  repNationality?: string;
  repOccupation?: string;
  repDesignation?: string;
  repEmail?: string;
  repPhone?: string;
  repId?: FileMeta | null;
  repSignature?: FileMeta | null;
}
