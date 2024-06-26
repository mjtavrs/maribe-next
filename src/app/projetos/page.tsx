import { Metadata } from 'next'
import { PageSection } from '../PageSection'

export const metadata: Metadata = {
  title: 'maribe | projetos',
}

export default function Sobre() {
  return (
    <>
      <PageSection
        title="nossos projetos"
        description="aqui você encontra alguns dos nossos projetos, esperamos que você goste e que possamos incluir um espaço aqui para o seu projeto no futuro! 🧡"
      />
    </>
  )
}
