import styles from './Home.module.scss'
import WidgetContainer from "../WidgetContainer/WidgetContainer.tsx";
import {COLUMN} from "../../constants.ts";
import {useAppSelector} from "../../hooks/hooks.ts";
import {getIsDragging, getWidgets} from "../../store/selectors/widgetsSelector.ts";

export default function Home() {
  const widgets = useAppSelector(getWidgets)
  const isDragging = useAppSelector(getIsDragging)

  return (
    <div className={styles.container}>
      {COLUMN.map((container) => (
        <WidgetContainer
          widgets={widgets}
          isDragging={isDragging}

          column={container}
          key={container}
        />
      ))}
    </div>
  )
}