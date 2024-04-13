import {Input} from 'antd';
import {SearchProps} from "antd/es/input";
import styles from './WeatherApp.module.scss'
import cross from '../assets/cross.png'
import question from '../assets/question.png'
import Information from "./Information/Information.tsx";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/hooks.ts";
import {weatherAppActions} from "../store/slices/weatherAppSlice.ts";
import {getWeatherData} from "../store/selectors/weatherAppSelectors.ts";
import {widgetsActions} from "../store/slices/widgetsSlice.tsx";
import {searchData} from "./api.ts";

interface Props {
  id: number
}

export default function WeatherApp({id}: Props) {
  const {Search} = Input

  const [value, setValue] = useState<string>('')

  const dispatch = useAppDispatch()
  const data = useAppSelector(getWeatherData)

  const dataIds = data.find(item => item.id === id)
  const temperature = dataIds?.temperature
  const wind = dataIds?.wind
  const city = dataIds?.city
  const humidity = dataIds?.humidity
  const icon = dataIds?.icon
  const isError = dataIds?.isError

  const onSearch: SearchProps['onSearch'] = (value) => setValue(value)

  const handleRemove = () => {
    dispatch(widgetsActions.removeWidget({id}))
    dispatch(weatherAppActions.removeData({id}))
  }

  useEffect(() => {
    value && searchData(value, id, dispatch)
  }, [value, dispatch, id]);

  return (
    <div className={styles.wrapper}>
      <img src={cross} alt='cross' className={styles.delete} width={14} height={14} onClick={handleRemove}/>
      <div className={styles.searchWrapper}>
        <Search placeholder="Введите город" allowClear size={'middle'} onSearch={onSearch} className={styles.search}/>
      </div>
      <div className={styles.weatherIcon}>
        {icon ? <img src={icon} width='40%' alt='weatherIcon'/> :
          <img className={styles.quest} src={question} width='40%' alt='question'/>}
      </div>
      <Information temperature={temperature} humidity={humidity} wind={wind} city={city} isError={isError}/>
    </div>
  )
}