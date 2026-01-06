import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { articleService, BlogPost } from "../../../services/articleService";

export default () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("View All");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await articleService.getPublicArticles(
          activeCategory === "View All" ? undefined : activeCategory
        );
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [activeCategory]);

  return (
    <div className="flex flex-col space-y-6 sm:space-y-8 max-w-7xl py-8 sm:py-12">
      {/* blogs header */}
      <div className="flex flex-nowrap overflow-x-auto border-b border-[#E9DFB0] scrollbar-hide pb-0 relative">
        {headerItems.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => setActiveCategory(item.label)}
              className={`px-3 sm:px-4 py-2 cursor-pointer text-xs sm:text-sm font-medium transition-colors hover:text-gray-500 hover:bg-white hover:mb-2 hover:rounded-lg whitespace-nowrap  ${
                activeCategory === item.label
                  ? "text-white border-b-2 border-[#B89900]"
                  : "text-[#B0B0B0]"
              }`}
            >
              {item.label}
            </div>
          );
        })}
      </div>

      {/* blogs grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {loading ? (
          <div className="col-span-full text-center text-white">Loading...</div>
        ) : (
          posts.map((post, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
              onClick={() => navigate(`/blogs/${post.slug}`)} // Using Slug
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={post.featuredImage || "/placeholder-image.jpg"}
                  alt={post.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay with Author (Publisher) Info */}
                <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <div className="bg-[#706F6F4D]  px-4 py-4">
                    <div className="flex items-center justify-between text-white text-xs sm:text-sm">
                      <div className="flex flex-col space-x-2">
                        <span className="font-medium drop-shadow-sm">
                          {post.publisherName || "Unknown"}
                        </span>
                        <span className="text-xs opacity-90 drop-shadow-sm">
                          {new Date(post.publishDate).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="text-xs opacity-90 drop-shadow-sm">
                        {post.categories?.[0] || "Legal Insights"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:underline transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-white/90 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center font-medium text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors">
                  <span>Read post</span>
                  <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8 sm:mt-12">
        <button className="flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white border border-gray-300 rounded-full text-gray-700 font-medium text-sm sm:text-base hover:bg-gray-50 transition-colors">
          <svg
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          Load more
        </button>
      </div>
    </div>
  );
};

const headerItems = [
  {
    label: "View All",
  },
  {
    label: "Legal Insights",
  },
  {
    label: "Legal Tech & Innovation",
  },
  {
    label: "Client Guides",
  },
  {
    label: "Professional Development",
  },
  {
    label: "Case studies",
  },
  {
    label: "HLP updates",
  },
];
