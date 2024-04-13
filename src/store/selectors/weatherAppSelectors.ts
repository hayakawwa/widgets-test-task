import {StateSchema} from "../StateSchema.ts";

export const getWeatherData = (state: StateSchema) =>
  state.weatherApp.data
