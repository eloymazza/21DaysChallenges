import classNames from 'classnames'
import { FC } from 'react'

type LabelProps = {
  children: React.ReactNode
  htmlFor?: string
  className?: string
}

const Label: FC<LabelProps> = ({ children, htmlFor, className }) => {
  return (
    <label className={classNames('label', className)} htmlFor={htmlFor}>
      {children}
    </label>
  )
}

export default Label
