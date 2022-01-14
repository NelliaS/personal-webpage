import { FormData } from './../pages/kontaktni-formular';
import { ReactText, useState } from 'react'



export const useInputChange = (initialValue:any) => {

  
  const [inputValue, setInputValue] = useState({...initialValue})
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue({
      ...inputValue,
      [e.currentTarget.name] : e.currentTarget.name !== 'gdpr' 
      ? e.currentTarget.value 
      : (e.currentTarget as unknown as HTMLInputElement).checked
    })
}

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, onSubmit: ((_: FormData) => Promise<ReactText>)) => {
    if (e) {
        e.preventDefault()
        onSubmit({...inputValue})
    }
  }
  
  const setDefaults = () => {
    setInputValue({...initialValue});
 }

 const clearValues = () => {
   console.log({...initialValue})
  setInputValue({...initialValue});
}

return {inputValue, handleInputChange, clearValues, setDefaults, handleSubmit}

}