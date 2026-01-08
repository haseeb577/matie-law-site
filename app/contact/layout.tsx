import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Gavel Legal Services',
  description: 'Get in touch with Gavel Legal Services for professional tax litigation and consultancy services. Quick response, nationwide service.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

