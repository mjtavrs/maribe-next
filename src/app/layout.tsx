import type { Metadata } from 'next'
import './globals.css'
import { sourceCodePro400 } from './styles/fonts'
import { Footer } from './Footer'
import { Header } from './Header'

export const metadata: Metadata = {
  title: 'maribe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${sourceCodePro400.className} min-h-full bg-maribePrimary-begeDelicado`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
