import styles from "./Information.module.scss";
import humidityIcon from '../../assets/humidity.png'
import windIcon from '../../assets/wind.png'

interface Props {
  temperature?: number | null
  humidity?: number | null
  wind?: number | null
  city?: string | null
  isError?: boolean
}

export default function Information({temperature, humidity, wind, city, isError}: Props) {
  return (
    <div className={styles.informationWrapper}>
      <div className={styles.mainInformation}>
        {temperature && <p className={styles.value}>{temperature}°C</p>}
        <p className={styles.header}>{!city ? `Введите название города` : city}</p>
        {isError && <p className={styles.error}>Прозошла ошибка. Возможно, город не найден.</p>}
      </div>
      <div className={styles.subInformation}>
        <div className={styles.humidity}>
          <img src={humidityIcon} alt={'humidity'} />
          <p className={styles.header}>Влажность</p>
          {humidity ? <p className={styles.value}>{humidity}%</p> : <p>...</p>}
        </div>
        <div className={styles.wind}>
          <img src={windIcon} alt={'wind'} />
          <p className={styles.header}>Скорость ветра</p>
          {wind ? <p className={styles.value}>{wind} км/ч</p> : <p>...</p>}
        </div>
      </div>
    </div>
  )
}