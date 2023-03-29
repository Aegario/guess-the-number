import { FC } from 'react'
import { Head, Row, Table } from 'components'
import { CURRENT_ROUND } from 'mock'
import { TrophyIcon } from 'icons'

interface Props {}

export const RoundStatisticsTable: FC<Props> = () => {
  return (
    <Table
      title="Current Round"
      icon={<TrophyIcon />}
      head={<Head items={['Name', 'Bet', 'Multiplier']} />}
      body={
        <>
          {CURRENT_ROUND.map((entry, i) => {
            const isYou = i === 0
            return (
              <Row
                isSpecialRow={isYou}
                items={[
                  isYou ? 'You' : entry.name,
                  entry.points,
                  entry.multiplier,
                ]}
              />
            )
          })}
        </>
      }
    />
  )
}
