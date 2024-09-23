import classNames from 'classnames'
import { FC } from 'react'

type IconButtonProps = {
  children: React.ReactNode
  width?: string
  height?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const IconButton: FC<IconButtonProps> = ({ children, type = 'button', size = 'md', className, onClick }) => {
  const configClasses = classNames({
    'w-4 h-4': size === 'xs',
    'w-5 h-5': size === 'sm',
    'w-6 h-6': size === 'md',
    'w-10 h-10': size === 'lg',
    'w-12 h-12': size === 'xl',
  })
  return (
    <button type={type} className={classNames(configClasses, className)} onClick={onClick}>
      {children}
    </button>
  )
}

export default IconButton
