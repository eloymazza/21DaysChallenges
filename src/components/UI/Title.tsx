import { FC } from 'react'

type TitleProps = {
  children: React.ReactNode
}

const Title: FC<TitleProps> = ({ children }) => <h1 className="text-center text-4xl">{children}</h1>

export default Title
