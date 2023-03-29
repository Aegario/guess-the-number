import { v4 } from 'uuid'

export class RoundEntry {
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
