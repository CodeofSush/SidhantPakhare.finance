"use client";

import AnimatedSection from "../components/AnimatedSection";

const experiences = [
  {
    company: "Deutsche Bank",
    role: "Senior Associate",
    period: "Oct 2024 – Present",
    description: "Leading financial planning and analysis initiatives for strategic business units. Driving cost optimization and budget management for key portfolios.",
    highlights: [
      "Strategic financial planning and forecasting",
      "Executive reporting and variance analysis",
      "Cross-functional stakeholder management",
    ],
    side: "right",
  },
  {
    company: "Reliance Digital",
    role: "Manager - FP&A",
    period: "Jan 2023 – Oct 2024",
    description: "Managed comprehensive financial planning and analysis for retail operations. Implemented automation solutions that transformed reporting efficiency.",
    highlights: [
      "Reduced reporting time by 83% through automation",
      "Developed 5-year payment tracker system",
      "Streamlined monthly variance analysis",
    ],
    side: "left",
  },
  {
    company: "Accenture",
    role: "Senior Analyst - FP&A",
    period: "Jan 2021 – Jan 2023",
    description: "Delivered financial analysis and strategic insights for global clients. Specialized in budget management and cost forecasting.",
    highlights: [
      "Financial modeling and forecasting",
      "Budget planning and control",
      "Client stakeholder management",
    ],
    side: "right",
  },
  {
    company: "Sungard AS",
    role: "Senior Executive - FP&A",
    period: "Jul 2019 – Jan 2020",
    description: "Executed financial planning activities and supported senior management with data-driven insights.",
    highlights: [
      "Monthly financial reporting",
      "Variance analysis and commentary",
      "Budget tracking and forecasting",
    ],
    side: "left",
  },
  {
    company: "Capgemini",
    role: "Associate Consultant - FP&A",
    period: "Jun 2016 – Jul 2019",
    description: "Provided financial planning and analysis support for multiple business units. Developed reporting frameworks and financial models.",
    highlights: [
      "Financial reporting and analysis",
      "Budget preparation and monitoring",
      "Process improvement initiatives",
    ],
    side: "right",
  },
  {
    company: "India Infoline",
    role: "Relationship Manager",
    period: "Aug 2015 – Feb 2016",
    description: "Managed client relationships and provided financial advisory services. Built strong foundation in financial markets and client management.",
    highlights: [
      "Client portfolio management",
      "Financial advisory services",
      "Market analysis and insights",
    ],
    side: "left",
  },
];

export default function Experience() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6">
              Experience
            </h1>
            <div className="h-1 w-32 bg-gold mx-auto"></div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold hidden md:block"></div>

            {experiences.map((exp, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                direction={exp.side === "left" ? "left" : "right"}
              >
                <div
                  className={`mb-12 flex flex-col md:flex-row items-center ${
                    exp.side === "left" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:w-5/12"></div>
                  
                  <div className="w-full md:w-2/12 flex justify-center">
                    <div className="w-8 h-8 bg-gold rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>

                  <div className="w-full md:w-5/12 mt-4 md:mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <h3 className="text-2xl font-serif font-bold text-navy mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl text-gold font-semibold mb-2">
                        {exp.company}
                      </h4>
                      <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <span className="text-gold mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
