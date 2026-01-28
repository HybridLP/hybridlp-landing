import Hero from "./components/hero";
import bg from "../../assets_/landing-bg.jpg";
import Blogs from "./components/blogs";
import SEO from "../../components/widgets/seo";

export default () => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "HybridLP Legal Blogs",
    description: "Expert legal insights, resources, and advice.",
    url: "https://hybridlp.com/blogs",
    publisher: {
      "@type": "Organization",
      name: "HybridLP",
      logo: "https://hybridlp.com/hybridlp-logo.png",
    },
  };

  return (
    <>
      <SEO
        title="Legal Blogs & Resources"
        description="Stay updated with the latest legal insights, case studies, and professional advice from HybridLP's expert legal team."
        canonical="https://hybridlp.com/blogs"
        structuredData={blogSchema}
      />
      <div
        className="bg-cover bg-center px-4 sm:px-6 md:px-8 lg:px-[7%] py-6 sm:py-8 md:py-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Hero />
        <main>
          <Blogs />
        </main>
      </div>
    </>
  );
};
