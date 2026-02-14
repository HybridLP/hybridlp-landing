import bgProp from "../../assets_/bg-property.png";
import SEO from "../../components/widgets/seo";

const Remuneration = () => {
  return (
    <>
      <SEO
        title="Legal Practitioner Remuneration | HybridLP"
        description="View the transparent pricing and remuneration scales for legal practitioners on HybridLP, guided by the Legal Practitioners Remuneration Order."
        canonical="https://hybridlp.com/remuneration"
      />
      <main className="flex flex-col py-0 relative text-white gradiented min-h-screen overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="lg:block absolute top-[5%] lg:top-[10%] left-[0.5rem] md:left-[8rem] opacity-20 animate-pulse">
          <img src={bgProp} alt="bg-property" />
        </div>
        <div
          className="lg:block absolute top-[20%] right-[0.5rem] lg:right-[8rem] rotate-x-180 opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          <img src={bgProp} alt="bg-property" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B89900]/5 to-transparent opacity-50"></div>

        <div className="mt-[120px] lg:mt-[150px] mx-4 sm:mx-8 md:mx-12 lg:mx-[8%] xl:mx-[12%] mb-20 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#B89900] to-transparent mx-auto mb-4"></div>
            </div>
            <h1 className="inter-font text-[36px] sm:text-[44px] lg:text-[56px] font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#B89900] to-white">
              Legal Practitioner Remuneration
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto lato-regular leading-relaxed">
              Transparent pricing guided by the{" "}
              <span className="text-[#B89900] font-semibold">
                Legal Practitioners Remuneration Order
              </span>
              , ensuring fair compensation across all legal services in Nigeria.
            </p>
          </div>

          {/* CTA Card */}
          <div className="mb-16 group">
            <div className="bg-gradient-to-r from-[#B89900]/20 via-[#B89900]/10 to-[#B89900]/20 backdrop-blur-sm border border-[#B89900]/30 p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_40px_rgba(184,153,0,0.3)] transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Official Nigerian Bar Association Document
                  </h3>
                  <p className="text-sm text-gray-300 lato-regular">
                    Access the complete Legal Practitioners Remuneration Order
                    2023 for detailed guidelines and context.
                  </p>
                </div>
                <a
                  href="https://blog.nigerianbar.org.ng/wp-content/uploads/2025/03/Legal-Practitioners-Renumeration-Order-2023.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-[#B89900] to-yellow-600 text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(184,153,0,0.5)] transition-all duration-300 text-sm whitespace-nowrap flex items-center gap-2 group-hover:gap-4"
                >
                  <span>View Full Document</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-20 lato-regular">
            {/* State Bands - Enhanced Design */}
            <section className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-[28px] lg:text-[36px] font-bold text-white mb-3 inter-font">
                  State Classification Bands
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#B89900] to-transparent mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    band: "Band 1",
                    states:
                      "Abia, Adamawa, Anambra, Bauchi, Borno, Ebonyi, Enugu, Gombe, Imo, Jigawa, Kaduna, Kano, Kastina, Kebbi, Sokoto, Taraba, Yobe and Zamfara.",
                    gradient: "from-blue-900/20 to-blue-800/10",
                  },
                  {
                    band: "Band 2",
                    states:
                      "Akwa Ibom, Bayelsa, Benue, Cross River, Delta, Edo, Ekiti, Kwara, Kogi, Nasarawa, Niger, Ogun, Ondo, Osun, Oyo, Plateau and Rivers.",
                    gradient: "from-purple-900/20 to-purple-800/10",
                  },
                  {
                    band: "Band 3",
                    states: "Federal Capital Territory (FCT) and Lagos State.",
                    gradient: "from-[#B89900]/20 to-yellow-800/10",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative bg-gradient-to-br ${item.gradient} backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#B89900]/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(184,153,0,0.2)] group`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#B89900]/10 rounded-full blur-3xl group-hover:bg-[#B89900]/20 transition-all duration-500"></div>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#B89900] to-yellow-600 rounded-xl flex items-center justify-center font-bold text-black text-xl shadow-lg">
                          {idx + 1}
                        </div>
                        <h3 className="text-[#B89900] font-bold text-2xl">
                          {item.band}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {item.states}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Scale 1 - Premium Card Design */}
            <section className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B89900]/20 via-transparent to-[#B89900]/20 blur-3xl"></div>
                <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl hover:shadow-[0_0_50px_rgba(184,153,0,0.3)] transition-all duration-500">
                  <div className="bg-gradient-to-r from-[#B89900]/30 via-[#B89900]/20 to-transparent px-8 py-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#B89900] to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <span className="text-black font-bold text-2xl">1</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white inter-font">
                          Consultancy & Legal Opinion
                        </h3>
                        <p className="text-sm text-gray-400">
                          Initial consultation and expert legal advice
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {[
                        {
                          title: "9 years exp or less",
                          b1: "20,000",
                          b2: "25,000",
                          b3: "30,000",
                        },
                        {
                          title: "10+ years experience",
                          b1: "100,000",
                          b2: "150,000",
                          b3: "200,000",
                        },
                        {
                          title: "Senior Advocates (SAN)",
                          b1: "300,000",
                          b2: "400,000",
                          b3: "500,000",
                          premium: true,
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className={`bg-gradient-to-br ${item.premium ? "from-[#B89900]/20 to-yellow-900/10 border-[#B89900]/40" : "from-white/5 to-transparent border-white/10"} backdrop-blur-sm p-6 rounded-xl border hover:scale-105 transition-all duration-300`}
                        >
                          <h4
                            className={`font-bold mb-4 ${item.premium ? "text-[#B89900] italic" : "text-white"}`}
                          >
                            {item.title}
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-400">Band 1:</span>
                              <span className="text-white font-semibold">
                                ₦{item.b1}
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-400">Band 2:</span>
                              <span className="text-white font-semibold">
                                ₦{item.b2}
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-400">Band 3:</span>
                              <span className="text-[#B89900] font-bold text-lg">
                                ₦{item.b3}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Scale 2 */}
            <section className="space-y-8">
              <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden shadow-2xl hover:shadow-[0_0_50px_rgba(184,153,0,0.3)] transition-all duration-500">
                <div className="bg-gradient-to-r from-purple-900/30 via-purple-800/20 to-transparent px-8 py-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-white font-bold text-2xl">2</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white inter-font">
                        Business Incorporation
                      </h3>
                      <p className="text-sm text-gray-400">
                        Company registration and business name incorporation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "9 years exp or less",
                        b1: "50,000",
                        b2: "80,000",
                        b3: "100,000",
                      },
                      {
                        title: "10+ years experience",
                        b1: "100,000",
                        b2: "150,000",
                        b3: "200,000",
                      },
                      {
                        title: "Senior Advocates (SAN)",
                        b1: "300,000",
                        b2: "400,000",
                        b3: "500,000",
                        premium: true,
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`bg-gradient-to-br ${item.premium ? "from-[#B89900]/20 to-yellow-900/10 border-[#B89900]/40" : "from-white/5 to-transparent border-white/10"} backdrop-blur-sm p-6 rounded-xl border hover:scale-105 transition-all duration-300`}
                      >
                        <h4
                          className={`font-bold mb-4 ${item.premium ? "text-[#B89900] italic" : "text-white"}`}
                        >
                          {item.title}
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Band 1:</span>
                            <span className="text-white font-semibold">
                              ₦{item.b1}
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Band 2:</span>
                            <span className="text-white font-semibold">
                              ₦{item.b2}
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Band 3:</span>
                            <span className="text-[#B89900] font-bold text-lg">
                              ₦{item.b3}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Scale 3 - Litigation (Redesigned with better visual hierarchy) */}
            <section className="space-y-12">
              <div className="text-center">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-transparent via-white/10 to-transparent px-8 py-4 rounded-full mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h2 className="text-[28px] lg:text-[36px] font-bold text-white inter-font">
                    Litigation Services
                  </h2>
                </div>
                <p className="text-gray-400">
                  Civil and Criminal proceedings across all court levels
                </p>
              </div>

              {/* Civil Litigation Categories */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#B89900] uppercase tracking-wide flex items-center gap-3">
                  <div className="h-8 w-1 bg-gradient-to-b from-[#B89900] to-yellow-600"></div>
                  Civil Litigation
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[
                    {
                      type: "Labour Disputes",
                      fees: ["₦200k - ₦400k", "₦500k - ₦700k", "₦2M - ₦3M"],
                    },
                    {
                      type: "Contractual Disputes",
                      fees: ["₦300k - ₦500k", "₦500k - ₦700k", "₦2M - ₦3M"],
                    },
                    {
                      type: "Maritime & Aviation",
                      fees: ["₦400k - ₦600k", "₦600k - ₦800k", "₦3M - ₦4M"],
                    },
                    {
                      type: "Energy & Mining",
                      fees: ["₦500k - ₦700k", "₦700k - ₦900k", "₦3M - ₦4M"],
                    },
                    {
                      type: "Land & Chieftaincy",
                      fees: ["₦400k - ₦600k", "₦600k - ₦800k", "₦3M - ₦4M"],
                    },
                  ].map((cat, cidx) => (
                    <div
                      key={cidx}
                      className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#B89900]/40 hover:shadow-[0_0_30px_rgba(184,153,0,0.2)] transition-all duration-300 group"
                    >
                      <h4 className="text-lg font-bold text-white mb-4 group-hover:text-[#B89900] transition-colors">
                        {cat.type}
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Up to 9 years:</span>
                          <span className="text-gray-300">{cat.fees[0]}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">10+ years:</span>
                          <span className="text-gray-300">{cat.fees[1]}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400 italic">SAN:</span>
                          <span className="text-[#B89900] font-bold">
                            {cat.fees[2]}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Criminal Litigation */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-red-400 uppercase tracking-wide flex items-center gap-3">
                  <div className="h-8 w-1 bg-gradient-to-b from-red-500 to-red-700"></div>
                  Criminal Litigation
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      type: "Bail Application",
                      icon: "⚖️",
                      fees: ["₦50k - ₦150k", "₦100k - ₦250k", "₦500k - ₦750k"],
                    },
                    {
                      type: "Misdemeanors",
                      icon: "⚠️",
                      fees: ["₦200k - ₦300k", "₦300k - ₦500k", "₦1M - ₦2M"],
                    },
                    {
                      type: "Felonies",
                      icon: "🛡️",
                      fees: ["₦300k - ₦400k", "₦400k - ₦600k", "₦2M - ₦3M"],
                    },
                  ].map((crim, cridx) => (
                    <div
                      key={cridx}
                      className="relative bg-gradient-to-br from-red-900/20 to-red-800/5 backdrop-blur-sm p-6 rounded-2xl border border-red-900/30 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all duration-300 group overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                        {crim.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-4 relative z-10">
                        {crim.type}
                      </h4>
                      <div className="space-y-2 relative z-10">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Up to 9 yrs:</span>
                          <span className="text-gray-300 font-semibold">
                            {crim.fees[0]}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">10+ yrs:</span>
                          <span className="text-gray-300 font-semibold">
                            {crim.fees[1]}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400 italic">SAN:</span>
                          <span className="text-red-400 font-bold">
                            {crim.fees[2]}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Appeals - Redesigned */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-400 uppercase tracking-wide flex items-center gap-3">
                  <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-blue-700"></div>
                  Appeals
                </h3>
                <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/5 backdrop-blur-md p-8 rounded-3xl border border-blue-900/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { court: "High Court", fees: ["₦600k", "₦800k", "₦4M"] },
                      {
                        court: "Sharia/Customary",
                        fees: ["₦600k", "₦800k", "₦4M"],
                      },
                      {
                        court: "Court of Appeal",
                        fees: ["₦700k", "₦1M", "₦6M"],
                      },
                      {
                        court: "Supreme Court",
                        fees: ["₦800k", "₦1.5M", "₦7M"],
                        supreme: true,
                      },
                    ].map((appeal, aidx) => (
                      <div
                        key={aidx}
                        className={`bg-gradient-to-br ${appeal.supreme ? "from-[#B89900]/20 to-yellow-900/10 border-[#B89900]/40" : "from-white/5 to-transparent border-white/10"} backdrop-blur-sm p-5 rounded-xl border hover:scale-105 transition-all duration-300`}
                      >
                        <h4
                          className={`font-bold text-sm mb-4 uppercase tracking-wider ${appeal.supreme ? "text-[#B89900]" : "text-blue-400"}`}
                        >
                          {appeal.court}
                        </h4>
                        <div className="space-y-2">
                          <div className="text-xs text-gray-400">
                            Up to 9 yrs:{" "}
                            <span className="text-white float-right">
                              {appeal.fees[0]}
                            </span>
                          </div>
                          <div className="text-xs text-gray-400">
                            10+ yrs:{" "}
                            <span className="text-white float-right">
                              {appeal.fees[1]}
                            </span>
                          </div>
                          <div className="text-xs text-gray-400 italic">
                            SAN:{" "}
                            <span
                              className={`${appeal.supreme ? "text-[#B89900]" : "text-blue-400"} font-bold float-right`}
                            >
                              ₦{appeal.fees[2]}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Scale 4 - Property Transactions */}
            <section className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-transparent via-white/10 to-transparent px-8 py-4 rounded-full mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h2 className="text-[28px] lg:text-[36px] font-bold text-white inter-font">
                    Property Transactions
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-900/20 to-green-800/5 backdrop-blur-md p-8 rounded-3xl border border-green-900/30 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)] transition-all duration-500">
                  <h3 className="text-xl font-bold text-green-400 mb-6 uppercase tracking-wide flex items-center gap-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Conveyances & Mortgages
                  </h3>
                  <div className="space-y-4">
                    {[
                      { range: "Below ₦50M", conv: "10%", mort: "4%" },
                      {
                        range: "₦50M to ₦100M",
                        conv: "₦5M + 5%",
                        mort: "₦2M + 3%",
                      },
                      {
                        range: "Above ₦100M",
                        conv: "₦7.5M + 3%",
                        mort: "₦4.5M + 2%",
                        highlight: true,
                      },
                    ].map((prop, pidx) => (
                      <div
                        key={pidx}
                        className={`${prop.highlight ? "bg-[#B89900]/10 border-[#B89900]/30" : "bg-white/5 border-white/10"} backdrop-blur-sm p-4 rounded-xl border`}
                      >
                        <div className="font-bold text-white mb-2">
                          {prop.range}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400 text-xs mb-1">
                              Conveyancing:
                            </div>
                            <div
                              className={
                                prop.highlight
                                  ? "text-[#B89900] font-bold"
                                  : "text-gray-300"
                              }
                            >
                              {prop.conv}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-xs mb-1">
                              Mortgages:
                            </div>
                            <div
                              className={
                                prop.highlight
                                  ? "text-[#B89900] font-bold"
                                  : "text-gray-300"
                              }
                            >
                              {prop.mort}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-xs text-gray-400 italic bg-white/5 p-3 rounded-lg">
                    * Assignor's/Mortgagor's practitioner receives 50% of the
                    listed rates
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/5 backdrop-blur-md p-8 rounded-3xl border border-teal-900/30 hover:shadow-[0_0_40px_rgba(20,184,166,0.2)] transition-all duration-500">
                  <h3 className="text-xl font-bold text-teal-400 mb-6 uppercase tracking-wide flex items-center gap-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Leases & Tenancies
                  </h3>
                  <div className="space-y-4">
                    {[
                      { range: "Below ₦5M", rate: "10%" },
                      { range: "₦5M to ₦10M", rate: "₦500k + 5%" },
                      {
                        range: "Above ₦10M",
                        rate: "₦750k + 5%",
                        highlight: true,
                      },
                    ].map((lease, lidx) => (
                      <div
                        key={lidx}
                        className={`${lease.highlight ? "bg-[#B89900]/10 border-[#B89900]/30" : "bg-white/5 border-white/10"} backdrop-blur-sm p-4 rounded-xl border`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="font-bold text-white">
                            {lease.range}
                          </div>
                          <div
                            className={`text-lg font-bold ${lease.highlight ? "text-[#B89900]" : "text-gray-300"}`}
                          >
                            {lease.rate}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Annual Rental Value
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Scale 5 - Hourly Rates */}
            <section className="space-y-8">
              <div className="relative bg-gradient-to-br from-[#B89900]/20 via-yellow-900/10 to-transparent backdrop-blur-lg rounded-3xl border border-[#B89900]/30 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B89900]/20 rounded-full blur-3xl"></div>
                <div className="relative bg-gradient-to-r from-[#B89900]/30 via-[#B89900]/20 to-transparent px-8 py-6 border-b border-[#B89900]/20">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#B89900] to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-black font-bold text-2xl">5</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white inter-font">
                        Hourly Rates
                      </h3>
                      <p className="text-sm text-gray-400">
                        For commercial transactions and ongoing legal support
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        level: "Associates",
                        exp: "0 – 6 years",
                        rates: { b1: "10,000", b2: "20,000", b3: "30,000" },
                        color: "from-blue-600/20 to-blue-800/10",
                      },
                      {
                        level: "Senior Associates",
                        exp: "6 – 12 years",
                        rates: { b1: "20,000", b2: "80,000", b3: "120,000" },
                        color: "from-purple-600/20 to-purple-800/10",
                      },
                      {
                        level: "Partners & SAN",
                        exp: "12+ years",
                        rates: { b1: "50,000", b2: "150,000", b3: "200,000" },
                        color: "from-[#B89900]/30 to-yellow-900/10",
                        premium: true,
                      },
                    ].map((hourly, hidx) => (
                      <div
                        key={hidx}
                        className={`bg-gradient-to-br ${hourly.color} backdrop-blur-sm p-6 rounded-2xl border ${hourly.premium ? "border-[#B89900]/40" : "border-white/10"} hover:scale-105 hover:shadow-[0_0_30px_rgba(184,153,0,0.3)] transition-all duration-300`}
                      >
                        <div className="mb-4">
                          <h4
                            className={`text-lg font-bold ${hourly.premium ? "text-[#B89900]" : "text-white"}`}
                          >
                            {hourly.level}
                          </h4>
                          <p className="text-xs text-gray-400 mt-1">
                            {hourly.exp} experience
                          </p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">
                              Band 1:
                            </span>
                            <span className="text-white font-semibold">
                              ₦{hourly.rates.b1}/hr
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">
                              Band 2:
                            </span>
                            <span className="text-white font-semibold">
                              ₦{hourly.rates.b2}/hr
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">
                              Band 3:
                            </span>
                            <span
                              className={`font-bold text-lg ${hourly.premium ? "text-[#B89900]" : "text-white"}`}
                            >
                              ₦{hourly.rates.b3}/hr
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-gradient-to-r from-[#B89900]/10 via-[#B89900]/20 to-[#B89900]/10 backdrop-blur-md px-12 py-8 rounded-3xl border border-[#B89900]/30">
              <p className="text-gray-300 text-lg mb-4">
                Ready to get started with professional legal services?
              </p>
              <a
                href="https://app.hybridlp.com"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#B89900] to-yellow-600 text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(184,153,0,0.5)] transition-all duration-300"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Remuneration;
