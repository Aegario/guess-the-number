import { FC, ReactElement } from 'react'
import { Title } from 'components/Title/Title'

interface Props {
  head: ReactElement
  body: ReactElement
}

export const Table: FC<Props> = ({ head, body }) => {
  return (
    <table
      className="w-full table-fixed border-separate border-spacing-0
        overflow-hidden rounded-lg border-2 border-gray-700"
    >
      <thead>{head}</thead>
      <tbody>{body}</tbody>
    </table>
  )
}
