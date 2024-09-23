import { FC } from 'react'
import Label from './Label'

type LabeledCheckboxProps = {
  name: string
  label: string
  labelClassName?: string
  // checked?: boolean
}

const LabeledCheckbox: FC<LabeledCheckboxProps> = ({ name, label, labelClassName }) => {
  return (
    <div className="flex items-center gap-2 px-1">
      <input type="checkbox" name={name} id={name} className="checkbox" />
      <Label htmlFor={name} className={labelClassName}>
        {label}
      </Label>
    </div>
  )
}

export default LabeledCheckbox
