import {StateSchema} from "../StateSchema.ts";

export const getClockData = (state: StateSchema) =>
  state.clockApp.data
