import { FC } from 'react'

interface Props {
  onClick: () => void
  children: string
}

export const Button: FC<Props> = ({ onClick, children }) => {
  return (
    <button
      className="to w-full rounded-lg bg-gradient-to-r from-pink-600 to-orange-400 py-2.5"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
