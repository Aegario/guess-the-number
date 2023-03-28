import { FC } from 'react'
import { Button } from 'components'
import { Controls } from './Controls'
import { RoundStatisticsTable } from './RoundStatisticsTable'
import { SpeedSlider } from './SpeedSlider'

interface Props {}

export const Settings: FC<Props> = () => {
  const handleStartClick = () => {
    console.log('Started')
  }
  return (
    <>
      <Controls />
      <div className="mt-4">
        <Button onClick={handleStartClick}>Start</Button>
      </div>
      <RoundStatisticsTable />
      <SpeedSlider />
    </>
  )
}
