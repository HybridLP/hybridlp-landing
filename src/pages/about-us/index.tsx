import bgProp from "../../assets_/bg-property.png";
import aboutUs from "../../assets_/about-us.png";
import SEO from "../../components/widgets/seo";

export default () => {
  return (
    <>
      <SEO
        title="About Our Digital Law Office"
        description="HybridLP provides legal services in diverse areas, with experienced lawyers in arbitration, litigation, and more. Learn about our vision."
        canonical="https://hybridlp.com/about"
      />
      <main className="flex flex-col py-0 relative text-white gradiented">
        {/* it should still bw visible for the sake of  */}
        <div className=" lg:block absolute top-[5%] lg:top-[10%] left-[0.5rem] md:left-[8rem]">
          <img src={bgProp} alt="bg-property" />
        </div>
        <div className=" lg:block absolute top-[20%] right-[0.5rem] lg:right-[8rem] rotate-x-180">
          <img src={bgProp} alt="bg-property" />
        </div>
        <div className="mt-[20%] lg:mt-[10%] mx-4 sm:mx-8 md:mx-16 lg:mx-[273px]">
          <h1 className="inter-font text-center text-[28px] sm:text-[32px] lg:text-[40px] mb-8">
            About Us
          </h1>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] lato-regular text-center mb-8 leading-[24px] sm:leading-[28px] lg:leading-[32px]">
            Hybrid LP provides legal services in diverse areas, with experienced
            lawyers in arbitration, litigation, Human right enforcement,
            commercial disputes, labour/employment related matters, election
            petition, immigration matters, trans-boarder or international
            disputes, Real estate, Family and personal law practice,
            intellectual property, Technology and IT law compliance, Cyber
            Security and Data protection, sports law, mining and natural
            resources law compliance and related matters, legal drafting, legal
            advisory, company registration and corporate matters
          </p>
          <img
            src={aboutUs}
            alt=""
            className="rounded-lg w-full h-auto lg:h-[419px] object-cover"
          />
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] lato-regular mt-6 sm:mt-8 text-center">
            We prioritize efficient service delivery through an integrated and
            interactive processes, such as;
          </p>
          {contents.map((item, idx) => (
            <div
              className={`flex flex-col gap-4 sm:gap-6 ${idx === 0 ? "mt-12 sm:mt-16" : "mt-6 sm:mt-8"}`}
              key={idx}
            >
              <h3 className="text-white text-[18px] sm:text-[20px] lg:text-[24px] font-semibold w-full lg:w-[623px] lato-regular border-b border-b-white px-[10px] py-[12px] sm:py-[16px]">
                {item.title}
              </h3>
              <p className="lato-regular text-[14px] sm:text-[16px] lg:text-[18px] px-[10px] leading-6 sm:leading-7 lg:leading-8">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

const contents = [
  {
    title: "Self-service",
    content:
      "A dedicated client dashboard for seamless interaction with case file, track work progress and get timely updates from assigned legal team. Allowing clients to independently review documents, schedule appointments, initiate query and demand refund subject to Hybridlp’s review and refund policy. Gain insights from unlimited access to Nigerian statutes, case laws, precedents,  templates and other resources to make crucial contributions to their legal matters",
  },
  {
    title: "Collaborate",
    content:
      "Team up with legal experts through a secure, integrated digital workspace designed to enhance communication and improve service delivery. HybridLp enables real-time interractions, document sharing, work progress tracking and coordinated task management. With advanced collaboration tools and features such as shared and secured workspaces, automated notifications, version-controlled documents, and organised communication channels, it allows lawyers collaborate seamlessly and effectively, minimising delays and maintain a clear overview of case developments.",
  },
  {
    title: "Quality Service Regulation",
    content:
      "To enhance transparency, professionalism, accountability and consistent service quality by effectively supervising activities of the team of lawyers assigned to each task. These ensure that every task is handled under structured oversight through secure digital tools, performance tracking systems and standardised workflow. HybribLP guarantees that clients receive reliable and quality services, while lawyers operate within ethical, procedural and professional standards.",
  },
  {
    title: "Pro Bono Legal Services",
    content:
      "Individuals and organisations seeking free legal assistance are provided with access to flexible pro bono services. Eligible applicants can submit detailed requests outlining their legal issues, upload supporting documents, and track the status of their applications through a secure digital portal. Each request is reviewed by a dedicated panel of volunteer lawyers who assess the merits of the case and determine the most appropriate form of intervention. This service is designed to promote justice, fairness, and inclusiveness by ensuring that vulnerable persons, NGOs, community groups, and socially impactful initiatives receive professional legal guidance at no cost.",
  },
  {
    title: "Mentorship, Pupillage, and Career Guidance",
    content:
      "Offering structured mentorship and pupillage programs designed to support the next generation legal lawyers. Aspiring lawyers can gain hands-on experience, guidance, and practical insights from seasoned practitioners, helping them develop essential skills for legal practice through a one-on-one mentorship, collaborative projects, and career advisory sessions. Participants receive personalized support in navigating legal training, building professional networks and understanding best practices. Accessible to paralegals, students, law aspirants preparing for bar examinations, post law school and/or graduates seeking pupillage, or looking for strategic career guidance. Our dedicated programs ensure meaningful professional growth and practical exposure to law practice.",
  },
  {
    title: "Licensed Bondsman Services",
    content:
      "Operating a fully licensed and certified bondsman, providing reliable surety services to facilitate bail and other undertakings. Clients can engage our bondsman services through a secure digital interface, submitting necessary documentation and receiving prompt verification and processing. By combining regulatory compliance with technology-driven efficiency, we ensure that bail applications, court recognizances and related obligations are handled transparently and effectively. This service ensures adherence to statutory and ethical standards governing suretyship in Nigeria.",
  },
];
