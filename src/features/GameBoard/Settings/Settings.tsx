import { FC } from 'react'
import { Controls } from './Controls'
import { RoundStatisticsTable } from './RoundStatisticsTable'
import { SpeedSlider } from './SpeedSlider'

interface Props {}

export const Settings: FC<Props> = () => {
  return (
    <>
      <Controls />
      <RoundStatisticsTable />
      <SpeedSlider />
    </>
  )
}
