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
    offset?: number,
  ) => {
    const params: any = {};
    if (category) params.category = category;
    if (limit) params.limit = limit;
    if (offset) params.offset = offset;

    try {
      const response = await api.get("/articles/public", { params });
      // Handle { count, rows } format from Sequelize findAndCountAll
      if (response.data && Array.isArray(response.data.rows)) {
        return response.data.rows;
      }
      // Handle simple array response
      if (Array.isArray(response.data)) {
        return response.data;
      }
      // Return empty array for any other data format
      return [];
    } catch (error) {
      console.error("articleService.getPublicArticles error:", error);
      return [];
    }
  },

  getPublicArticleBySlug: async (slug: string) => {
    const response = await api.get(`/articles/public/${slug}`);
    return response.data;
  },
};
