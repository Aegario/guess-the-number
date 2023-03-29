import React, { FC } from 'react'
import { Container } from 'layout'
import { GameBoard, Settings, RankingTable, Chat } from 'features'

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
      <div className="w-[54%]">
        <RankingTable />
      </div>
      <div className="ml-4 w-[46%]">
        <Chat />
      </div>
    </div>
  </Container>
)
