import { FC } from 'react'
import { Chart } from './Chart'
import { AdditionalInfo } from './AdditionalInfo'

interface Props {}

export const View: FC<Props> = () => {
  return (
    <>
      <AdditionalInfo />
      <Chart />
    </>
  )
}
