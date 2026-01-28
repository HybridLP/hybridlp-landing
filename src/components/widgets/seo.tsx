import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "https://hybridlp.com/og-image.jpg",
  twitterCard = "summary_large_image",
  structuredData,
}) => {
  const siteTitle =
    "HybridLP - Your Legal Powerhouse | Digital Law Office Platform";
  const defaultDescription =
    "Access expert legal support without delays. Manage & monitor case progress, collaborate with seasoned professionals in one secure, intelligent digital law office.";

  const fullTitle = title ? `${title} | HybridLP` : siteTitle;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || "https://hybridlp.com/"} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {Array.isArray(structuredData)
            ? JSON.stringify(structuredData)
            : JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
