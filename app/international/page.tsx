'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function International() {
  const services = [
    {
      title: 'Representation before FBR and Tax Authorities',
      description: 'Full representation without requiring your physical presence in Pakistan.',
    },
    {
      title: 'Filing of Tax Returns and Statements',
      description: 'Complete tax filing services for overseas Pakistanis and international clients.',
    },
    {
      title: 'Handling Tax Audits and Assessments',
      description: 'Professional handling of FBR audits and tax assessments remotely.',
    },
    {
      title: 'Appeals before Commissioner (Appeals) and ATIR',
      description: 'Expert representation in all appellate proceedings.',
    },
    {
      title: 'High Court Constitutional Matters',
      description: 'Constitutional petitions and high court representation.',
    },
    {
      title: 'Ongoing Corporate and Tax Compliance',
      description: 'Continuous compliance support for your business in Pakistan.',
    },
  ]

  const communicationFeatures = [
    {
      title: 'Email & Video Consultations',
      description: 'Schedule consultations at your convenience via email or video call.',
      icon: '📧',
    },
    {
      title: 'WhatsApp and Secure Document Exchange',
      description: 'Quick communication and secure document sharing via WhatsApp.',
      icon: '💬',
    },
    {
      title: 'Time-zone Friendly Scheduling',
      description: 'Flexible scheduling to accommodate different time zones.',
      icon: '🕐',
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
            <div className="inline-block px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold mb-4">
              Serving Clients Worldwide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Legal & Tax Representation in Pakistan for{' '}
              <span className="text-gold-600">International Clients</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              We represent overseas Pakistanis, foreign companies, and international consultants 
              in matters governed by Pakistani law. Our firm provides end-to-end legal and tax 
              solutions without requiring clients to be physically present in Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/923236661110"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
              <Link
                href="/services"
                className="bg-white hover:bg-gray-50 text-gold-600 border-2 border-gold-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our International Services Include
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-custom p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gold-300"
              >
                <div className="text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Section */}
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
              Communication Viewed by Global Standards
            </h2>
            <p className="text-lg text-gray-600">
              We understand the needs of international clients and provide seamless communication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communicationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gold-50 border-l-4 border-gold-600 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              International Client Disclaimer
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Gavel Legal Services is a Pakistan-based legal practitioners. Legal services are 
              provided strictly in accordance with the laws of Pakistan. The firm does not practice 
              foreign law and does not hold itself out as qualified in any jurisdiction other than 
              Pakistan. International clients are advised on Pakistan-related legal and tax matters only.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gold-600 to-gold-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gold-100 mb-8">
              Contact us today for expert legal and tax representation in Pakistan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/923236661110"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                WhatsApp Us
              </a>
              <a
                href="mailto:gavellegalservices@gmail.com"
                className="bg-gold-800 hover:bg-gold-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

