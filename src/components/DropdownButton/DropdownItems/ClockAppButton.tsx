import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {getWidgets} from "../../../store/selectors/widgetsSelector.ts";
import {Column, IWidget} from "../../../store/schemas/widgetsSchema.ts";
import {widgetsActions} from "../../../store/slices/widgetsSlice.tsx";
import ClockAppWrapper from "../../../clock/ClockAppWrapper.tsx";
import {IClock} from "../../../store/schemas/clockAppSchema.ts";
import {clockAppActions} from "../../../store/slices/clockAppSlice.ts";

interface Props {
  column: Column
}

const ClockAppButton = ({column}: Props) => {
  const dispatch = useAppDispatch()
  const widgets = useAppSelector(getWidgets)
  const id = widgets.length + 1

  const initialData: IClock = {
    id: id,
    mode: 'clock'
  }

  const initialState: IWidget = {
    id: id,
    name: 'ClockApp',
    content: <ClockAppWrapper id={id}/>,
    column: column
  }
  const addWeatherApp = () => {
    dispatch(widgetsActions.addWidget(initialState))
    dispatch(clockAppActions.initializeData(initialData))
  }

  return (
    <div onClick={addWeatherApp} style={{fontFamily: 'Montserrat, sans-serif'}}>
      Виджет «Цифровые часы»
    </div>
  )
}

export default ClockAppButton