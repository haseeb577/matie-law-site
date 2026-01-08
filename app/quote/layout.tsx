import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Tax Quote - Gavel Legal Services',
  description: 'Get a free tax quote and estimate your potential tax refund. Calculate your income tax and sales tax refunds instantly.',
}

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

