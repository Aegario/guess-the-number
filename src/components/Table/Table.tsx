import { FC, ReactElement } from 'react'
import { Title } from 'components/Title/Title'

interface Props {
  title: string
  icon: ReactElement
  head: ReactElement
  body: ReactElement
}

export const Table: FC<Props> = ({ title, icon, head, body }) => {
  return (
    <>
      <Title icon={icon} text={title} />
      <table
        className="w-full table-fixed border-separate border-spacing-0
        overflow-hidden rounded-lg border-2 border-gray-700"
      >
        <thead>{head}</thead>
        <tbody>{body}</tbody>
      </table>
    </>
  )
}
