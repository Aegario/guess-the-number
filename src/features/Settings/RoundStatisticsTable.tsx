import { FC, useEffect, useState } from 'react'
import { Head, Row, Table, Title } from 'components'
import { ROUND_ENTRIES } from 'mock'
import { TrophyIcon } from 'icons'

const TABLE_TITLE = 'Current Round'
const HEADER_ITEMS = ['Name', 'Bet', 'Multiplier']

interface Props {}
export const RoundStatisticsTable: FC<Props> = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 1000)
  }, [])

  return (
    <>
      <Title icon={<TrophyIcon />} text={TABLE_TITLE} />
      <Table
        head={<Head items={HEADER_ITEMS} />}
        body={
          <>
            {ROUND_ENTRIES.map((entry, i) => {
              const isYou = i === 0
              const cells = [
                isYou ? 'You' : entry.name,
                showContent ? entry.points : '-',
                showContent ? entry.multiplier : '-',
              ]
              return <Row key={entry.id} isSpecialRow={isYou} items={cells} />
            })}
          </>
        }
      />
    </>
  )
}
