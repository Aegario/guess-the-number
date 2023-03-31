import { FC } from 'react'

interface Props {
  onClick?: () => void
  children: string
  disabled?: boolean
}

export const Button: FC<Props> = ({ onClick, children, disabled = false }) => {
  return (
    <button
      type="submit"
      className="to hover: w-full  rounded-lg from-pink-600
      to-orange-400 py-2.5 font-semibold hover:opacity-90
      enabled:bg-gradient-to-r disabled:bg-gray-600"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
