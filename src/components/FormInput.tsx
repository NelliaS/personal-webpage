import { ComponentPropsWithRef, useState } from 'react'
import styles from '../styles/FormInput.module.css';
import basic_styles from "../styles/Utilities.module.css";
import { FORM_ICON_SIZE, ICON_COLOR } from '../utils/Constants';

type InputType = keyof Pick<JSX.IntrinsicElements, 'input' | 'textarea'>


export interface InputImageTypeItem {
    name: string
    placeholder: string,
    icon: string,
    required: boolean,
    initialValue: string | boolean
}

interface BaseProps<T extends InputType> {
    inputProps: { name: string, id: string} & Omit<ComponentPropsWithRef<T>, 'className'>
    labelText?: string
    extraClassNames?: string
    characterCount?: number
    inputImage?: InputImageTypeItem
}

type Props =
  | { multiline?: false, hasLabel?: false } & BaseProps<'input'>
  | { multiline: true, hasLabel?: false } & BaseProps<'textarea'>


const FormInput = (props: Props): JSX.Element => {
    const [focused, setFocused] = useState(false);
    const [error, setError] = useState(false);

    const requiredIndicator = props.inputProps.required 
    ? <span aria-hidden className={styles.requiredIndicator}>*</span>
    : null

    const inputElement = props.multiline
    ? <textarea {...props.inputProps} className={`${basic_styles.gray_radius_shape} ${styles.form_input} 
                ${focused && styles.form_input_focus} ${styles.textarea}`} 
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onError={() => setError(true)}
    />
    : <input {...props.inputProps} 
             className={`${basic_styles.gray_radius_shape} ${styles.form_input} ${focused && styles.form_input_focus}`} 
             onFocus={() => setFocused(true)}
             onBlur={() => setFocused(false)}
             onError={() => setError(true)}
        />

    return (
        <div className={`${props.extraClassNames} ${styles.form_wrapper}`}>
            {props.hasLabel && 
            <label htmlFor={props.inputProps.id} className={styles.label}>
                {requiredIndicator}
                {props.labelText}
            </label>
            }
            {props.inputImage && 
            <span className={styles.form_input_icon}>
                <img src={props.inputImage?.icon} color={ICON_COLOR} width={FORM_ICON_SIZE} height={FORM_ICON_SIZE} />
            </span>
            }
            {inputElement}
        </div>
    )
}

export default FormInput

