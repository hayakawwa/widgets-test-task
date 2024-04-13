import {useState} from "react";
import BasicClock from "./BasicClock/BasicClock.tsx";
import Stopwatch from "./Stopwatch/Stopwatch.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/hooks.ts";
import {widgetsActions} from "../store/slices/widgetsSlice.tsx";
import Settings from "./Settings/Settings.tsx";
import {getClockData} from "../store/selectors/clockAppSelectors.ts";
import styles from './ClockAppWrapper.module.scss'
import cross from "../assets/cross.png";
import settings from '../assets/settings.png'

interface Props {
  id: number
}

export default function ClockAppWrapper({id}: Props) {
  const [modalActive, setModalActive] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const data = useAppSelector(getClockData)
  const dataIds = data.find(item => item.id === id)
  const mode = dataIds?.mode
  const handleRemove = () => {
    dispatch(widgetsActions.removeWidget({id}))
  }

  const handleSettings = () => {
    setModalActive(true)
  }


  return (
    <div className={styles.clock}>
      <div className={styles.screen}>
        <img src={settings} alt={'settings'} className={styles.settings} width={20} height={20} onClick={handleSettings}/>
        <img src={cross} alt={'cross'} className={styles.cross} width={15} height={15} onClick={handleRemove}/>
        {mode === 'stopwatch' && <Stopwatch />}
        {mode === 'clock' && <BasicClock />}
        <Settings active={modalActive} setActive={setModalActive} id={id}/>
      </div>
    </div>
  )
}