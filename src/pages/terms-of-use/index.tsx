import bgProp from "../../assets_/bg-property.png";
import SEO from "../../components/widgets/seo";

const TermsOfUse = () => {
  return (
    <>
      <SEO
        title="Terms of Use | HybridLP"
        description="These Terms of Use govern your access to and use of the HybridLP platform. By using the Platform, you agree to be bound by these Terms."
        canonical="https://hybridlp.com/terms-of-use"
      />
      <main className="flex flex-col py-0 relative text-white gradiented min-h-screen">
        <div className="lg:block absolute top-[5%] lg:top-[10%] left-[0.5rem] md:left-[8rem] opacity-30">
          <img src={bgProp} alt="bg-property" />
        </div>
        <div className="lg:block absolute top-[20%] right-[0.5rem] lg:right-[8rem] rotate-x-180 opacity-30">
          <img src={bgProp} alt="bg-property" />
        </div>

        <div className="mt-[120px] lg:mt-[150px] mx-4 sm:mx-8 md:mx-16 lg:mx-[15%] xl:mx-[20%] mb-20 relative z-10">
          <h1 className="inter-font text-center text-[32px] sm:text-[40px] lg:text-[48px] font-bold mb-4">
            Terms of Use
          </h1>
          <p className="text-gray-400 text-center mb-12 lato-regular">
            Last updated: February 2026
          </p>

          <div className="space-y-12 lato-regular text-[16px] lg:text-[18px] leading-relaxed text-gray-200">
            <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <p className="mb-6">
                These Terms of Use ("Terms") govern your access to and use of
                the HybridLP platform, including its website, applications, and
                services (collectively, the "Platform"). By accessing or using
                the Platform, you, whether as a Client or a Verified Legal
                Practitioner, agree to be bound by these Terms, our Privacy
                Policy, and all other policies or guidelines incorporated by
                reference.
              </p>
              <p className="mb-6">
                If you do not agree to these Terms, you may not access or use
                the Platform. HybridLP is powered by experienced lawyers and a
                cross-functional team dedicated to empowering the legal
                profession and improving client access to legal services.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-[24px] lg:text-[28px] font-bold text-white border-b border-gray-700 pb-2">
                1. Definitions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                {[
                  {
                    term: "Platform",
                    desc: "The HybridLP website, mobile applications, and all associated services.",
                  },
                  {
                    term: "Client(s)",
                    desc: "Individuals or organizations using the Platform to seek legal services.",
                  },
                  {
                    term: "Lawyer(s)",
                    desc: "Legal practitioners verified by HybridLP who offer legal services.",
                  },
                  {
                    term: "BriefSpace",
                    desc: "The unified digital workspace for Client legal matter management.",
                  },
                  {
                    term: "Lawyer Portal",
                    desc: "The professional interface for Verified Legal Practitioners.",
                  },
                  {
                    term: "Brief",
                    desc: "A client-initiated submission outlining a legal matter or inquiry.",
                  },
                  {
                    term: "Consultation Fee",
                    desc: "Initial fee paid by a Client upon submission of a Brief.",
                  },
                  {
                    term: "Professional Fee",
                    desc: "Fee agreed upon between a Client and Lawyer for legal execution.",
                  },
                  {
                    term: "Conflict of Interest",
                    desc: "Circumstances where impartiality or confidentiality could be affected.",
                  },
                  {
                    term: "Execution of Instruction",
                    desc: "The point at which a specific legal task has been carried out.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 p-4 rounded-lg border border-white/5"
                  >
                    <strong className="text-[#B89900] block mb-1">
                      {item.term}
                    </strong>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-[24px] lg:text-[28px] font-bold text-white border-b border-gray-700 pb-2">
                2. General Terms of Use
              </h2>
              <div className="space-y-8 pl-4">
                <div className="space-y-4">
                  <h3 className="text-white font-bold">
                    2.3. Account Registration and Security:
                  </h3>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-3 text-gray-300 text-sm">
                    <p>
                      i. Provide accurate, current, and complete information.
                    </p>
                    <p>
                      ii. Maintain the confidentiality of your login
                      credentials.
                    </p>
                    <p>
                      iii. Be solely responsible for all activities that occur
                      under your account.
                    </p>
                    <p>
                      iv. Notify HybridLP immediately of any unauthorized use.
                    </p>
                    <p className="font-bold text-white italic">
                      v. HybridLP will never request your login credentials via
                      phone or email.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300">
                  <h3 className="text-white font-bold">
                    2.6. Prohibited Conduct:
                  </h3>
                  <p>
                    You agree not to use the Platform for unlawful purposes,
                    impersonate others, or introduce malicious material.
                    Unauthorized access, interference, or the use of automated
                    scrapers is strictly prohibited.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-bold">
                    2.7-2.8. Disclaimers and Liability:
                  </h3>
                  <div className="p-4 bg-red-900/10 border border-red-900/30 rounded-lg text-sm italic">
                    <p className="text-gray-400">
                      The Platform is provided "AS IS" and "AS AVAILABLE".
                      HybridLP and its affiliates shall not be liable for any
                      direct, indirect, incidental, or consequential damages
                      arising from your use or inability to use the Platform.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="bg-[#B89900]/10 border border-[#B89900]/30 p-8 rounded-2xl">
                <h2 className="text-[24px] lg:text-[28px] font-bold text-white mb-4">
                  Client-Specific Terms
                </h2>
                <div className="space-y-6 text-gray-200">
                  <div>
                    <h3 className="font-bold text-white mb-2">
                      3.2. Consultation Fee:
                    </h3>
                    <p className="text-sm">
                      Upon submission of your Brief, a non-refundable
                      Consultation Fee is required. This covers initial
                      administrative processing and assignment to a Verified
                      Legal Practitioner.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">
                      3.3. Professional Fees:
                    </h3>
                    <p className="text-sm">
                      Separate professional engagements for the execution of
                      legal instructions are formed directly between you and the
                      Practitioner. HybridLP is not a party to these subsequent
                      agreements.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h3 className="font-bold text-[#B89900] mb-2 uppercase text-xs tracking-widest">
                      3.4. Refund Policy:
                    </h3>
                    <p className="text-sm italic">
                      Refund requests for Professional Fees must be initiated
                      within 24 hours of the documented "Execution of
                      Instruction" or a material breach.
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                    * HybridLP reserves the right to determine, in its sole
                    discretion, whether a claim for a whole or part of the
                    Professional Fee has been established.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-[24px] lg:text-[28px] font-bold text-white border-b border-gray-700 pb-2">
                Lawyer-Specific Terms
              </h2>
              <div className="space-y-6 pl-4">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-white font-bold mb-3">
                    4.4. Fee Structure:
                  </h3>
                  <ul className="list-disc pl-5 space-y-4 text-gray-300 text-sm">
                    <li>
                      <strong className="text-white">
                        20% of Consultancy Fee:
                      </strong>{" "}
                      HybridLP retains 20% for platform use and client
                      acquisition.
                    </li>
                    <li>
                      <strong className="text-white">
                        10% of Professional Fee:
                      </strong>{" "}
                      HybridLP receives 10% of the total agreed fee for managing
                      processing.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">
                    4.7. Indemnification:
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Verified legal practitioners unconditionally and irrevocably
                    undertake to indemnify and hold harmless HybridLP from any
                    claims arising from professional misconduct, negligence, or
                    breach of contract.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-[24px] lg:text-[28px] font-bold text-white border-b border-gray-700 pb-2">
                Dispute Resolution
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-[#B89900] font-bold mb-2">
                    1. Negotiations
                  </div>
                  <p className="text-xs text-gray-400">
                    Attempt to resolve disputes through amicable good faith
                    negotiations within 30 days.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-[#B89900] font-bold mb-2">
                    2. Arbitration
                  </div>
                  <p className="text-xs text-gray-400">
                    Resolved by arbitration in Nigeria under the Arbitration and
                    Mediation Act, 2023.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-[#B89900] font-bold mb-2">
                    3. Court Action
                  </div>
                  <p className="text-xs text-gray-400">
                    Only where negotiations and arbitration fail to resolve the
                    dispute.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <h2 className="text-[24px] font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="mb-4 font-bold text-[#B89900]">
                Email: hybridlawpractice@gmail.com
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a
                  href="https://hybridlp.com"
                  className="hover:text-[#B89900] transition-colors"
                >
                  Website: hybridlp.com
                </a>
                <a
                  href="https://app.hybridlp.com/signup"
                  className="hover:text-[#B89900] transition-colors"
                >
                  Client Sign-Up
                </a>
                <a
                  href="https://lawyer.hybridlp.com/signup"
                  className="hover:text-[#B89900] transition-colors"
                >
                  Lawyer Portal
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsOfUse;
