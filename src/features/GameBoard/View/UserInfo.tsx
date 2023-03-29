import { FC } from 'react'
import { RibbonIcon, PersonIcon, ClockIcon } from 'icons'
import { useTime } from 'hooks'
import { Badge } from './Badge'

interface Props {}

export const UserInfo: FC<Props> = () => {
  const currentTime = useTime()
  return (
    <div className="flex justify-between">
      <div className="grow">
        <Badge icon={<RibbonIcon />} value="1000" />
      </div>
      <div className="ml-3 grow">
        <Badge icon={<PersonIcon />} value="John" />
      </div>
      <div className="ml-3 grow">
        <Badge icon={<ClockIcon />} value={currentTime} />
      </div>
    </div>
  )
}
