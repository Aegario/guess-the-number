import { FC } from 'react'
import { Badge } from 'components'
import { RibbonIcon, PersonIcon, ClockIcon } from 'icons'
import { useTime } from 'hooks'

interface Props {}

export const AdditionalInfo: FC<Props> = () => {
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
