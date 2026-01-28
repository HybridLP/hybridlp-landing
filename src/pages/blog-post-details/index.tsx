import bg from "../../assets_/landing-bg.jpg";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { articleService, BlogPost } from "../../services/articleService";
import SEO from "../../components/widgets/seo";

export default () => {
  const { slug } = useParams(); // URL should be /blogs/:slug
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPostData = async () => {
      if (!slug) return;
      setLoading(true);
      try {
        const data = await articleService.getPublicArticleBySlug(slug);
        setPost(data);

        // Fetch recent posts for sidebar
        const recent = await articleService.getPublicArticles(undefined, 3);
        setRecentPosts(recent.filter((p: any) => p.id !== data.id));
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0E0E0E] text-white">
        Loading...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0E0E0E] text-white">
        Post not found
      </div>
    );
  }

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage || "https://hybridlp.com/og-image.jpg",
    author: {
      "@type": "Person",
      name: post.publisherName || "HybridLP Team",
    },
    publisher: {
      "@type": "Organization",
      name: "HybridLP",
      logo: {
        "@type": "ImageObject",
        url: "https://hybridlp.com/hybridlp-logo.png",
      },
    },
    datePublished: post.publishDate,
    url: `https://hybridlp.com/blogs/${slug}`,
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        ogImage={post.featuredImage}
        canonical={`https://hybridlp.com/blogs/${slug}`}
        structuredData={blogPostSchema}
      />
      <div
        className="bg-cover bg-center py-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="pt-16 px-4 md:px-32">
          {/* blog details and other blogs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
            {/* Main Blog Content - Left Side */}
            <div className="lg:col-span-2">
              <article>
                {/* Blog Header */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-white mb-6">
                    {post?.title}
                  </h1>
                </div>

                {/* Featured Image */}
                <div className="mb-8">
                  <img
                    src={post.featuredImage || "/placeholder-image.jpg"}
                    alt={post.title}
                    className="w-full h-48 sm:h-64 object-cover rounded-lg"
                  />
                  <div className="flex items-center text-white/80 text-sm my-4">
                    <span>{post.publisherName || "Unknown"}</span>
                    <span className="mx-2">•</span>
                    <span>
                      {new Date(post.publishDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="prose prose-invert max-w-none mb-4">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {post?.content || ""}
                  </ReactMarkdown>
                </div>

                {/* Blog Category Tag */}
                <div className="px-4 py-2 rounded-lg w-fit border border-white">
                  <span className="inline-block px-4 py-2 rounded-full text-white text-sm font-medium">
                    {post.categories?.[0] || "Legal Insights"}
                  </span>
                </div>
              </article>
            </div>

            {/* Recent Blog Posts - Right Sidebar */}
            <div className="lg:col-span-1">
              <div className=" py-6  sticky top-8 ">
                <h2 className="text-xl font-semibold text-white mb-6">
                  Recent blog posts
                </h2>

                <div className="space-y-6">
                  {Array.isArray(recentPosts) && recentPosts.length > 0 ? (
                    recentPosts.map((post, index) => (
                      <NavLink
                        to={`/blogs/${post.slug}`} // Using slug
                        key={index}
                        className="group cursor-pointer "
                      >
                        <div className="flex space-x-4 mb-4">
                          {/* Post Image */}
                          <div className="flex-shrink-0">
                            <img
                              src={
                                post.featuredImage || "/placeholder-image.jpg"
                              }
                              alt={post.title}
                              className="size-25 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                            />
                          </div>

                          {/* Post Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center text-white/60 text-xs mb-2">
                              <span>{post.publisherName}</span>
                              <span className="mx-1">•</span>
                              <span>
                                {new Date(
                                  post.publishDate,
                                ).toLocaleDateString()}
                              </span>
                            </div>

                            <h3 className="text-white font-medium text-sm leading-tight mb-2 group-hover:text-[#B89900] transition-colors">
                              {post.title}
                            </h3>

                            <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    ))
                  ) : (
                    <p className="text-white/40 text-sm italic">
                      No recent posts available.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export const recentPosts = [
  {
    id: 1,
    title: "Steps to Register a Business Legally",
    excerpt: "The necessary steps and everything you need to...",
    author: "F. James",
    date: "10. Sept. 2025",
    content: "",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=150&fit=crop",
  },
  {
    id: 2,
    title: "How to determine taxable income and tax payable",
    excerpt:
      "https://www.paidhr.com/blog/understanding-tax-computation-in-nigeria-a-step-by-step-guide",
    author: "",
    date: "10. Sept. 2025",
    content: `
    *Step by Step Process to Compute Taxable Income and Tax Payable*
1. Determine Your Gross Annual Income

This is the total annual income before any deductions (e.g., salary, allowances, bonuses).

Ascertain your employment income figures and sum them to get Gross Annual Income.
Example: Salary + allowances + incentive payments = Gross Annual Income.

2. Enter or Calculate Statutory Deductions

These are compulsory or allowable contributions that reduce taxable income. On the PIT Calculator, you would enter values for:  ￼
	•	Pension Contributions (Annual) – the annual sum remitted to pension (e.g. 8% of salary).
	•	National Housing Fund (NHF) Contribution – voluntary or mandatory amount contributed.
	•	NHIS Contribution – health insurance contributions for you/family where applicable.
	•	Interest on Loan for Owner-Occupied House – deductible where valid proof exists.
	•	Life Insurance Premium – for you and spouse (declared with documentation).
	•	Annual Rent – actual rent paid and valid for relief (subject to lawful limits). ￼

Net Income After Deductions =
Gross Annual Income – (Pension + NHF + NHIS + Loan Interest + Life Insurance + Rent)

3. Calculate Taxable Income

Taxable Income is the amount of income subject to tax after all allowable deductions.

Formula:
Taxable Income = Gross Annual Income
        – Statutory Deductions and Reliefs

Under the calculator, the above deductions are subtracted to determine the base upon which the progressive tax rates are applied.  ￼

Note on Minimum Wage / Basic Exemption: Individuals earning below the national minimum wage threshold or below the set tax-free band (₦800,000 under the new law as shown) may be exempt from PIT altogether.  ￼

4. Apply the Applicable Tax Rates

Once you have Taxable Income, apply the progressive tax band rates.

Under the tax laws:

Taxable Income Segment	Rate
First ₦800,000	0%
Next ₦2,200,000	15%
Next ₦9,000,000	18%
Next ₦13,000,000	21%
Next ₦25,000,000	23%
Above ₦50,000,000	25%
These bands reflect the new law’s progressive system as embedded in the PIT calculator.  ￼	

	1.	Start at the first band:
Calculate tax at the given rate for the first ₦800,000 of Taxable Income; if Taxable Income ≤ ₦800,000, tax here is zero.
	2.	Move sequentially up bands:
For the next balance of taxable income, apply the next rate, and so on until the entire figure is covered.

Illustration (simplified):
If Taxable Income = ₦4,000,000:
• 0% on first ₦800,000 = ₦0
• 15% on the next ₦2,200,000 = ₦330,000
• 18% on ₦1,000,000 (remaining) = ₦180,000
Total Tax Payable = ₦330,000 + ₦180,000 = ₦510,000

6. Monthly and Annual Tax Payable

The calculator will typically show:
Annual Tax Payable, the total due for the year based on the bands.
Monthly Tax Payable, annual divided by 12 (standard PAYE calculation).  ￼

You can confirm monthly figure by:
Monthly TAX PAYE = Annual Tax Payable ÷ 12

Practical Tips for easy tax assessments
	•	Documentation: Retain evidence of deductions (e.g., pension receipts, insurance certificates, rent receipts) as required by the tax authorities.
	•	Minimum Threshold: Under the new regime, income up to a defined basic threshold (e.g., ₦800,000) may be exempt; this protects minimum wage earners from tax.  ￼
	•	PAYE vs Self-Assessment: Employed individuals usually have PIT deducted by the employer under PAYE; self-employed persons must compute and remit via self-assessment.  ￼
    `,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=150&fit=crop",
  },
];
