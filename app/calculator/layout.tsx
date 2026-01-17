import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pakistan Income Tax Calculator - Gavel Legal Services',
  description: 'Calculate your income tax liability under Income Tax Ordinance, 2001. Free Pakistan tax calculator.',
}

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

