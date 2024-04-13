import styles from './WidgetContainer.module.scss'
import React from "react";
import WidgetItem from "../WidgetItem/WidgetItem.tsx";
import DropdownButton from "../DropdownButton/DropdownButton.tsx";
import {Column, IWidget} from "../../store/schemas/widgetsSchema.ts";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {widgetsActions} from "../../store/slices/widgetsSlice.tsx";

interface Props {
  widgets: IWidget[]
  isDragging: boolean
  column: Column,

}
export default function WidgetContainer({widgets = [], column }: Props) {
  const dispatch = useAppDispatch()

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(widgetsActions.handleUpdateList({id: +e.dataTransfer.getData('text'), column: column}))
    dispatch(widgetsActions.handleDragging(false))
  }
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault()


  return (
    <div className={styles.column} onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className={styles.content}>
        <DropdownButton column={column}/>
        <div className={styles.widgets}>
          {
            widgets.map((item) => (
              column === item.column &&
              <WidgetItem
                data={item}
                key={item.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}