import { Metadata } from 'next'
import { PageSection } from '../PageSection'

export const metadata: Metadata = {
  title: 'maribe | orçamento',
}

export default function Sobre() {
  return (
    <>
      <PageSection
        title="vamos começar o seu projeto juntos!"
        description="bem-vindo(a) ao nosso mundo de possibilidades! estamos ansiosos para criarmos juntos o seu projeto dos sonhos. cada detalhe será pensado de acordo com sua personalidade e memórias afetivas, transformando casas em lares únicos, cheios de significado e com muito aconchego. para que isso seja possível precisamos de algumas informações para entender melhor suas necessidades, você pode preencher essas informações no formulário a seguir. esperamos que você ame a jornada na nossa empresa."
      />
    </>
  )
}
