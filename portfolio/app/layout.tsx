import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Piyush Molawade - Data Analyst & Full Stack Developer',
  description: 'Portfolio of Piyush Sunil Molawade - Data Analyst specializing in RFM Analysis, Machine Learning, and Data Visualization',
  keywords: ['Data Analyst', 'Full Stack Developer', 'Portfolio', 'Piyush Molawade', 'RFM Analysis', 'Machine Learning'],
  authors: [{ name: 'Piyush Sunil Molawade' }],
  openGraph: {
    title: 'Piyush Molawade - Data Analyst & Full Stack Developer',
    description: 'Portfolio of Piyush Sunil Molawade',
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
      <body className="antialiased">{children}</body>
    </html>
  )
}
