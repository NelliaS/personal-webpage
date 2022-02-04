import styles from "../styles/Utilities.module.css";
import buttonStyles from '../styles/Button.module.css';

type ButtonType = 'default' | 'primary' | 'secondary' | 'submit'
type BasicType = "button" | "submit" | "reset" | undefined

type ButtonProps = {
    value: string
    type?: ButtonType
    buttonType?: BasicType
    extraClasses?: string
}

const Button = ({value, type='default', buttonType='button', extraClasses} : ButtonProps) => {
  
  return (
    <button 
    type={buttonType}
    className={`${type === 'primary' 
    ? `${styles.gray_radius_shape} ${buttonStyles.btn_primary}` 
    : type === 'secondary' ? `${styles.gray_radius_shape} ${buttonStyles.btn_primary} ${buttonStyles.btn_secondary}`
    : type === 'submit' ? `${buttonStyles.btn_submit}`
    : styles.btn_default} ${extraClasses}`}>
      {value}
    </button>
  );
}

export default Button;