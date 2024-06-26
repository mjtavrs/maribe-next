import type { Metadata } from 'next'
import './globals.css'
import { sourceCodePro400 } from './styles/fonts'
import { Footer } from './Footer'
import { Header } from './Header'
import { PageContainer } from './components/Pages/PageContainer'

export const metadata: Metadata = {
  authors: [{ name: 'Marcos Tavares' }],
  keywords: [
    'maribe',
    'maribe arquitetura',
    'arquitetura',
    'design de interiores',
    'arquitetura comercial',
    'neuroarquitetura',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${sourceCodePro400.className} min-h-full bg-maribePrimary-begeDelicado text-maribeSecundary-cinzaElegante`}
      >
        <Header />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </body>
    </html>
  )
}
