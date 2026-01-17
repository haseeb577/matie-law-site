'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Blog() {
  // Placeholder articles - user can add real content later
  const articles = [
    {
      title: 'Understanding Income Tax Ordinance 2001 in Pakistan',
      excerpt: 'A comprehensive guide to Income Tax Ordinance 2001 and its implications for taxpayers in Pakistan.',
      date: '2024-01-15',
      category: 'Taxation',
    },
    {
      title: 'FBR Notices: How to Respond Effectively',
      excerpt: 'Learn how to properly respond to FBR notices and protect your rights as a taxpayer.',
      date: '2024-01-10',
      category: 'Tax Compliance',
    },
    {
      title: 'Tax Filing for Overseas Pakistanis',
      excerpt: 'Complete guide on tax obligations and filing requirements for Pakistanis living abroad.',
      date: '2024-01-05',
      category: 'International',
    },
    {
      title: 'Sales Tax Act 1990: Key Provisions',
      excerpt: 'Understanding the Sales Tax Act 1990 and compliance requirements for businesses.',
      date: '2023-12-28',
      category: 'Taxation',
    },
    {
      title: 'ATIR Appeals: Process and Procedures',
      excerpt: 'Step-by-step guide to filing appeals before the Appellate Tribunal Inland Revenue.',
      date: '2023-12-20',
      category: 'Litigation',
    },
    {
      title: 'SECP Company Registration: Complete Guide',
      excerpt: 'Everything you need to know about registering a company with SECP in Pakistan.',
      date: '2023-12-15',
      category: 'Corporate',
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
              <span className="text-gold-600">BLOG</span> & ARTICLES
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Stay informed with our latest articles on Pakistani tax law, legal updates, and compliance guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-custom rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link
                    href="#"
                    className="text-gold-600 hover:text-gold-700 font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 bg-gray-custom">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-l-4 border-gold-600 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Professional Disclaimer (Blog Content)
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The views and information expressed in the blog articles are for general guidance only 
              and are based on Pakistani law as applicable at the time of writing. These articles do 
              not constitute legal opinion or advice. Readers should not act upon the information 
              provided without seeking professional legal advice tailored to their specific circumstances.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

