import React, { FC } from 'react'
import { Settings } from './Settings'
import { View } from './View'

interface Props {}

export const GameBoard: FC<Props> = () => {
  return (
    <div className="flex">
      <div className="grow">
        <Settings />
      </div>
      <div className="ml-3 grow-[4]">
        <View />
      </div>
    </div>
  )
}
