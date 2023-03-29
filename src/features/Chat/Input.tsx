import { ChangeEvent, FC } from 'react'
import { Button } from 'components'

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const Input: FC<Props> = ({ onChange, value }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-4/5 rounded-lg bg-gray-800 px-2 text-xs font-bold focus:outline-none"
    />
  )
}
