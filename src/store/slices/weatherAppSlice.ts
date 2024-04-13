import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IWeather, WeatherAppSchema} from "../schemas/weatherAppSchema.ts";

const initialState: WeatherAppSchema = {
  data: []
}
export const weatherAppSlice = createSlice({
  name: 'weatherApp',
  initialState,
  reducers: {
    initializeData: (state, action: PayloadAction<{id: number}>) => {
      state.data.push(
        {
          id: action.payload.id,
          city: '',
          humidity: null,
          temperature: null,
          wind: null,
          icon: null,
          isError: false
        }
      )
    },
    setData: (state, action: PayloadAction<IWeather>) => {
      state.data
        .filter(item => item.id === action.payload.id)
        .map(item => {
          item.city = action.payload.city
          item.humidity = action.payload.humidity
          item.temperature = action.payload.temperature
          item.wind = action.payload.wind
          item.icon = action.payload.icon
          item.isError = action.payload.isError
        })
    },
    removeData: (state, action: PayloadAction<{id: number}>) => {
       state.data = state.data.filter(item => item.id !== action.payload.id)
    },
    setError: (state, action: PayloadAction<{id: number, isError: boolean}>) => {
      state.data
        .filter(item => item.id === action.payload.id)
        .map(item => {
          item.isError = action.payload.isError
        })
    }
  },
})

export const { actions: weatherAppActions } = weatherAppSlice;
export const { reducer: weatherAppReducer } = weatherAppSlice;