'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Quote() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    registrationNumber: '',
    taxType: 'Income Tax',
  })

  const [estimatedRefund, setEstimatedRefund] = useState<number | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsCalculating(true)
    
    // Simulate calculation (in a real app, this would call an API)
    setTimeout(() => {
      // Mock calculation - in real app, this would be based on actual tax calculations
      const mockRefund = Math.floor(Math.random() * 50000) + 10000
      setEstimatedRefund(mockRefund)
      setIsCalculating(false)
    }, 1500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Free Tax Quote Request\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRegistration Number/NTN: ${formData.registrationNumber}\nTax Type: ${formData.taxType}\n\nEstimated Refund: ${estimatedRefund ? `PKR ${estimatedRefund.toLocaleString()}` : 'Not calculated'}`
    const whatsappUrl = `https://wa.me/923236661110?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

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
              REQUEST YOUR <span className="text-gold-600">FREE TAX QUOTE</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Discover how much you can save on your taxes with our quote. Our expert tax 
              professionals are here to help you maximize your refund in just a few minutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Quote Section */}
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
              Why Choose Our Free Quote?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn how our free tax quote can help you plan your finances with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Instant Estimate',
                description: 'Get an immediate estimate of your potential tax refund in minutes.',
                icon: '⚡',
              },
              {
                title: 'Expert Analysis',
                description: 'Our tax professionals review your information to provide accurate estimates.',
                icon: '📊',
              },
              {
                title: 'No Obligation',
                description: 'Free quote with no commitment required. See your potential savings first.',
                icon: '✓',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-custom p-6 rounded-xl text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-gradient-to-br from-gray-custom to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Free Refund Estimate
              </h2>
              <p className="text-lg text-gray-600">
                Get an instant estimate of your potential tax refund
              </p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="+92 300 1234567"
                />
              </div>

              <div>
                <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Registration Number/NTN *
                </label>
                <input
                  type="text"
                  id="registrationNumber"
                  name="registrationNumber"
                  required
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your NTN or Registration Number"
                />
              </div>

              <div>
                <label htmlFor="taxType" className="block text-sm font-medium text-gray-700 mb-2">
                  Income Tax/Sales Tax *
                </label>
                <select
                  id="taxType"
                  name="taxType"
                  required
                  value={formData.taxType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="Income Tax">Income Tax</option>
                  <option value="Sales Tax">Sales Tax</option>
                  <option value="Both">Both</option>
                </select>
              </div>

              {estimatedRefund && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-gold-50 to-gold-100 border-2 border-gold-300 rounded-xl p-6 text-center"
                >
                  <p className="text-sm text-gray-600 mb-2">Estimated Refund</p>
                  <p className="text-4xl font-bold text-gold-700">
                    PKR {estimatedRefund.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    *This is an estimate. Actual refund may vary based on detailed review.
                  </p>
                </motion.div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isCalculating}
                  className="flex-1 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-300 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate My Refund'}
                </button>
                
                {estimatedRefund && (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 bg-gold-700 hover:bg-gold-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Get Full Quote via WhatsApp
                  </button>
                )}
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to receive communications from Gavel Legal Services. 
                Your information will be kept confidential and used only for tax quote purposes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need More Information?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our tax professionals are ready to provide personalized assistance with your tax needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+923236661110"
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Call Us: +92 323 666 1110
              </a>
              <a
                href="https://wa.me/923236661110"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-gold-600 border-2 border-gold-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

