'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Calculator() {
  const [income, setIncome] = useState('')
  const [taxYear, setTaxYear] = useState('2024')
  const [result, setResult] = useState<any>(null)

  const calculateTax = () => {
    const annualIncome = parseFloat(income) || 0
    
    if (annualIncome <= 0) {
      alert('Please enter a valid income amount')
      return
    }

    // Pakistan Tax Slabs for 2024 (simplified calculation)
    // Based on Income Tax Ordinance 2001
    let tax = 0
    let remainingIncome = annualIncome

    // Slab 1: Up to 600,000 - 0%
    if (remainingIncome <= 600000) {
      tax = 0
    } else {
      remainingIncome -= 600000
      
      // Slab 2: 600,001 to 1,200,000 - 2.5%
      if (remainingIncome <= 600000) {
        tax = remainingIncome * 0.025
      } else {
        tax = 600000 * 0.025
        remainingIncome -= 600000
        
        // Slab 3: 1,200,001 to 2,400,000 - 12.5%
        if (remainingIncome <= 1200000) {
          tax += remainingIncome * 0.125
        } else {
          tax += 1200000 * 0.125
          remainingIncome -= 1200000
          
          // Slab 4: 2,400,001 to 3,600,000 - 20%
          if (remainingIncome <= 1200000) {
            tax += remainingIncome * 0.20
          } else {
            tax += 1200000 * 0.20
            remainingIncome -= 1200000
            
            // Slab 5: 3,600,001 to 6,000,000 - 25%
            if (remainingIncome <= 2400000) {
              tax += remainingIncome * 0.25
            } else {
              tax += 2400000 * 0.25
              remainingIncome -= 2400000
              
              // Slab 6: Above 6,000,000 - 32.5%
              tax += remainingIncome * 0.325
            }
          }
        }
      }
    }

    const netIncome = annualIncome - tax
    const effectiveRate = (tax / annualIncome) * 100

    setResult({
      annualIncome,
      tax,
      netIncome,
      effectiveRate,
    })
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
              Pakistan <span className="text-gold-600">Income Tax Calculator</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Calculate your income tax liability under Income Tax Ordinance, 2001. 
              This is an estimate based on current tax slabs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-custom rounded-2xl p-8 md:p-12"
          >
            <div className="mb-8">
              <label htmlFor="taxYear" className="block text-sm font-medium text-gray-700 mb-2">
                Tax Year
              </label>
              <select
                id="taxYear"
                value={taxYear}
                onChange={(e) => setTaxYear(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-600 focus:border-transparent outline-none"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-2">
                Annual Income (PKR) *
              </label>
              <input
                type="number"
                id="income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="Enter your annual income"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-600 focus:border-transparent outline-none"
              />
            </div>

            <button
              onClick={calculateTax}
              className="w-full bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Calculate Tax
            </button>

            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 bg-white rounded-xl p-8 border-2 border-gold-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Tax Calculation Results
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Annual Income:</span>
                    <span className="text-gray-900 font-bold">
                      PKR {result.annualIncome.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Tax Payable:</span>
                    <span className="text-red-600 font-bold text-xl">
                      PKR {result.tax.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Net Income:</span>
                    <span className="text-green-600 font-bold text-xl">
                      PKR {result.netIncome.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gold-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Effective Tax Rate:</span>
                    <span className="text-gold-700 font-bold">
                      {result.effectiveRate.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Tax Slabs Info */}
      <section className="py-16 bg-gray-custom">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Income Tax Slabs (Tax Year 2024)
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>Up to PKR 600,000</span>
                <span className="font-semibold">0%</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>PKR 600,001 - 1,200,000</span>
                <span className="font-semibold">2.5%</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>PKR 1,200,001 - 2,400,000</span>
                <span className="font-semibold">12.5%</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>PKR 2,400,001 - 3,600,000</span>
                <span className="font-semibold">20%</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>PKR 3,600,001 - 6,000,000</span>
                <span className="font-semibold">25%</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>Above PKR 6,000,000</span>
                <span className="font-semibold">32.5%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              * This calculator provides an estimate based on standard tax slabs. Actual tax liability 
              may vary based on deductions, exemptions, and other factors. Please consult with a tax 
              professional for accurate calculations.
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
              Need Professional Tax Advice?
            </h2>
            <p className="text-xl text-gold-100 mb-8">
              Contact us for accurate tax calculations and professional tax services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/923236661110"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="bg-gold-800 hover:bg-gold-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

