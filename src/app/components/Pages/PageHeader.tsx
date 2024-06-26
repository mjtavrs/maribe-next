import { allRoundGothic } from '../../styles/fonts'

interface PageSectionProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageSectionProps) {
  return (
    <div className="my-14 flex flex-col items-center gap-5">
      <h1
        className={`${allRoundGothic.className} text-6xl font-bold text-maribePrimary-vermelhoRecife`}
      >
        {title}
      </h1>
      <p>{description}</p>
    </div>
  )
}
