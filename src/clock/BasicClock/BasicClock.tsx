import {useEffect, useState} from "react";
import styles from "./BasicClock.module.scss";

export default function BasicClock() {
  const [time, setTime] = useState<string>('')

  const formatTime = (value: number) => value < 10 ? '0' : ''

  const tick = () => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    setTime(formatTime(hours) + hours + ':' + formatTime(minutes) + minutes + ':' + formatTime(seconds) + seconds)

  }

  useEffect(() => {
    tick()
    const timerID = setInterval(() => tick(), 1000)
    return function cleanup() {
      clearInterval(timerID)
    }
  }, []);

  return (
    <>
      <p className={styles.time}>{time}</p>
    </>
  )
}