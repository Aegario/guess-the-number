import { FC } from 'react'
import { ArrowUpIcon, ArrowDownIcon } from 'icons'

export enum ButtonType {
  Increase,
  Decrease,
}
interface Props {
  onClick: () => void
  type: ButtonType
}

export const ArrowButton: FC<Props> = ({ onClick, type }) => {
  return (
    <button
      className="flex h-[26px]  max-w-[26px] flex-grow items-center
      justify-center rounded-lg border-2 border-slate-600"
      onClick={onClick}
    >
      {type == ButtonType.Increase ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </button>
  )
}
