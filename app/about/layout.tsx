import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Gavel Legal Services',
  description: 'Learn about Gavel Legal Services - 10+ years of financial excellence. Professional tax litigation and advisory services across Pakistan since 2015.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

