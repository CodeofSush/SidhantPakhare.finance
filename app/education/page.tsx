"use client";

import AnimatedSection from "../components/AnimatedSection";

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    specialization: "Finance",
    institution: "University Name",
    year: "2013 - 2015",
    score: "73%",
    description: "Specialized in Financial Management, Corporate Finance, and Investment Analysis. Developed strong foundation in financial planning and strategic decision-making.",
  },
  {
    degree: "Bachelor of Management Studies (BMS)",
    specialization: "Marketing",
    institution: "University Name",
    year: "2010 - 2013",
    score: "65%",
    description: "Comprehensive business education with focus on marketing principles, consumer behavior, and business strategy.",
  },
];

export default function Education() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6">
              Education
            </h1>
            <div className="h-1 w-32 bg-gold mx-auto"></div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-1 bg-gold"></div>

            {education.map((edu, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="mb-12 ml-16 relative">
                  <div className="absolute -left-[2.3rem] top-6 w-6 h-6 bg-gold rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-serif font-bold text-navy">
                        {edu.degree}
                      </h3>
                      <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-gold text-navy font-semibold rounded-full text-sm">
                        {edu.score}
                      </span>
                    </div>
                    
                    <h4 className="text-xl text-gold font-semibold mb-2">
                      {edu.specialization}
                    </h4>
                    
                    <p className="text-gray-500 mb-4">{edu.year}</p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {edu.description}
                    </p>
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
