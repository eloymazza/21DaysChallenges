import { cloneElement, FC, ReactElement } from 'react'

type WithStrokeProps = {
  children: ReactElement
}

const WithStroke: FC<WithStrokeProps> = ({ children }) => {
  const styles = { WebkitTextStroke: '1px black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }
  const childWithClass = cloneElement(children, {
    className: `${children.props.className || ''} stroke-text`.trim(),
    style: {
      ...children.props.style,
      ...styles,
    },
  })

  return <>{childWithClass}</>
}

export default WithStroke
