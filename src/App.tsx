import React, { FC } from 'react'
import { Container } from 'layout'
import { GameBoard, Settings, RankingTable } from 'features'

export const App: FC = () => (
  <Container>
    <div className="flex">
      <div className="max-w-[32%] grow">
        <Settings />
      </div>
      <div className="ml-3 grow-[3]">
        <GameBoard />
      </div>
    </div>

    <div className="mt-6 flex">
      <div className="h-[180px] w-[54%]">
        <RankingTable />
      </div>
      <div className="border-def ml-4 h-[280px] w-[46%]"></div>
    </div>
  </Container>
)
