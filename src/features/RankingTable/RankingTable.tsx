import { FC, useEffect, useState } from 'react'
import { Head, Row, Table, Title } from 'components'
import { RankingIcon } from 'icons'
import { RANKING_ENTRIES } from 'mock/rankingEntries'

const TABLE_HEADER = 'Ranking'
const HEADER_ITEMS = ['No.', 'Name', 'Total Points']

interface Props {}

export const RankingTable: FC<Props> = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 1000)
  }, [])

  return (
    <div>
      <Title icon={<RankingIcon />} text={TABLE_HEADER} />
      <Table
        head={<Head items={HEADER_ITEMS} />}
        body={
          <>
            {RANKING_ENTRIES.map(entry => {
              const isYou = false
              const cells = [
                showContent ? entry.placement : '-',
                showContent ? entry.name : '-',
                showContent ? entry.totalPoints : '-',
              ]
              return <Row key={entry.id} items={cells} isSpecialRow={isYou} />
            })}
          </>
        }
      />
    </div>
  )
}
