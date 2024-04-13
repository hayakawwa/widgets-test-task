import styles from './WidgetItem.module.scss'
import React from "react";
import {widgetsActions} from "../../store/slices/widgetsSlice.tsx";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {IWidget} from "../../store/schemas/widgetsSchema.ts";
interface Props {
  data: IWidget,
}

export default function WidgetItem({data}: Props) {
  const dispatch = useAppDispatch()
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', `${data.id}`)
    dispatch(widgetsActions.handleDragging(true))

  }

  const handleDragEnd = () =>
    dispatch(widgetsActions.handleDragging(false))

  return (
    <div
      className={styles.widgetItem}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {data.content}
    </div>
  )
}