import React from "react";

export type Column = 'left' | 'middle' | 'right'

export interface IWidget {
  id: number
  name?: 'WeatherApp' | 'ClockApp'
  content?: React.ReactNode
  column?: Column
}

export interface WidgetsSchema {
  listItems: IWidget[]
  isDragging: boolean
}

