'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Tax Preparation Services',
      description: 'Comprehensive tax filing for individuals and businesses with maximum IRS-allowed refunds guaranteed.',
      features: [
        'Individual and business tax returns',
        'Maximum IRS-allowed refunds guaranteed',
        'E-filing with fast processing',
        'Audit assistance included',
        'Amendment and correction services',
      ],
      icon: '📋',
    },
    {
      title: 'Income Tax & Sales Tax Returns',
      description: 'Professional filing and management of all tax returns.',
      icon: '📊',
    },
    {
      title: 'Litigation',
      description: 'Expert representation in tax disputes and appeals.',
      icon: '⚖️',
    },
    {
      title: 'Tax Refunds, Compliance & Advisory',
      description: 'Comprehensive tax refund services and compliance advisory.',
      icon: '💰',
    },
    {
      title: 'Representation before FBR & Courts',
      description: 'Professional representation before Federal Board of Revenue and courts.',
      icon: '🏛️',
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
    {
      title: 'Remote Legal & Administrative Support',
      description: 'Remote legal and administrative support for international clients.',
      icon: '🌐',
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
              <span className="text-gold-600">SERVICES</span>
            </h1>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              COMPLETE FINANCIAL SERVICES
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              From tax preparation to refunds, we offer comprehensive financial services to help 
              you maximize your money and improve your financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/923236661110"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </a>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-50 text-gold-600 border-2 border-gold-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Compare Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Service - Tax Preparation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="text-5xl">{services[0].icon}</div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {services[0].title}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {services[0].description}
                </p>
                <ul className="space-y-3">
                  {services[0].features?.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gold-600 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Other Services Grid */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              OTHER SERVICES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(1).map((service, index) => (
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
      <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-600">
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
                className="bg-gold-700 hover:bg-gold-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
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

