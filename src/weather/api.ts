import {API_KEY} from "../constants.ts";
import {weatherAppActions} from "../store/slices/weatherAppSlice.ts";
import {ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";
import {WidgetsSchema} from "../store/schemas/widgetsSchema.ts";
import {WeatherAppSchema} from "../store/schemas/weatherAppSchema.ts";
import {Dispatch} from "react";


export const searchData = async (searchCity: string,
                                 id: number,
                                 dispatch: ThunkDispatch<{
                                   widgets: WidgetsSchema,
                                   weatherApp: WeatherAppSchema[]
                                 }, undefined, UnknownAction> & Dispatch<UnknownAction>) => {

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=Metric&appid=${API_KEY}`)

    const data = await response.json()
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const temperature = data.main.temp
    const wind = data.wind.speed
    const humidity = data.main.humidity
    const city = data.name

    dispatch(weatherAppActions.setData({id, temperature, humidity, wind, city, icon, isError: false}))
  } catch (err) {
    dispatch(weatherAppActions.setError({id, isError: true}))
  }
}