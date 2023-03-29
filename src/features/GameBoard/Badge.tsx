import { FC, ReactElement } from 'react'

interface Props {
  icon: ReactElement
  value: string
}

export const Badge: FC<Props> = ({ icon, value }) => (
  <div
    className="gradient border-def relative flex h-[3.125rem] w-full
      min-w-[188px] items-center justify-center"
  >
    <div className="absolute top-0 left-0 ml-3 flex h-full items-center">
      {icon}
    </div>

    <p className="text-lg font-semibold">{value}</p>
  </div>
)
