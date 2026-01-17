'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-custom via-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="inline-block px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold">
                  Established 2015
                </span>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Serving Clients Worldwide
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Pakistan&apos;s Trusted{' '}
                <span className="text-gold-600">Tax Litigation</span> &{' '}
                <span className="text-gold-600">Consultancy Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Providing professional tax litigation and advisory services across Pakistan since 2015. 
                We specialize in Income Tax and Sales Tax litigation, tax refunds, and representation 
                before FBR, appellate authorities, and courts, along with comprehensive corporate, 
                regulatory, and international support services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://wa.me/923236661110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl text-center"
                >
                  📞 Call: +92-339-2007160 | WhatsApp: +92-323-6661110
                </a>
            <Link
              href="/quote"
              className="bg-white hover:bg-gray-50 text-gold-600 border-2 border-gold-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl text-center"
            >
              Get Free Quote
            </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Millions Trust Gavel Legal Services
                  </h3>
                  <p className="text-gray-700 mb-6">
                    With over 10 years of experience and millions in processed refunds, 
                    we&apos;re your trusted partner for tax preparation and financial services.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gold-50 rounded-lg">
                      <div className="text-3xl font-bold text-gold-600">10+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-gold-50 rounded-lg">
                      <div className="text-3xl font-bold text-gold-600">97%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                  <Link
                    href="/services"
                    className="block w-full bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
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
              Why Millions Trust Gavel Legal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With over 10 years of experience and millions in processed refunds, 
              we&apos;re your trusted partner for tax preparation and financial services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Results',
                description: 'With a 97% success rate and millions processed in client refunds, we have a proven track record of delivering results that matter.',
                icon: '✓',
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
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-custom p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
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
              Get Started
            </h2>
            <p className="text-xl text-gold-100 mb-8">
              Professional legal consultation for tax, corporate, regulatory, and international 
              support matters — contact us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/calculator"
                className="bg-white hover:bg-gray-50 text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Tax Calculator
              </Link>
              <a
                href="https://wa.me/923236661110"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-800 hover:bg-gold-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tax Calculator CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-custom to-gray-100 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Estimate Your Monthly and Yearly Income Tax
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore financing options and quickly estimate your Tax
            </p>
            <Link
              href="/calculator"
              className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Use Tax Calculator
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

