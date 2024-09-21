import { FC } from 'react'

type PageSubtitleProps = {
  children: React.ReactNode
}

const PageSubtitle: FC<PageSubtitleProps> = ({ children }) => {
  return <h3 className="text-xl text-white">{children}</h3>
}

export default PageSubtitle
