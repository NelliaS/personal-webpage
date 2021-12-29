import styles from "../styles/Button.module.css";

type ButtonType = 'default' | 'primary' | 'secondary'

type ButtonProps = {
    value: string
    type?: ButtonType
}

const Button = ({value, type='default'} : ButtonProps) => {
  
  return (
    <button className={`${type === 'primary' ? styles.btn_primary : type === 'secondary' ? styles.btn_secondary : styles.btn_default}`}>
      {value}
    </button>
  );
}

export default Button;