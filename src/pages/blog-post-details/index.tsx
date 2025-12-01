import Hero from "../home/components/hero";
import bg from "../../assets_/landing-bg.jpg";

export default () => {
  return (
    <div
      className="bg-cover bg-center px-[7%] py-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Hero />
      <main className="pt-16">
        {/* blog details and other blogs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
          {/* Main Blog Content - Left Side */}
          <div className="lg:col-span-2">
            <article >
              {/* Blog Header */}
              <div className="mb-6">
               
                <h1 className="text-3xl font-bold text-white mb-6">
                  Steps to Register a Business Legally
                </h1>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
                  alt="Business registration"
                  className="w-full h-64 object-cover rounded-lg"
                />
                 <div className="flex items-center text-white/80 text-sm my-4">
                  <span>A. Muhammed</span>
                  <span className="mx-2">•</span>
                  <span>20. Oct 2025</span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="prose prose-invert max-w-none">
                <p className="text-white/90 leading-relaxed mb-6">
                  The necessary steps and everything you need to know to turn
                  your business idea into a legally recognized enterprise in
                  Nigeria. Tincidunt eget nullam non nisi est sit amet facilisis
                  magna etiam tempor orci eu lobortis elementum nibh tellus
                  molestie nunc non cursus consectetur sodales. ex, convallis,
                  sed fringilla cursus non, ultrices odio faucibus placerat
                  Nullam Nam Praesent orci enim, id cursus ultrices elit.
                </p>

                <p className="text-white/90 leading-relaxed mb-6">
                  Donec nec lorem. Cras elit. diam varius tincidunt ac sed risus
                  at. Nullam lorem, ipsum hendrerit ex Morbi adipiscing
                  placerat, sollicitudin, tincidunt sed tincidunt lobortis,
                  efficitur, vitae sodales, nec cursus vel viverra Morbi sapien.
                </p>

                <p className="text-white/90 leading-relaxed mb-8">
                  nec faucibus ex tempor luctus vel non viverra elit amet, ipsum
                  at Donec Sed luctus quam vulputate In dui scelerisque dolor ac
                  non, dui Donec massa In Sed est id orci malesuada lacus, odio
                  orci venenatis varius porta lacus, ex et ex nisl.
                </p>
              </div>

              {/* Blog Category Tag */}
              <div className="px-4 py-2 rounded-lg w-fit border border-white">
                <span className="inline-block px-4 py-2 rounded-full text-white text-sm font-medium">
                  Legal Insights
                </span>
              </div>
            </article>
          </div>

          {/* Recent Blog Posts - Right Sidebar */}
          <div className="lg:col-span-1">
            <div className=" py-6  sticky top-8">
              <h2 className="text-xl font-semibold text-white mb-6">
                Recent blog posts
              </h2>

              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex space-x-4">
                      {/* Post Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="size-25 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                        />
                      </div>

                      {/* Post Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center text-white/60 text-xs mb-2">
                          <span>{post.author}</span>
                          <span className="mx-1">•</span>
                          <span>{post.date}</span>
                        </div>

                        <h3 className="text-white font-medium text-sm leading-tight mb-2 group-hover:text-[#B89900] transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const recentPosts = [
  {
    id: 1,
    title: "Steps to Register a Business Legally",
    excerpt: "The necessary steps and everything you need to...",
    author: "F. James",
    date: "10. Sept. 2025",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=150&fit=crop",
  },
  {
    id: 2,
    title: "Steps to Register a Business Legally",
    excerpt: "The necessary steps and everything you need to...",
    author: "F. James",
    date: "10. Sept. 2025",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop",
  },
  {
    id: 3,
    title: "Steps to Register a Business Legally",
    excerpt: "The necessary steps and everything you need to...",
    author: "F. James",
    date: "10. Sept. 2025",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&h=150&fit=crop",
  },
  {
    id: 4,
    title: "Steps to Register a Business Legally",
    excerpt: "The necessary steps and everything you need to...",
    author: "F. James",
    date: "10. Sept. 2025",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=150&fit=crop",
  },
];
