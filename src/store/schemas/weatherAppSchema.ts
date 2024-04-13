export interface IWeather {
  id: number
  temperature?: number | null
  humidity?: number | null
  wind?: number | null
  city?: string | null
  icon?: string | null
  isError?: boolean
}

export interface WeatherAppSchema {
  data: IWeather[]
}
