import { FC } from 'react'
import classNames from 'classnames'

interface Props {
  sender: string
  children: string
  isEven: boolean
}

export const Message: FC<Props> = ({ sender, children, isEven }) => {
  return (
    <div className="flex text-xs">
      <span
        className={classNames('font-bold', {
          'text-orange-400': isEven,
          'text-pink-600': !isEven,
        })}
      >
        {sender}:
      </span>
      <p
        className={classNames('ml-2 rounded-sm px-1', {
          'bg-gray-600': isEven,
          'bg-gray-700': !isEven,
        })}
      >
        {children}
      </p>
    </div>
  )
}
