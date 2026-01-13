import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Piyush Molawade - Data Analyst & Full Stack Developer',
  description: 'Portfolio of Piyush Sunil Molawade - Data Analyst specializing in RFM Analysis, Machine Learning, and Data Visualization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
