import { ChangeEvent, FC, useState } from 'react'
import { ArrowButton, ButtonType } from './ArrowButton'

const numbersOnlyRegExp = /[^0-9.]/g
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
  const [value, setValue] = useState(initialValue.toString())

  const handleIncrement = () => {
    setValue(val => (+val + variation).toString())
  }

  const handleDecrement = () => {
    setValue(val => {
      const res = +val - variation
      if (res < 0) {
        return '0'
      } else {
        return res.toString()
      }
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(numbersOnlyRegExp, '')
    const numeric = +val

    if (isNaN(numeric)) return

    if (numeric > 0) {
      setValue(val)
    } else {
      setValue(val)
    }
  }

  return (
    <div
      className="gradient h-[3.125rem] min-w-[188px] grow rounded-lg
      border-2 border-gray-700 px-2"
    >
      <p className="text-center text-xs text-slate-400">{label}</p>
      <div className="flex items-center justify-center">
        <ArrowButton onClick={handleDecrement} type={ButtonType.Decrease} />

        <input
          className="mx-2 w-[110px] rounded-lg bg-black px-2 text-center
          text-lg font-bold focus:outline-none"
          type="text"
          value={value}
          onChange={handleChange}
        />

        <ArrowButton onClick={handleIncrement} type={ButtonType.Increase} />
      </div>
    </div>
  )
}
