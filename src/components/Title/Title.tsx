import { FC, ReactElement } from 'react'

interface Props {
  icon: ReactElement
  text: string
}

export const Title: FC<Props> = ({ icon, text }) => {
  return (
    <div className="flex items-end pl-0.5 pb-2">
      {icon}
      <p className="pl-2 text-lg font-semibold  leading-4">{text}</p>
    </div>
  )
}
