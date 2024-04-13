import {Button, Dropdown} from "antd";
import styles from "./DropdownButton.module.scss";
import {MenuProps} from "antd";
import WeatherAppButton from "./DropdownItems/WeatherAppButton.tsx";
import {Column} from "../../store/schemas/widgetsSchema.ts";
import ClockAppButton from "./DropdownItems/ClockAppButton.tsx";

interface Props {
  column: Column
}
export default function DropdownButton({column}: Props) {

  const items: MenuProps['items'] = [
    {
      key: 1,
      label: (
        <WeatherAppButton column={column} />
      ),
    },
    {
      key: 2,
      label: (
        <ClockAppButton column={column} />
      ),
    }
  ];

  return (
    <div className={styles.dropdownWrapper}>
      <Dropdown menu={{items}} placement="bottomLeft" arrow className={styles.dropdown}>
        <Button>Добавить</Button>
      </Dropdown>
    </div>
  )
}