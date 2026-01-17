import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog & Articles - Gavel Legal Services',
  description: 'Stay informed with our latest articles on Pakistani tax law, legal updates, and compliance guidance.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

