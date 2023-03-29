import { FC } from 'react'
import { Chart } from './Chart'
import { UserInfo } from './UserInfo'

interface Props {}

export const View: FC<Props> = () => {
  return (
    <>
      <UserInfo />
      <Chart />
    </>
  )
}
