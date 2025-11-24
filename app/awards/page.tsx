"use client";

import AnimatedSection from "../components/AnimatedSection";
import { Trophy } from "lucide-react";

const awards = [
  {
    title: "Finance Spark Award",
    organization: "Deutsche Bank",
    year: "2024",
    description: "Recognized for exceptional contribution to financial planning initiatives and process automation excellence.",
  },
  {
    title: "Pat on the Back Award",
    organization: "Reliance Digital",
    year: "2023",
    description: "Awarded for outstanding performance in streamlining financial reporting and achieving significant efficiency gains.",
  },
  {
    title: "ENACTUS Semi-Finalist",
    project: "TASAR Project",
    year: "2014",
    description: "Led social entrepreneurship initiative focused on empowering traditional artisans through sustainable business models.",
  },
  {
    title: "MBA Top Ranker",
    organization: "University",
    year: "2015",
    description: "Achieved top academic performance in MBA Finance program with distinction in financial management courses.",
  },
];

export default function Awards() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6">
              Awards & Recognition
            </h1>
            <div className="h-1 w-32 bg-gold mx-auto"></div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                      <Trophy size={24} className="text-navy" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-serif font-bold text-navy mb-2">
                        {award.title}
                      </h3>
                      <p className="text-gold font-semibold">
                        {award.organization || award.project}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{award.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
