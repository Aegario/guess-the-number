import { FC } from 'react'

interface Props {
  items: string[]
}

export const Head: FC<Props> = ({ items }) => {
  return (
    <tr className="h-4 text-xs">
      {items.map(item => (
        <th className="py-0.5">{item}</th>
      ))}
    </tr>
  )
}
