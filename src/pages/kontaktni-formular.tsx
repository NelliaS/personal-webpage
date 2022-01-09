import FormInput, { InputImageTypeItem } from '../components/FormInput'
import Title from '../components/Title';
import ContactContainer from '../containers/ContactContainer'
import styles from "../styles/Contact.module.css";
import utilityStyles from "../styles/Utilities.module.css";
import {useInputChange} from '../hooks/useInputChange'
import Button from '../components/Button';

export type FormData = {
  name: string,
  email: string,
  phone: string, 
  gdpr: boolean,
  message: string
}

const ContactForm = ():JSX.Element => {
    const contactFormInputData = 
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
          required: false,
          initialValue: false,
        }
      }

    const initialValue: FormData = {
      name: contactFormInputData.person.initialValue,
      email: contactFormInputData.email.initialValue,
      phone: contactFormInputData.phone.initialValue,
      message: contactFormInputData.message.initialValue,
      gdpr: contactFormInputData.gdpr.initialValue,
    }

    const { handleInputChange, clearValues, handleSubmit } = useInputChange({...initialValue});

    return (
    <div className={styles.outer_wrapper}>
      <ContactContainer>
      <div className={styles.form_wrapper}>
      <Title type="main" title='Kontaktní formulář' />
        <form onSubmit={handleSubmit} className={styles.form}>
        <FormInput
            inputProps={{
                'name' : contactFormInputData.person.name,
                'id' : contactFormInputData.person.name,
                'required' : contactFormInputData.person.required,
                'onChange' : handleInputChange,
                'defaultValue' : contactFormInputData.person.initialValue,
                'aria-required': contactFormInputData.person.required,
                'placeholder' : contactFormInputData.person.placeholder,
            }}
            inputImage={contactFormInputData.person}
            
        />
        <FormInput
            inputProps={{
                'name' : contactFormInputData.email.name,
                'id' : contactFormInputData.email.name,
                'required' : contactFormInputData.email.required,
                'onChange' : handleInputChange,
                'defaultValue' : contactFormInputData.email.initialValue,
                'aria-required': contactFormInputData.email.required,
                'placeholder' : contactFormInputData.email.placeholder,
            }}
            inputImage={contactFormInputData.email}
            
        />
        <FormInput
            inputProps={{
                'name' : contactFormInputData.phone.name,
                'id' : contactFormInputData.phone.name,
                'required' : contactFormInputData.phone.required,
                'onChange' : handleInputChange,
                'defaultValue' : contactFormInputData.phone.initialValue,
                'aria-required': contactFormInputData.phone.required,
                'placeholder' : contactFormInputData.phone.placeholder,
            }}
            inputImage={contactFormInputData.phone}
            
        />
        <FormInput
            multiline
            inputProps={{
                'name' : contactFormInputData.message.name,
                'id' : contactFormInputData.message.name,
                'required' : contactFormInputData.message.required,
                'onChange' : handleInputChange,
                'defaultValue' : contactFormInputData.message.initialValue,
                'aria-required': contactFormInputData.message.required,
                'placeholder' : contactFormInputData.message.placeholder,
                'rows' : 5
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
              }}
            />
            <span>Souhlasím se zpracováním osobních údajů</span>
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