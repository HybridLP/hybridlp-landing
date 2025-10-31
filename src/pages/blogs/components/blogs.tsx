import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col space-y-8 max-w-7xl   py-12">
      {/* blogs header */}
      <div className="flex flex-wrap border-b border-gray-200">
        {headerItems.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`px-4 py-2 cursor-pointer text-sm font-medium transition-colors hover:text-gray-500 hover:bg-white hover:mb-2 hover:rounded-lg ${
                idx === 0
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="group cursor-pointer"
            onClick={() => navigate(`/blogs/${post.id}`)}
          >
            {/* Blog Image */}
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay with Author Info */}
              <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <div className="bg-white/10 backdrop-blur-md   px-4 py-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex flex-col space-x-2">
                      <span className="font-medium drop-shadow-sm">
                        {post.author.name}
                      </span>
                      <span className="text-xs opacity-90 drop-shadow-sm">
                        {post.date}
                      </span>
                    </div>
                    <span className="text-xs opacity-90 drop-shadow-sm">
                      Legal Insights
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white group-hover:underline  transition-colors">
                {post.title}
              </h3>

              <p className="text-white text-sm leading-relaxed">
                {post.description}
              </p>

              <div className="flex items-center  font-medium text-sm ">
                <span>Read post</span>
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-12">
        <button className="flex items-center px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors">
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

const blogPosts = [
  {
    id: 1,
    title: "Steps to Register a Business Legally",
    description:
      "The necessary steps and everything you need to know to turn your business idea into a legally recognized enterprise in Nigeria.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=face",
    category: "Legal Insights",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    author: {
      name: "Sarah Johnson",
      role: "Senior Legal Advisor",
    },
  },
  {
    id: 2,
    title: "Steps to Register a Business Legally",
    description:
      "The necessary steps and everything you need to know to turn your business idea into a legally recognized enterprise in Nigeria.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop",
    category: "Legal Insights",
    readTime: "7 min read",
    date: "Dec 12, 2024",
    author: {
      name: "Michael Chen",
      role: "Corporate Lawyer",
    },
  },
  {
    id: 3,
    title: "Steps to Register a Business Legally",
    description:
      "The necessary steps and everything you need to know to turn your business idea into a legally recognized enterprise in Nigeria.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    category: "Legal Tech & Innovation",
    readTime: "6 min read",
    date: "Dec 10, 2024",
    author: {
      name: "Emily Rodriguez",
      role: "Legal Tech Specialist",
    },
  },
  {
    id: 4,
    title: "Steps to Register a Business Legally",
    description:
      "The necessary steps and everything you need to know to turn your business idea into a legally recognized enterprise in Nigeria.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=300&fit=crop",
    category: "Client Guides",
    readTime: "4 min read",
    date: "Dec 8, 2024",
    author: {
      name: "David Thompson",
      role: "Legal Consultant",
    },
  },
];
