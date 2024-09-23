import classNames from 'classnames'
import { FC } from 'react'

type TextAreaProps = {
  id?: string
  name?: string
  placeholder?: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
  rows?: number
  cols?: number
}

const TextArea: FC<TextAreaProps> = ({
  id = '',
  name = '',
  placeholder = '',
  className = '',
  onChange = () => {},
  value,
  rows = 5,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      className={classNames('input', 'resize-none', className)}
      onChange={onChange}
      value={value}
      rows={rows}
    />
  )
}

export default TextArea
