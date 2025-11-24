"use client";

import AnimatedSection from "../components/AnimatedSection";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-navy to-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-6">
              Get In Touch
            </h1>
            <div className="h-1 w-32 bg-gold mx-auto mb-6"></div>
            <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto">
              Let's discuss how I can help with your financial planning and analysis needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-3xl font-serif font-bold text-navy mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Feel free to reach out for consultations, collaborations, or any inquiries.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                      <Mail size={20} className="text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Email</h3>
                      <a href="mailto:sidhant.pakhare@example.com" className="text-gray-600 hover:text-gold transition-colors">
                        sidhant.pakhare@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                      <Phone size={20} className="text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Phone</h3>
                      <a href="tel:+919876543210" className="text-gray-600 hover:text-gold transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                      <Linkedin size={20} className="text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">LinkedIn</h3>
                      <a href="https://linkedin.com/in/sidhantpakhare" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gold transition-colors">
                        linkedin.com/in/sidhantpakhare
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                      <MapPin size={20} className="text-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">Location</h3>
                      <p className="text-gray-600">Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-serif font-bold text-navy mb-6">
                  Send a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="How can I help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold text-navy font-semibold py-3 rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-200 shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
