import React, {useEffect, useState} from "react";
import styles from "./Controls.module.scss";
import Button from "../../../components/ui/Button/Button.tsx";

interface Props {
  setTimeInSeconds:  React.Dispatch<React.SetStateAction<number>>
}

export default function Controls({setTimeInSeconds}: Props) {
  const [intervalId, setIntervalId] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false)

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimeInSeconds((previousState: number) => previousState + 10);
      }, 10);

      setIntervalId(interval);
    }
  }, [isRunning]);
  const handleStart = () => {
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
    clearInterval(intervalId);
  }

  const handleReset = () => {
    setIsRunning(false)
    clearInterval(intervalId);
    setTimeInSeconds(0);
  }

  return (
    <div className={styles.controls}>
      <Button bgColor={'#5eb459'} onClick={handleStart}>Старт</Button>
      <Button bgColor={'#fa4646'} onClick={handleStop}>Стоп</Button>
      <Button onClick={handleReset}>Сброс</Button>
    </div>
  )
}