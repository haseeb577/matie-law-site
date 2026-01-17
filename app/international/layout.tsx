import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'International Clients - Gavel Legal Services',
  description: 'Legal & Tax Representation in Pakistan for International Clients. Serving overseas Pakistanis, foreign companies, and international consultants.',
}

export default function InternationalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

