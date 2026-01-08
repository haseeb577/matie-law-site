'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What tax services do you provide?',
      answer: 'We handle all aspects of Income Tax and Sales Tax litigation, tax compliance advisory, tax refunds, and representation before the Federal Board of Revenue (FBR), appellate authorities, and courts. We also guide clients through tax notices, audits, and appeal processes.',
    },
    {
      question: 'Do I need legal representation for FBR notices or disputes?',
      answer: 'While basic returns can be filed independently, clients often require professional support when facing notices, audits, or disputes with FBR. A qualified tax litigation advocate helps navigate complex law, protect your interests, and respond effectively to government authorities.',
    },
    {
      question: 'Can you help with corporate and regulatory services?',
      answer: 'Yes. In addition to tax litigation, we assist with SECP company registration, firm and partnership registration, trade mark registration, and all business and regulatory licences needed to run your enterprise.',
    },
    {
      question: 'What is involved in tax litigation?',
      answer: 'Tax litigation includes representing clients in appeals and disputes before FBR, Commissioner (Appeals), Appellate Tribunal, and relevant courts. This includes preparation of legal submissions, responses to audit findings, and advocacy to secure favourable outcomes.',
    },
    {
      question: 'How do tax refunds work?',
      answer: 'Tax refunds arise when you have paid excess tax or qualify for refund under relevant provisions. We help prepare and submit refund claims, follow up with the authorities, and handle any related dispute or appeal to ensure proper recovery.',
    },
    {
      question: 'What support do you offer for international clients?',
      answer: 'We provide remote legal and administrative support for international clients, including compliance guidance, tax advisory, and corporate services tailored to cross border engagements.',
    },
    {
      question: 'Do you assist with Federal Tax Ombudsman (FTO) complaints?',
      answer: 'Yes. We help clients file and pursue complaints with the Federal Tax Ombudsman (FTO) in cases of maladministration, unjust treatment, or procedural irregularities by tax authorities.',
    },
    {
      question: 'What happens if I miss filing deadlines or get a notice?',
      answer: 'Failing to file returns or respond to notices can lead to penalties, additional assessments, or litigation. We assist in filing late returns, drafting replies to notices, and representing clients to mitigate risks and resolve issues.',
    },
    {
      question: 'How do I start working with The Gavel Legal Services?',
      answer: 'You can contact us by Call or WhatsApp at +92 323 666 1110 or send your inquiry through our website contact form. We will arrange a detailed consultation to understand your tax or legal needs.',
    },
    {
      question: 'What documents should I prepare for a tax consultation?',
      answer: 'Bring copies of your tax returns, notices from FBR, audit reports, NTN/STRN details, company documents, and any correspondence with authorities. These help us assess your situation accurately and provide effective advice.',
    },
  ]

  const whyChooseUs = [
    {
      title: 'Proven Results',
      description: 'With a 97% success rate and millions processed in client refunds, we have a proven track record of delivering results that matter.',
      icon: '📊',
    },
    {
      title: 'Comprehensive Services',
      description: 'From tax preparation to refunds, we offer a complete suite of financial services under one roof.',
      icon: '📋',
    },
    {
      title: 'Customer-First Approach',
      description: 'Every decision we make is centered around providing the best possible experience and outcomes for our clients.',
      icon: '👥',
    },
    {
      title: 'Nationwide Coverage',
      description: 'Serving across Pakistan with consistent, high-quality service regardless of your location.',
      icon: '🗺️',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-custom via-gray-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold mb-4">
              Established 2015
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              10+ YEARS OF <span className="text-gold-600">FINANCIAL EXCELLENCE</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              The Gavel Legal Services has been delivering professional tax litigation and advisory 
              services across Pakistan since 2015. With a strong focus on Income Tax, Sales Tax, 
              regulatory compliance, and corporate legal matters, the firm is committed to strategic, 
              results-driven solutions and maintaining the highest standards of professional integrity 
              and client trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Story
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded with a vision to redefine tax and legal services in Pakistan
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 italic">
                &ldquo;To provide expert tax and legal solutions that transform challenges into opportunities, 
                ensuring compliance, growth, and success for our clients across Pakistan.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-custom rounded-xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming Tax & Legal Services
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Since 2015, The Gavel Legal Services has been at the forefront of professional tax 
                litigation and legal advisory. What began as a focused tax consultancy has grown 
                into a full-service legal and corporate solutions provider, serving clients nationwide.
              </p>
              <p>
                Our commitment to excellence, precision, and strategic guidance ensures clients 
                receive optimal outcomes in tax disputes, compliance, corporate registrations, and 
                regulatory matters.
              </p>
              <p>
                Today, we continue to expand our services while staying true to our mission: to 
                empower clients with expert legal guidance, effective tax solutions, and unwavering 
                support across Pakistan.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-custom to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Gavel Legal Services?
            </h2>
            <p className="text-lg text-gray-600">
              Our track record speaks for itself, but here&apos;s what sets us apart from the competition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions (FAQs)
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gray-custom rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-200 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <span className="text-gold-600 text-xl flex-shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 text-gray-700"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gold-100 mb-6">
              Our experienced team is ready to provide personalized assistance with your tax needs. 
              Contact us today for expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+923236661110"
                className="bg-white hover:bg-gray-50 text-gold-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                +92-323-6661110
              </a>
              <a
                href="https://wa.me/923236661110"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-700 hover:bg-gold-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Send Message
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

