import { cloneElement, FC, ReactElement } from 'react'

type WithStrokeProps = {
  children: ReactElement
}

const WithStroke: FC<WithStrokeProps> = ({ children }) => {
  const styles = { WebkitTextStroke: '1px black' }
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
