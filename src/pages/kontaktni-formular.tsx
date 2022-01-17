import FormInput, { InputImageTypeItem } from '../components/FormInput'
import Title from '../components/Title';
import ContactContainer from '../containers/ContactContainer'
import styles from "../styles/Contact.module.css";
import utilityStyles from "../styles/Utilities.module.css";
import {useInputChange} from '../hooks/useInputChange'
import Button from '../components/Button';
import CreateContactAPI from './api/createContact';
import { useEffect, useState } from 'react';
import { ValidateEmail, ValidatePhoneNumber } from '../utils/Validators';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type FormData = {
  name: string,
  email: string,
  phone: string, 
  gdpr: boolean,
  message: string
}



const ContactForm = ():JSX.Element => {
    toast.configure()
    const contactFormInputData: { [key: string]: InputImageTypeItem<string> } = 
      {
        person : {
          name: "name",
          placeholder: "Jméno",
          icon: '../images/icons/person.svg',
          required: true,
          initialValue: "",
        },
        email : {
          name: "email",
          placeholder: "E-mail",
          icon: '../images/icons/at.svg',
          required: true,
          initialValue: "",
        },
        phone : {
          name: "phone",
          placeholder: "Telefon",
          icon: '../images/icons/phone.svg',
          required: false,
          initialValue: "",
        },
        message : {
          name: "message",
          placeholder: "Text",
          icon: '../images/icons/envelope.svg',
          required: false,
          initialValue: "",
        },
        gdpr : {
          name: "gdpr",
          placeholder: "",
          icon: '',
          required: true,
          initialValue: "",
        }
      }

    const initialValue: FormData = {
      name: contactFormInputData.person.initialValue,
      email: contactFormInputData.email.initialValue,
      phone: contactFormInputData.phone.initialValue,
      message: contactFormInputData.message.initialValue,
      gdpr: contactFormInputData.gdpr.initialValue ? false : true,
    }

    const { handleInputChange, clearValues, handleSubmit, inputValue } = useInputChange({...initialValue});

    const onSubmit = async (formData: FormData) => {
      const {status} = await CreateContactAPI.createContact(
        formData.name,
        new Date(),
        formData.email,
        formData.phone || '',
        formData.gdpr,
        formData.message
      )

      if (status !== 200) {
        clearValues()
        return toast.error('Chyba', {position: toast.POSITION.BOTTOM_LEFT})
      }

      if (status === 200) {
        clearValues()
        return toast.success('Sprava poslana. Napisem ti.', {position: toast.POSITION.BOTTOM_LEFT})
      }
      
      return toast.info('Obecna chyba. Skuste neskor', {position: toast.POSITION.BOTTOM_LEFT})
    }

    const [emailError, setEmailError] = useState("")
    const [phoneError, setPhoneError] = useState("")

    const {email, phone} = inputValue

    useEffect(() => {
      !ValidateEmail(email) && email != '' && emailError === ''
      && setEmailError("Email nie je v spravnom formate")

      if ((ValidateEmail(email) && emailError !== '') || (email === '')) {
        setEmailError("")
      }
    }, [email, onSubmit])

    useEffect(() => {
      !ValidatePhoneNumber(phone) && phone != '' && phoneError === ''
      && setPhoneError("Telefonne nie je v spravnom formate")

      if ((ValidatePhoneNumber(phone) && phoneError !== '') || (phone === '')) {
        setPhoneError("")
      }
    }, [phone, onSubmit])

    console.log("inputValue", inputValue)
    return (
    <div className={styles.outer_wrapper}>
      <ContactContainer>
      <div className={styles.form_wrapper}>
        <div className={styles.title_wrapper}>
          <Title type="main" title='Kontaktní formulář' />
          <div className={` ${styles.smaller_wrapper} ${utilityStyles.gray_radius_shape}`}>
            Zanech mi své kontaktní údaje, ozvu se ti nejpozději do 48h
          </div>
        </div>
        <form onSubmit={(e) => emailError === '' && phoneError === '' ? handleSubmit(e, onSubmit) : e.preventDefault()} className={styles.form}>
        <FormInput
            inputProps={{
                'name' : contactFormInputData.person.name,
                'id' : contactFormInputData.person.name,
                'required' : contactFormInputData.person.required,
                'onChange' : handleInputChange,
                'aria-required': contactFormInputData.person.required,
                'placeholder' : contactFormInputData.person.placeholder,
                'value' : inputValue.name
            }}
            inputImage={contactFormInputData.person}
            
        />
        <FormInput
            inputProps={{
                'name' : contactFormInputData.email.name,
                'id' : contactFormInputData.email.name,
                'required' : contactFormInputData.email.required,
                'onChange' : handleInputChange,
                'aria-required': contactFormInputData.email.required,
                'placeholder' : contactFormInputData.email.placeholder,
                'value' : inputValue.email
            }}
            inputImage={contactFormInputData.email}
            hasError={emailError ? true : false}     
        />
        {emailError && <span className={styles.input_error} role="dialog" aria-live='assertive'>{emailError}</span>}
        <FormInput
            inputProps={{
                'name' : contactFormInputData.phone.name,
                'id' : contactFormInputData.phone.name,
                'required' : contactFormInputData.phone.required,
                'onChange' : handleInputChange,
                'aria-required': contactFormInputData.phone.required,
                'placeholder' : contactFormInputData.phone.placeholder,
                'value' : inputValue.phone,
            }}
            inputImage={contactFormInputData.phone}
            hasError={phoneError ? true : false}  
        />
        {phoneError && <span className={styles.input_error}>{phoneError}</span>}
        <FormInput
            multiline
            inputProps={{
                'name' : contactFormInputData.message.name,
                'id' : contactFormInputData.message.name,
                'required' : contactFormInputData.message.required,
                'onChange' : handleInputChange,
                'aria-required': contactFormInputData.message.required,
                'placeholder' : contactFormInputData.message.placeholder,
                'rows' : 5,
                'value' : inputValue.message
            }}
            inputImage={contactFormInputData.message}   
        />
        <div className={styles.right_form_wrapper}>
          <div className={`${utilityStyles.gray_radius_shape} ${styles.checkbox_wrapper}`}>
            <FormInput
              inputProps={{
                'name' : contactFormInputData.gdpr.name,
                'id' : contactFormInputData.gdpr.name,
                'type' : 'checkbox',
                'required' : contactFormInputData.gdpr.required,
                'onChange' : handleInputChange,
                'checked' : inputValue.gdpr
              }}
            />
            <label htmlFor="styled-checkbox">Souhlasím se zpracováním osobních údajů</label>
          </div>
          <Button value="Odeslat" type='primary' buttonType='submit' />
        </div>
        </form>
        </div>
      </ContactContainer>
    </div>
    )
}

export default ContactForm