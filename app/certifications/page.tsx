"use client";

import AnimatedSection from "../components/AnimatedSection";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "NISM Series 8",
    title: "Equity Derivatives Certification",
    issuer: "National Institute of Securities Markets",
    description: "Comprehensive certification in equity derivatives, covering futures, options, and risk management strategies.",
  },
  {
    name: "NISM Series 15",
    title: "Research Analyst Certification",
    issuer: "National Institute of Securities Markets",
    description: "Professional certification for research analysis, covering fundamental and technical analysis methodologies.",
  },
  {
    name: "BSE Capital Markets Program",
    title: "Capital Markets Certification",
    issuer: "Bombay Stock Exchange",
    description: "Specialized program covering capital markets operations, trading mechanisms, and regulatory frameworks.",
  },
];

export default function Certifications() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6">
              Certifications
            </h1>
            <div className="h-1 w-32 bg-gold mx-auto"></div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div className="flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-6 mx-auto">
                    <Award size={32} className="text-navy" />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-navy text-center mb-2">
                    {cert.name}
                  </h3>
                  
                  <h4 className="text-lg text-gold font-semibold text-center mb-4">
                    {cert.title}
                  </h4>
                  
                  <p className="text-sm text-gray-500 text-center mb-4">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-600 text-center flex-grow">
                    {cert.description}
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
