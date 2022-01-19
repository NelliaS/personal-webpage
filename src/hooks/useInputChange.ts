import { FormData } from './../pages/kontaktni-formular';
import { ChangeEvent, ReactText, useState } from 'react'


const getInputValue = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  if (e.currentTarget?.type && e.currentTarget.type === 'checkbox') {
    return (e.currentTarget as HTMLInputElement).checked
  } 

  return e.currentTarget.value
}

export const useInputChange = (initialValue:any) => {
  const [inputValue, setInputValue] = useState({...initialValue})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue({
      ...inputValue,
      [e.currentTarget.name] : getInputValue(e),
    })
  }
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, onSubmit: ((_: FormData) => Promise<ReactText | undefined>)) => {
    if (e) {
        e.preventDefault()
        onSubmit({...inputValue})
    }
  }
  
  const setDefaults = () => {
    setInputValue({...initialValue});
 }

 const clearValues = () => {
  setInputValue({...initialValue});
}

return {inputValue, handleInputChange, clearValues, setDefaults, handleSubmit}

}