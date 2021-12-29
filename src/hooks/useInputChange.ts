import { useState } from 'react'

export const useInputChange = (defaultValues?:any) => {
  const [inputValue, setInput] = useState({...defaultValues})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput({
    ...inputValue,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const setDefaults = () => {
    setInput({...defaultValues});
 }

 const clearValues = () => {
  setInput({});
}

return [inputValue, handleInputChange, clearValues, setDefaults]

}