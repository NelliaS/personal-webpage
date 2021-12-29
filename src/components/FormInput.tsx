import { useInputChange } from '../hooks/useInputChange'

type FormInputProps = {
    inputValue: string
    inputType: string
    name: string
}

const FormInput = ({inputValue, inputType, name} : FormInputProps )  => {
    const [input, handleInputChange] = useInputChange()

    return (
    <input type={inputType} value={inputValue} name={name} onChange={handleInputChange} />
    )

}

export default FormInput;