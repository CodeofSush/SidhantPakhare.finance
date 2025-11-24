"use client";

import AnimatedSection from "../components/AnimatedSection";

export default function About() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6">
              About Me
            </h1>
            <div className="h-1 w-32 bg-gold mx-auto"></div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2}>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                I am a seasoned <span className="text-gold font-semibold">FP&A Specialist</span> with over 9 years of experience in financial planning, analysis, and strategic decision-making. My career has been defined by a commitment to driving operational excellence through data-driven insights and innovative financial solutions.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Currently serving as a <span className="font-semibold text-navy">Senior Associate at Deutsche Bank</span>, I specialize in cost forecasting, budget management, and variance analysis. My expertise lies in transforming complex financial data into actionable strategies that empower executive leadership to make informed decisions.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Throughout my career, I have successfully implemented process automation initiatives that have significantly improved reporting efficiency. One of my notable achievements includes reducing monthly reporting time by 83% — from 1.5 hours to just 25 minutes — through strategic automation and streamlined workflows.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                My professional journey spans across prestigious organizations including Reliance Digital, Accenture, Sungard AS, and Capgemini, where I have consistently delivered value through:
              </p>

              <ul className="list-none space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">•</span>
                  <span className="text-gray-600">Strategic financial planning and comprehensive budget management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">•</span>
                  <span className="text-gray-600">Advanced variance analysis and cost optimization strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">•</span>
                  <span className="text-gray-600">Development of automated reporting systems and financial dashboards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 text-2xl">•</span>
                  <span className="text-gray-600">Cross-functional collaboration with senior stakeholders</span>
                </li>
              </ul>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I hold an <span className="font-semibold text-navy">MBA in Finance</span> and am certified by NISM in Equity Derivatives and Research Analysis. My analytical mindset, combined with strong technical proficiency in financial modeling and reporting tools, enables me to deliver measurable results that drive business growth.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Beyond numbers and spreadsheets, I am passionate about mentoring teams, fostering a culture of continuous improvement, and leveraging technology to solve complex financial challenges. I believe in the power of strategic financial planning to transform businesses and create sustainable value.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-navy">
              Professional Skills
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1} direction="left">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-gold">
                  Technical Skills
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Financial Modeling & Forecasting</li>
                  <li>• Advanced Excel & VBA</li>
                  <li>• Power BI & Tableau</li>
                  <li>• SAP & Oracle Financial Systems</li>
                  <li>• SQL & Data Analysis</li>
                  <li>• Process Automation</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-gold">
                  Core Competencies
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Strategic Financial Planning</li>
                  <li>• Budget Management & Control</li>
                  <li>• Variance Analysis</li>
                  <li>• Stakeholder Management</li>
                  <li>• Business Partnering</li>
                  <li>• Team Leadership</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
