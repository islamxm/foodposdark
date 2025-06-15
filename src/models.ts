export type Color = 'white' | 'black'


export type Position = number

export type Cell = {
  color: Color,
  position: Position,
}

export type Checker = {
  color: Color
  position: Position
  isDamka: boolean
}

