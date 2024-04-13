export interface IClock {
  id: number
  mode: 'clock' | 'stopwatch'
}
export interface ClockAppSchema {
  data: IClock[]
}