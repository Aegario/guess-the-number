import { FC } from 'react'
import classNames from 'classnames'

interface Props {
  items: (number | string)[]
  isSpecialRow: boolean
}

export const Row: FC<Props> = ({ items, isSpecialRow }) => {
  return (
    <tr
      className={classNames({
        'bg-gray-500': isSpecialRow,
        'bg-gray-700 even:bg-gray-800': !isSpecialRow,
      })}
    >
      {items.map(item => (
        <td className="h-10 text-center">{item}</td>
      ))}
    </tr>
  )
}
