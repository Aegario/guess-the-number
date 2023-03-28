import { FC, useState } from 'react'
import { ArrowButton, ButtonType } from './ArrowButton'

interface Props {
  label: string
  initialValue: number
  variation: number
}

export const ManualNumberInput: FC<Props> = ({
  label,
  initialValue,
  variation,
}) => {
  const [value, setValue] = useState(initialValue)

  const handleIncrement = () => {
    setValue(val => val + variation)
  }
  const handleDecrement = () => {
    setValue(val => val - variation)
  }

  return (
    <div
      className="gradient h-12 min-w-[188px] grow rounded-lg
      border-2 border-gray-700 px-2"
    >
      <p className="text-center text-xs text-slate-400">{label}</p>
      <div className="flex">
        <ArrowButton onClick={handleDecrement} type={ButtonType.Decrease} />

        <div
          className="mx-1 flex w-[64px] flex-grow
          items-center justify-center rounded-lg bg-black"
        >
          <span className="text-lg font-bold">{value}</span>
        </div>

        <ArrowButton onClick={handleIncrement} type={ButtonType.Increase} />
      </div>
    </div>
  )
}
