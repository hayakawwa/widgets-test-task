import {WidgetsSchema} from "./schemas/widgetsSchema.ts";
import {WeatherAppSchema} from "./schemas/weatherAppSchema.ts";
import {ClockAppSchema} from "./schemas/clockAppSchema.ts";

export interface StateSchema {
  widgets: WidgetsSchema
  weatherApp: WeatherAppSchema
  clockApp: ClockAppSchema
}