import styles from './Button.module.scss'

type ButtonProps = {
  children: string;
  width?: number | string;
  onClick?: () => void;
  bgColor?: string
};

const Button = ({children, width, onClick, bgColor}: ButtonProps) => {
  return (
      <button
        type='submit'
        onClick={onClick}
        style={{width: width, backgroundColor: bgColor}}
        className={styles.customButton}
      >
        {children}
      </button>
  );
};

export default Button;
