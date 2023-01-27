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
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";
const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

export type FormData = {
  name: string,
  email: string,
  phone: string, 
  gdpr: boolean,
  message: string
}



const ContactForm = ():JSX.Element => {
    const router = useRouter()
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
          placeholder: "Můžeš mi přiblížit důvody se kterými se na mne obracíš?",
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
      gdpr: contactFormInputData.gdpr.initialValue === '' ? false : true,
    }

    const { handleInputChange, clearValues, handleSubmit, inputValue } = useInputChange({...initialValue});

    const onSubmit = async (formData: FormData) => {

      if (!formData.gdpr) {
        return toast.error('Souhlas se zpracováním údajů je povinný', {position: toast.POSITION.BOTTOM_LEFT})
      }

      try {
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
          router.push('/potvrzeni-odeslani/ok')
        }
      } catch (e) {
        return toast.info('Obecná chyba. Zkuste to prosím později.', {position: toast.POSITION.BOTTOM_LEFT})
      }
      finally {
        return
      }
    }

    const [emailError, setEmailError] = useState("")
    const [phoneError, setPhoneError] = useState("")

    const {email, phone} = inputValue

    useEffect(() => {
      !ValidateEmail(email) && email != '' && emailError === ''
      && setEmailError("E-mail není ve správném formátu")

      if ((ValidateEmail(email) && emailError !== '') || (email === '')) {
        setEmailError("")
      }
    }, [email, onSubmit])

    useEffect(() => {
      !ValidatePhoneNumber(phone) && phone != '' && phoneError === ''
      && setPhoneError("Telefonní číslo není ve mezinárodním formátu (+420, +421)")

      if ((ValidatePhoneNumber(phone) && phoneError !== '') || (phone === '')) {
        setPhoneError("")
      }
    }, [phone, onSubmit])


    return (
    <div className={styles.outer_wrapper}>
      <ContactContainer>
      <div className={styles.form_wrapper}>
        <div className={styles.title_wrapper}>
          <Title type="main" title='Kontaktní formulář' />
        </div>
        <form onSubmit={(e) => emailError === '' && phoneError === '' ? handleSubmit(e, onSubmit) : e.preventDefault()} className={styles.form}>
        <div className={styles.input_wrapper}>
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
        </div>
        <div className={styles.input_wrapper}>
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
            errorMessage={emailError}  
        />
        </div>
        <div className={styles.input_wrapper}>
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
            errorMessage={phoneError}
        />
        </div>
        <FormInput
            multiline
            inputProps={{
                'name' : contactFormInputData.message.name,
                'id' : contactFormInputData.message.name,
                'required' : contactFormInputData.message.required,
                'onChange' : handleInputChange,
                'aria-required': contactFormInputData.message.required,
                'placeholder' : contactFormInputData.message.placeholder,
                'rows' : 4,
                'value' : inputValue.message
            }}
            inputImage={contactFormInputData.message}   
        />
        <div className={styles.right_form_wrapper}>
          <div className={`${utilityStyles.gray_radius_shape} ${styles.checkbox_wrapper}`}>
            <label className={styles.checkbox_label}>
            <FormInput
              inputProps={{
                'name' : contactFormInputData.gdpr.name,
                'id' : contactFormInputData.gdpr.name,
                'type' : 'checkbox',
                'onChange' : handleInputChange,
                'checked' : inputValue.gdpr
              }}
              extraClassNames='custom-checkbox'
            />
            <svg
              className={`${styles.checkbox} ${inputValue.gdpr ? styles.checkbox_active : ""}`}
              aria-hidden="true"
              viewBox="0 0 15 11"
              fill="none">
                <path
                d="M1 4.5L5 9L14 1"
                strokeWidth="2"
                stroke={inputValue.gdpr ? "#fff" : "none"}
              />
            </svg>
            </label>
            <a data-tip data-for='gdpr-tooltip'>Souhlasím se zpracováním osobních údajů</a>
            <ReactTooltip id='gdpr-tooltip' type="light" effect="solid" className={styles.tooltip_wrapper}>
              <p>Odesláním formuláře mi dáváš výslovný souhlas se 
                zpracováním tvých osobních údajů (jméno, e-mail, telefonní číslo) 
                ve smyslu nařízení č. 679/2016 o ochraně osobních údajů 
                fyzických osob. 
                Zpracování těchto osobních údajů je nutné k zahájení konverzace o 
                spolupráci a pro využívání mých služeb. Správcem osobních údajů jsem já, Nela Slezáková. 
                Osobní údaje jsou uchovávány po dobu maximálně 6 měsíců od ukončení spolupráce nebo do odvolání souhlasu.
                <br /><br />
                Jsem povinná tě také informovat, že máš právo kdykoliv vzít svůj souhlas zpět; 
                můžeš požadovat informaci, jaké osobní údaje zpracovávám; požadovat vysvětlení ohledně zpracování 
                tvých osobních údajů; vyžádat si přístup k těmto údajům a nechat je změnit; požadovat 
                jejich opravu, výmaz, či omezení zpracování; vznést námitku proti zpracováním. 
                To vše zasláním e-mailu na nela@nelaprovazi.cz
              </p>
            </ReactTooltip>
        </div>
          <Button value="Odeslat" type='submit' buttonType='submit' />
        </div>
        </form>
        </div>
      </ContactContainer>
    </div>
    )
}

export default ContactForm
