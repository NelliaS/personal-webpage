import { useState } from 'react'
import axios from 'axios';


export const useInputChange = (initialValue:any) => {

  
  const [inputValue, setInputValue] = useState({...initialValue})
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
      setInputValue({
    ...inputValue,
    [e.currentTarget.name]: e.currentTarget.value
  })

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
      const body = {
        client: inputValue.name || '',
        date:"2015-09-18T11:58Z",
        email: inputValue.email || '',
        phoneNumber: inputValue.phone || '',
        isProcessingChecked : inputValue.gdpr || true,
        note : inputValue.message || ''
      };
      
      console.log(body)
      axios.post("https://hook.integromat.com/srqnom519rq0x86tnylyn5tnnqgr3k7v",  body, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
  
  const setDefaults = () => {
    setInputValue({...initialValue});
 }

 const clearValues = () => {
  setInputValue({});
}

return {inputValue, handleInputChange, clearValues, setDefaults, handleSubmit}

}