'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Services() {
  const practiceAreas = [
    {
      title: 'Taxation Laws of Pakistan',
      description: 'Comprehensive tax services under Pakistani tax laws',
      services: [
        'Income Tax (Income Tax Ordinance, 2001)',
        'Sales Tax (Sales Tax Act, 1990)',
        'Federal Excise & PRA / SRB matters',
        'FBR Audits, Notices, Appeals, and Litigation',
        'ATIR, High Court Tax References',
      ],
      icon: '📊',
    },
    {
      title: 'For Overseas Pakistanis',
      description: 'Specialized services for Pakistanis living abroad',
      services: [
        'Tax filing and asset declaration in Pakistan',
        'FBR notices received while residing abroad',
        'Property tax issues in Pakistan',
        'Remittance and foreign income treatment',
        'Representation before FBR without physical presence',
      ],
      icon: '🌍',
    },
    {
      title: 'Corporate & Commercial Advisory',
      description: 'Corporate legal services and compliance',
      services: [
        'Company incorporation (SECP)',
        'Tax structuring for foreign-owned entities',
        'Withholding tax compliance',
        'Cross-border service taxation',
        'Joint ventures and regulatory approvals',
      ],
      icon: '🏢',
    },
    {
      title: 'Litigation & Representation',
      description: 'Expert representation in all tax and legal matters',
      services: [
        'Commissioner Appeals',
        'Appellate Tribunal Inland Revenue (ATIR)',
        'High Court constitutional petitions',
        'Stay of recovery & bank account de-attachments',
      ],
      icon: '⚖️',
    },
  ]

  const otherServices = [
    {
      title: 'Tax Refunds, Compliance & Advisory',
      description: 'Comprehensive tax refund services and compliance advisory.',
      icon: '💰',
    },
    {
      title: 'Federal Tax Ombudsman (FTO) Matters',
      description: 'Assistance with FTO complaints and proceedings.',
      icon: '📝',
    },
    {
      title: 'Trade Mark Registration',
      description: 'Complete trademark registration services.',
      icon: '™️',
    },
    {
      title: 'SECP Company Registration',
      description: 'Corporate registration with Securities and Exchange Commission of Pakistan.',
      icon: '🏢',
    },
    {
      title: 'Firm & Partnership Registration',
      description: 'Registration services for firms and partnerships.',
      icon: '🤝',
    },
    {
      title: 'All Business & Regulatory Licenses',
      description: 'Assistance with all business and regulatory license requirements.',
      icon: '📜',
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gold-600">PRACTICE AREAS</span>
            </h1>
            <div className="w-24 h-1 bg-gold-600 mx-auto mb-8"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Pakistan-Centric but Internationally Relevant
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Professional legal and tax services under Pakistani law, serving clients nationwide and internationally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/923236661110"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </a>
              <Link
                href="/international"
                className="bg-white hover:bg-gray-50 text-gold-600 border-2 border-gold-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                International Clients
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Practice Areas */}
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
              Core Practice Areas
            </h2>
            <p className="text-lg text-gray-600">
              Specialized legal services under Pakistani law
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl p-8 border border-gold-200"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-5xl">{area.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{area.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {area.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gold-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Other Services */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Additional Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-custom p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gold-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gold-100 mb-8">
              Contact us today for expert tax and legal services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/923236661110"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <Link
                href="/about"
                className="bg-gold-800 hover:bg-gold-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
