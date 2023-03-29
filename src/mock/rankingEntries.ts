import { v4 } from 'uuid'
import { RankEntry } from 'types'

class Entry implements RankEntry {
  id = v4()
  placement: number
  name: string
  totalPoints: number

  constructor(name: string, placement: number, totalPoints: number) {
    this.name = name
    this.placement = placement
    this.totalPoints = totalPoints
  }
}

export const RANKING_ENTRIES: RankEntry[] = [
  new Entry('Michael', 1, 12760),
  new Entry('Chris', 2, 4475),
  new Entry('Hlavak', 3, 3925),
  new Entry('Stacy', 4, 810),
]
