import { Metadata } from 'next'
import { PageHeader } from '../components/Pages/PageHeader'
import { AboutUs } from './AboutUs'
import { OurLogo } from './OurLogo'

export const metadata: Metadata = {
  title: 'maribe | sobre',
}

export default function Sobre() {
  return (
    <>
      <PageHeader
        title="quem somos"
        description="acreditamos que a arquitetura é capaz de proporcionar qualidade de vida para as pessoas transformando espaços em arte."
      />
      <AboutUs />
      <OurLogo />
    </>
  )
}
