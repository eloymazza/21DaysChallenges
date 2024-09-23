import classNames from 'classnames'
import { FC } from 'react'
import IconButton from './IconButton'
import CrossIcon from '../../assets/icons/cross.svg'

type ModalProps = {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}

const Modal: FC<ModalProps> = ({ children, open, onClose }) => {
  const handleOverlayClick = () => {
    onClose()
  }

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div
      className={classNames(
        'fixed left-0 top-0 z-0 flex h-dvh w-dvw cursor-pointer items-center justify-center bg-gray-500/50',
        {
          hidden: !open,
          block: open,
        }
      )}
      onClick={handleOverlayClick}
    >
      <div className="relative z-10" onClick={handleContentClick}>
        <div className="absolute right-2 top-3 z-30 flex">
          <IconButton size="md" onClick={onClose}>
            <CrossIcon />
          </IconButton>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
