import { FC } from 'react'
import classNames from 'classnames'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  customClassNames?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick = () => {},
  customClassNames = '',
  type = 'button',
}) => {
  const extraClasses = classNames(
    {
      'bg-primary': variant === 'primary',
      'bg-secondary': variant === 'secondary',
      'bg-danger': variant === 'danger',
      'text-sm': size === 'sm',
      'text-lg p-3': size === 'md',
      'text-xl': size === 'lg',
    },
    customClassNames
  )

  return (
    <button
      className={classNames(
        's text-contrastText-light rounded-md p-2 hover:bg-primary-light active:bg-primary-dark',
        extraClasses
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
