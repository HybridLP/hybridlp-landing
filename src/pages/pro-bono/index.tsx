import { useEffect, useState } from "react";
import Hero from "./components/hero";
import SEO from "../../components/widgets/seo";

export default () => {
  const proBonoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "HybridLP Pro Bono Legal Services",
    description:
      "Providing free legal representation for those in need in Nigeria.",
    provider: {
      "@type": "Organization",
      name: "HybridLP",
    },
    areaServed: "Nigeria",
    serviceType: "Legal Aid",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional: for a smooth scrolling animation
    });
  }, []);
  return (
    <div className=" min-h-screen">
      <SEO
        title="Pro Bono Legal Services"
        description="HybridLP provides free legal assistance to handle cases for people in Nigeria who are unable to pay for private legal representation."
        canonical="https://hybridlp.com/probono"
        structuredData={proBonoSchema}
      />
      <Hero />
      <div className="h-screen flex flex-col">
        <div className="flex flex-col flex-1 items-center justify-center py-20  bg-[#323232] ">
          <h1 className="text-7xl inter-font font-bold">100+</h1>
          <p className="text-[20px] lato-refular">Legal Practitoners</p>
        </div>
        {/* Lawyer Sign Up Form Section */}
        <section className="px-[7%] py-16 flex-1 pt-24 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 inter-font">
            Lawyer Sign Up Form
          </h2>
          <p className="text-white/80 text-lg mb-2 lato-regular">
            Lawyers can now sign up to take on pro bono cases.
          </p>
          <p className="text-white/60 text-sm mb-8 lato-regular">
            100+ practitioners providing immense worth of pro bono work.
          </p>
          <button className="inline-block px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
            Sign Up
          </button>
        </section>
      </div>

      {/* About Section */}
      <section className="px-[7%] lg-[128px] py-8 bg-[#3232324D]">
        <div className="flex flex-col lg:flex-row items-center gap-8  p-8 md:h-[70%] ">
          <div className="flex-1">
            <h3 className="text-white md:text-[32px] font-semibold mb-4 inter-font">
              Hybrid law practice pro bono services is an additional service
              that works with private legal profession to provide pro bono legal
              services to the poor.
            </h3>
            <p className="text-white/80 leading-relaxed lato-regular text-[18px]">
              We harness the enormous skill, might and strength of the Nigerian
              private legal profession to cases and clients that we identify.
              The existence of this service is a response to the lack of access
              to justice for people in Nigeria who are unable to pay for their
              own private legal representation.
              <br />
              <br />
              Section 36 of our Constitution, giving everyone the right to have
              any dispute resolved by the application of law decided in a fair
              public hearing before a court, or… another independent and
              impartial tribunal, has no meaning whatsoever, if a person is
              unable to afford representation.
              <br />
              <br />
              Hybrid law practice pro bono services has as its goal, the
              creation of sufficient free legal representation for all who need
              it.
            </p>
          </div>
          <div className="lg:w-1/3 p-8 bg-[#323232] lg:h-full">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
              alt="Legal consultation"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-[7%] lg:px-[165px] py-16">
        <div className="   p-8">
          <h2 className="text-white text-2xl lg:text-[48px] font-bold mb-4   pb-6 inter-font">
            What We Do
          </h2>
          <div className="w-10 border-b-2 border-solid  border-white mb-2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Services to clients */}
            <div className="border-l-2 border-t-2 rounded-tl-lg border-white pt-5 pl-5 h-fit ">
              <h3 className="inter-font text-white font-semibold mb-4   pb-2  md:text-[24px]">
                Services to clients
              </h3>
              <ul className="text-white/80 lato-regular text-sm space-y-2">
                <li>
                  • Advice law practice services, identifies and refers clients
                  to volunteer private lawyers for pro bono legal services.
                </li>
              </ul>
            </div>

            {/* Services to lawyers */}
            <div className="border-l-2 border-t-2 rounded-tl-lg border-white pt-5 pl-5 h-fit ">
              <h3 className="inter-font text-white font-semibold mb-4   pb-2 md:text-[24px]">
                Services to lawyers
              </h3>
              <ul className="text-white/80 lato-regular text-sm space-y-2">
                <li>• We match a client against back</li>
                <li>
                  • We provide the full administrative systems of our practice
                  to volunteer lawyers
                </li>
                <li>• We find clients</li>
                <li>• We provide case management</li>
                <li>• We prepare all documents as is made</li>
              </ul>
            </div>

            {/* General services */}
            <div className="border-l-2 border-t-2 rounded-tl-lg border-white pt-5 pl-5 h-fit ">
              <h3 className="inter-font text-white font-semibold mb-4   pb-2 md:text-[24px]">
                General services
              </h3>
              <ul className="text-white/80 lato-regular text-sm space-y-2">
                <li>
                  • Hybrid law practice coordinates this and builds lawyer
                  networks and provides the poor with access to justice through
                  the pro
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-[86%] mx-auto text-gray-800 bg-white rounded-t-4xl rounded-b-lg p-8">
          <h2 className="text-gray-800 text-2xl font-bold text-center mb-8 inter-font">
            Get In Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 lato-regular">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="px-8 inter-font py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
