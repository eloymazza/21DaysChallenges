import { FC } from 'react'
import WithStroke from '../HOCs/WithStroke'

type PageTitleProps = {
  children: React.ReactNode
}

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return (
    <WithStroke>
      <h2 className="text-contrastText-light text-3xl font-bold">{children}</h2>
    </WithStroke>
  )
}

export default PageTitle
