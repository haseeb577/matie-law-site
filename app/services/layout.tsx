import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Gavel Legal Services',
  description: 'Complete financial services including tax preparation, litigation, refunds, and corporate services.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

