import { RoundEntry } from 'types'
import { v4 } from 'uuid'

export class Entry implements RoundEntry {
  id = v4()
  name: string
  points: number
  multiplier: number
  isWin: boolean | null

  constructor(
    name: string,
    points: number,
    multiplier: number,
    isWin: boolean | null
  ) {
    this.name = name
    this.points = points
    this.multiplier = multiplier
    this.isWin = isWin
  }
}

export const ROUND_ENTRIES: RoundEntry[] = [
  new Entry('Denis', 100, 2, null),
  new Entry('Martin', 250, 1.5, null),
  new Entry('Henry', 50, 10, null),
  new Entry('Violette', 700, 6.5, null),
]
