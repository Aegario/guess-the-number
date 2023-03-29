import React, { FC } from 'react'
import { ManualNumberInput } from './ManualNumberInput'

interface Props {}

export const Controls: FC<Props> = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="grow">
          <ManualNumberInput variation={25} initialValue={100} label="Points" />
        </div>
        <div className="ml-3 grow">
          <ManualNumberInput
            variation={0.25}
            initialValue={1.5}
            label="Multiplier"
          />
        </div>
      </div>
    </div>
  )
}
