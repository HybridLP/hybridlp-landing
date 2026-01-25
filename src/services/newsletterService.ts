import api from "../utils/api";

export const newsletterService = {
  subscribe: async (email: string) => {
    const response = await api.post("/newsletter/subscribe", { email });
    return response.data;
  },
};
