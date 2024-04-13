import {useEffect, useState} from "react";
import styles from './Stopwatch.module.scss'
import Controls from "./Controls/Controls.tsx";
import {formattedTime} from "./utils/formattedTime.ts";

export default function Stopwatch() {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    setTime(formattedTime(timeInSeconds))
  }, [timeInSeconds]);


  return (
    <div className={styles.stopwatch}>
      <p className={styles.time}>{time}</p>
      <Controls setTimeInSeconds={setTimeInSeconds}/>
    </div>
  )
}