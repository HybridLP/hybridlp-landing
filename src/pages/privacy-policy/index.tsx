import bgProp from "../../assets_/bg-property.png";
import SEO from "../../components/widgets/seo";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | HybridLP"
        description="HybridLP is dedicated to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information."
        canonical="https://hybridlp.com/privacy-policy"
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
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-center mb-12 lato-regular">
            Last updated: February 2026
          </p>

          <div className="space-y-12 lato-regular text-[16px] lg:text-[18px] leading-relaxed text-gray-200">
            <section>
              <p className="mb-6">
                HybridLP is dedicated to empowering the legal profession and
                improving client access to legal services, and central to this
                mission is the protection of your privacy. This Privacy Policy
                outlines how HybridLP, powered by experienced lawyers and a
                cross-functional team, collects, uses, stores, shares and
                protects your personal information when you access or use our
                platform, including our website, applications, and services
                (collectively, the "Platform").
              </p>
              <p>
                By accessing or using the Platform, you agree to the collection
                and use of your information in accordance with this policy. If
                you do not agree with the terms of this Privacy Policy, please
                do not use the Platform.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-[24px] lg:text-[28px] font-bold text-white border-b border-gray-700 pb-2">
                1. Information We Collect
              </h2>
              <p>
                We collect various types of information for different purposes
                to provide and improve our service to you.
              </p>

              <div className="space-y-8 pl-4">
                <div className="space-y-4">
                  <h3 className="text-[20px] font-semibold text-white">
                    1.1. Information You Provide Directly to Us
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h4 className="font-bold text-[#B89900] mb-3">
                        i. Account and Profile Information:
                      </h4>
                      <ul className="list-disc pl-5 space-y-4 text-gray-300">
                        <li>
                          <strong className="text-white">For Clients:</strong>{" "}
                          When you register for an account and create "Briefs"
                          within BriefSpace, we collect your name, email
                          address, phone number, and details related to your
                          legal matters (e.g., legal advice, legal opinion,
                          civil, corporate, criminal case; type, descriptions,
                          associated documents).
                        </li>
                        <li>
                          <strong className="text-white">
                            For Lawyers / Verified Legal Practitioners:
                          </strong>{" "}
                          When you register for an account on the Lawyer Portal,
                          we collect your name, email address, phone number,
                          Supreme Court Number (SCN), Nigerian Bar Association
                          (NBA) Branch, practice areas, detailed biography, and
                          professional credentials required for verification.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h4 className="font-bold text-[#B89900] mb-2">
                        ii. Communication Data:
                      </h4>
                      <p className="text-gray-300">
                        Information you provide when you communicate with us,
                        other users on the Platform (via BriefSpace or Lawyer
                        Portal), or through customer support, including
                        messages, emails, and any attachments.
                      </p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h4 className="font-bold text-[#B89900] mb-2">
                        iii. Payment and Billing Information:
                      </h4>
                      <p className="text-gray-300">
                        When you make payments (Consultation Fees or
                        Professional Fees) or receive disbursements through the
                        Platform, we collect necessary billing details, payment
                        card information (processed by secure third-party
                        payment gateways), and transaction history. HybridLP
                        does not directly store sensitive payment card
                        information.
                      </p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h4 className="font-bold text-[#B89900] mb-2">
                        iv. Pro Bono Applications:
                      </h4>
                      <p className="text-gray-300">
                        Details submitted when applying for pro bono legal aid,
                        including personal circumstances and financial
                        information.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-[20px] font-semibold text-white">
                    1.2. Information Collected Automatically
                  </h3>
                  <ul className="space-y-4 pl-4">
                    <li className="flex gap-3">
                      <span className="text-[#B89900] font-bold">•</span>
                      <span>
                        <strong className="text-white">Usage Data:</strong> We
                        collect information about your interactions with the
                        Platform, such as the pages you visit, features you use,
                        the time and date of your visits, and other activity on
                        the Platform.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#B89900] font-bold">•</span>
                      <span>
                        <strong className="text-white">
                          Device and Technical Information:
                        </strong>{" "}
                        We collect information from your device, including your
                        IP address, browser type, operating system, unique
                        device identifiers, and mobile network information.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#B89900] font-bold">•</span>
                      <span>
                        <strong className="text-white">
                          Cookies and Tracking Technologies:
                        </strong>{" "}
                        We use cookies and similar tracking technologies to
                        track activity on our Platform and hold certain
                        information. Cookies are files with a small amount of
                        data that may include an anonymous unique identifier.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-[24px] lg:text-[28px] font-bold text-white border-b border-gray-700 pb-2">
                2. How We Use Your Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                {[
                  "To Provide and Maintain the Platform",
                  "To Facilitate Legal Services",
                  "To Process Payments",
                  "To Improve and Personalize Services",
                  "To Ensure Security and Prevent Fraud",
                  "To Communicate with You",
                  "To Verify Professional Credentials",
                  "To Conduct Research and Development",
                  "For Legal and Regulatory Compliance",
                  "For Marketing and Promotion",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-[#B89900]/30 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#B89900]"></div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-[24px] lg:text-[28px] font-bold text-white border-b border-gray-700 pb-2">
                3. How We Share Your Information
              </h2>
              <p className="mb-6">
                HybridLP understands the importance of confidentiality and legal
                privilege. We share your information only in specific
                circumstances:
              </p>

              <div className="space-y-6 pl-4">
                <div className="space-y-2">
                  <h3 className="text-white font-bold">
                    i. With Other Users (Clients and Lawyers):
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-[#B89900] font-bold text-sm mb-2 uppercase">
                        For Clients
                      </p>
                      <p className="text-gray-300 text-sm">
                        Your Brief details and contact information are shared
                        with the Verified Legal Practitioner(s) you select.
                      </p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-[#B89900] font-bold text-sm mb-2 uppercase">
                        For Lawyers
                      </p>
                      <p className="text-gray-300 text-sm">
                        Your professional profile (SCN, NBA Branch, etc.) is
                        visible to Clients to enable them to select a
                        practitioner.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-white font-bold">
                    ii. With Third-Party Service Providers:
                  </h3>
                  <p className="text-gray-300">
                    We engage trusted third-party companies (payment processors,
                    cloud hosting, etc.) who are obligated not to disclose or
                    use it for any other purpose.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-white font-bold">
                    iii. For Legal Compliance and Protection:
                  </h3>
                  <p className="text-gray-300">
                    We may disclose your information to comply with legal
                    obligations, protect HybridLP's rights, or ensure user
                    safety.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="bg-[#B89900]/10 border border-[#B89900]/30 p-8 rounded-2xl">
                <h2 className="text-[24px] lg:text-[28px] font-bold text-white mb-4">
                  4. Data Security
                </h2>
                <p className="mb-6">
                  HybridLP employs industry-standard encryption and secure
                  digital law office protocols to protect your Personal
                  Information.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-[#B89900] font-bold mb-2">
                      Encrypted Protocols
                    </div>
                    <p className="text-xs text-gray-400">
                      End-to-end encryption for all messages and documents.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-[#B89900] font-bold mb-2">
                      Access Controls
                    </div>
                    <p className="text-xs text-gray-400">
                      Limiting access to authorized personnel only.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-[#B89900] font-bold mb-2">
                      Regular Audits
                    </div>
                    <p className="text-xs text-gray-400">
                      Continuous security assessments and vulnerability scans.
                    </p>
                  </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-white font-bold">Legal Privilege:</p>
                  <p className="text-sm text-gray-300">
                    The Platform's architecture respects attorney-client
                    confidentiality and legal privilege, ensuring that
                    communications and documents remain confidential.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-[24px] lg:text-[28px] font-bold text-white border-b border-gray-700 pb-2">
                5-8. Rights and Retention
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold">5. Data Retention</h3>
                  <p className="text-gray-300">
                    We retain your information typically for the duration of
                    your account and a reasonable period thereafter for legal
                    compliance.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-bold">
                    6. Your Data Protection Rights
                  </h3>
                  <p className="text-gray-300 mb-2">
                    You have rights to Access, Rectification, Erasure, Restrict
                    Processing, Object to Processing, and Data Portability.
                  </p>
                  <p className="text-sm text-[#B89900]">
                    Contact us at hybridlawpractice@gmail.com to exercise these
                    rights.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-bold">7. Third-Party Links</h3>
                  <p className="text-gray-300">
                    We advise you to review the Privacy Policy of every site you
                    visit as we have no control over third-party practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-bold">
                    8. Children's Privacy
                  </h3>
                  <p className="text-gray-300">
                    Our Platform is not intended for anyone under the age of 18.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <h2 className="text-[24px] font-bold text-white mb-6">
                9-10. Contact Information
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
              <div className="flex justify-center gap-8 mt-6">
                <a
                  href="https://tiktok.com/@hybridlp"
                  className="text-gray-400 hover:text-white"
                >
                  TikTok
                </a>
                <a
                  href="https://instagram.com/hybridlp_"
                  className="text-gray-400 hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://x.com/hybridlp_"
                  className="text-gray-400 hover:text-white"
                >
                  X (Twitter)
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
