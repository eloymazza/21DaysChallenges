import classNames from 'classnames'
import { FC } from 'react'

type InputProps = {
  type?: string
  id?: string
  name?: string
  placeholder?: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

const TextInput: FC<InputProps> = ({
  type = 'text',
  id = '',
  name = '',
  placeholder = '',
  className = '',
  onChange = () => {},
  value,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={classNames('input', className)}
      onChange={onChange}
      value={value}
      min={1}
    />
  )
}
export default TextInput
