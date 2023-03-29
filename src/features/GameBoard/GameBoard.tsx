import React, { FC } from 'react'
import { Settings } from './Settings'
import { View } from './View'

interface Props {}

export const GameBoard: FC<Props> = () => {
  return (
    <div className="flex">
      <div className="max-w-[32%] grow">
        <Settings />
      </div>
      <div className="ml-3 grow-[3]">
        <View />
      </div>
    </div>
  )
}
