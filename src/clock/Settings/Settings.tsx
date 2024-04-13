import React from "react";
import styles from './Settings.module.scss'
import Button from "../../components/ui/Button/Button.tsx";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {clockAppActions} from "../../store/slices/clockAppSlice.ts";
interface Props {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  id: number
}

export default function Settings({active, setActive, id}: Props) {
  const dispatch = useAppDispatch()

  const handleClosing = () => {
    setActive(false)
  }

  const handleBasicClock = () => {
    dispatch(clockAppActions.setMode({id, mode: 'clock'}))
    setActive(false)

  }

  const handleStopwatch = () => {
    dispatch(clockAppActions.setMode({id, mode: 'stopwatch'}))
    setActive(false)
  }

  return (
    <div className={`${styles.settingsWrapper} ${active ? styles.active : ''}`} onClick={handleClosing}>
      <div className={styles.settings} onClick={(e) => e.stopPropagation()}>
        <Button bgColor={'#5ba460'} width={'80%'} onClick={handleBasicClock}>Часы</Button>
        <Button bgColor={'#c35dc7'} width={'80%'} onClick={handleStopwatch}>Секундомер</Button>
      </div>
    </div>
  )
}