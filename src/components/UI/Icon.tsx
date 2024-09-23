import classNames from 'classnames'
import { FC } from 'react'

type IconProps = {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const Icon: FC<IconProps> = ({ children, size = 'md', className }) => {
  const configClassNames = classNames({
    'w-4 h-4': size === 'xs',
    'w-5 h-5': size === 'sm',
    'w-6 h-6': size === 'md',
    'w-10 h-10': size === 'lg',
    'w-12 h-12': size === 'xl',
  })

  return <div className={classNames(configClassNames, className)}>{children}</div>
}

export default Icon
