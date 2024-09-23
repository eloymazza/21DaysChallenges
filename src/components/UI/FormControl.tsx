import { FC } from 'react'

type FormControlProps = {
  children: React.ReactNode
}

const FormControl: FC<FormControlProps> = ({ children }) => {
  return <div className="flex flex-col gap-1.5">{children}</div>
}

export default FormControl
