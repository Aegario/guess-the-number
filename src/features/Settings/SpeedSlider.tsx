import { ChangeEvent, FC, useState } from 'react'
import classNames from 'classnames'
import { Title } from 'components'
import { SpeedIcon } from 'icons'

const TITLE = 'Speed'
const RANGE = [1, 2, 3, 4, 5]

interface Props {}

export const SpeedSlider: FC<Props> = () => {
  const [rangeValue, setRangeValue] = useState(1)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = +e.target.value
    setRangeValue(val)
  }

  return (
    <>
      <Title text={TITLE} icon={<SpeedIcon />} />
      <div className="border-def flex h-16 flex-col items-center justify-end bg-gray-800 px-4">
        <input
          type="range"
          onChange={handleChange}
          value={rangeValue}
          className="h-1 w-full"
          min={1}
          step={0.05}
          max={5}
        />

        {/* datalist is not used because it causes weird pop up behaviour */}
        <div className="flex w-full justify-between pb-2 pt-3 text-xs">
          {RANGE.map(rangeItem => {
            const isActive = rangeValue >= rangeItem
            return (
              <span
                key={rangeItem}
                className={classNames('font-semibold', {
                  'text-pink-600': isActive,
                })}
              >
                {rangeItem}x
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}
