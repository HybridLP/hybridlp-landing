import api from "../utils/api";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  featuredImage: string;
  publishDate: string;
  publisherName: string;
  categories: string[];
  tags: string[];
}

export const articleService = {
  getPublicArticles: async (
    category?: string,
    limit?: number,
    offset?: number
  ) => {
    const params: any = {};
    if (category) params.category = category;
    if (limit) params.limit = limit;
    if (offset) params.offset = offset;

    const response = await api.get("/articles/public", { params });
    // Handle both { count, rows } format if simple array is not returned
    if (response.data && response.data.rows) {
      return response.data.rows;
    }
    return response.data;
  },

  getPublicArticleBySlug: async (slug: string) => {
    const response = await api.get(`/articles/public/${slug}`);
    return response.data;
  },
};
