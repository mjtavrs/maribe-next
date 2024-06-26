import { ComponentProps } from 'react'

type PageContainerProps = ComponentProps<'div'>

export function PageContainer({ ...props }: PageContainerProps) {
  return <div {...props} className="mx-60" />
}
