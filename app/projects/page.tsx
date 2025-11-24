"use client";

import AnimatedSection from "../components/AnimatedSection";
import { Briefcase } from "lucide-react";

const projects = [
  {
    title: "TASAR - Social Entrepreneurship Initiative",
    category: "Social Impact",
    year: "2014",
    description: "Led a social entrepreneurship project focused on empowering traditional artisans through sustainable business models. Achieved semi-finalist status in ENACTUS competition.",
    impact: [
      "Empowered local artisan communities",
      "Created sustainable income opportunities",
      "Developed market linkages for traditional crafts",
    ],
  },
  {
    title: "Investor Behavior Study",
    category: "Research",
    year: "2015",
    description: "Conducted comprehensive research on investor behavior patterns and decision-making processes in financial markets. Analyzed psychological factors influencing investment choices.",
    impact: [
      "Published research findings",
      "Identified key behavioral patterns",
      "Provided insights for financial advisors",
    ],
  },
];

export default function Projects() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6">
              Projects
            </h1>
            <div className="h-1 w-32 bg-gold mx-auto"></div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                      <Briefcase size={24} className="text-navy" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-2xl font-serif font-bold text-navy">
                          {project.title}
                        </h3>
                        <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-gold text-navy text-sm font-semibold rounded-full">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-gold font-semibold mb-4">{project.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-3">Key Impact:</h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <span className="text-gold mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
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
