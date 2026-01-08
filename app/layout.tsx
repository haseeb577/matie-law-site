import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gavel Legal Services - Pakistan\'s Trusted Tax Litigation & Consultancy',
  description: 'Professional tax litigation and advisory services across Pakistan since 2015. Specializing in Income Tax and Sales Tax litigation, tax refunds, and representation before FBR, appellate authorities, and courts.',
  keywords: 'tax litigation, tax consultancy, FBR, income tax, sales tax, tax refunds, legal services Pakistan, corporate registration, SECP',
  authors: [{ name: 'Gavel Legal Services' }],
  openGraph: {
    title: 'Gavel Legal Services - Pakistan\'s Trusted Tax Litigation & Consultancy',
    description: 'Professional tax litigation and advisory services across Pakistan since 2015.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

