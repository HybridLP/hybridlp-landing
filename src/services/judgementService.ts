import api from "../utils/api";

export interface Judgement {
  id: string;
  citation: string;
  slug: string;
  judgement: string;
  link?: string;
  status: "draft" | "published";
  publishDate: string;
  tags: string[];
}

export const getPublicJudgements = async (limit = 10, offset = 0) => {
  // API returns { count: number, rows: Judgement[] } because of findAndCountAll
  const response = await api.get<{ rows: Judgement[]; count: number }>(
    "/judgements",
    {
      params: {
        status: "published",
        visibility: "public",
        limit,
        offset,
      },
    }
  );
  return response.data.rows;
};
