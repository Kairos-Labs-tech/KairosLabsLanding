import './globals.css'
import { Masthead } from '@/components/Masthead'
import { Colophon } from '@/components/Colophon'

export const metadata = {
  title: 'Kairos Labs — Complexity should live inside systems, not inside people.',
  description:
    'Kairos Labs is an independent product laboratory building WaveCraft (audio intelligence), CiteWeave (knowledge intelligence) and CausalCityAI (urban intelligence). One shared philosophy: complexity belongs inside software, not inside people.',
  openGraph: {
    type: 'website',
    title: 'Kairos Labs — Complexity should live inside systems, not inside people.',
    description:
      'Three products. One philosophy. An independent product laboratory inviting criticism and collaboration. Good criticism saves years.',
    siteName: 'Kairos Labs',
  },
  twitter: {
    card: 'summary',
    title: 'Kairos Labs — Complexity should live inside systems, not inside people.',
    description:
      'An independent product laboratory inviting criticism and collaboration. We\'re looking for perspective, not validation.',
  },
}

export const viewport = {
  themeColor: '#100A12',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3E%3Crect%20width='64'%20height='64'%20fill='%23100A12'/%3E%3Ctext%20x='32'%20y='48'%20font-family='Georgia,serif'%20font-size='46'%20fill='%23EAE0D5'%20text-anchor='middle'%3E%CE%BA%3C/text%3E%3C/svg%3E"
        />
      </head>
      <body id="top">
        <a className="skip-link" href="#main">Skip to content</a>
        <Masthead />
        <main id="main">{children}</main>
        <Colophon />
      </body>
    </html>
  )
}
