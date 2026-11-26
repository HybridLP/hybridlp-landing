import api from "../utils/api";

export interface ServiceRequestPayload {
  type: "legal_drafting" | "business_registration" | "consultation" | "quick_service";
  fullName: string;
  email: string;
  phone: string;
  subject?: string;
  details?: string;
  metadata?: Record<string, any>;
}

export interface ServiceRequestResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

export const serviceRequestService = {
  submit: async (payload: ServiceRequestPayload): Promise<ServiceRequestResponse> => {
    const response = await api.post<ServiceRequestResponse>("/service-requests", payload);
    return response.data;
  },
};
