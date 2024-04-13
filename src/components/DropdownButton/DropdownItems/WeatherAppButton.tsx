import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {getWidgets} from "../../../store/selectors/widgetsSelector.ts";
import {IWeather} from "../../../store/schemas/weatherAppSchema.ts";
import {Column, IWidget} from "../../../store/schemas/widgetsSchema.ts";
import WeatherApp from "../../../weather/WeatherApp.tsx";
import {weatherAppActions} from "../../../store/slices/weatherAppSlice.ts";
import {widgetsActions} from "../../../store/slices/widgetsSlice.tsx";

interface Props {
  column: Column
}

const WeatherAppButton = ({column}: Props) => {
  const dispatch = useAppDispatch()
  const widgets = useAppSelector(getWidgets)
  const id = widgets.length + 1
  const initialData: IWeather = {
    id: id,
    city: null,
    humidity: null,
    temperature: null,
    wind: null,
    icon: null,
    isError: false
  }

  const initialState: IWidget = {
    id: id,
    name: 'WeatherApp',
    content: <WeatherApp id={id}/>,
    column: column
  }
  const addWeatherApp = () => {

    dispatch(weatherAppActions.initializeData(initialData))
    dispatch(widgetsActions.addWidget(initialState))
  }

  return (
    <div onClick={addWeatherApp} style={{fontFamily: 'Montserrat, sans-serif'}}>
      Виджет «Погода»
    </div>
  )
}

export default WeatherAppButton