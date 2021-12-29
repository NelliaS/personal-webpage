import type { NextPage } from 'next'
import React from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import ContactContainer from '../containers/ContactContainer'
import ImageWrapper from '../containers/ImageWrapper'
import styles from "../styles/Contact.module.css";

const Kontakt: NextPage = () => {
  return (
    <React.Fragment>
      <ImageWrapper src="/images/contact_bg.webp" alt="Nella kontakt" />
      <ContactContainer>
        <div className={styles.inner_wrapper}>
        <Title title="Připraven/a vydat se na cestu?" type="main" />
        <div className={styles.button_wrapper}>
          <Button value="Chci se objednat" type='primary' />
          <Button value="Kontaktuj mě" type='primary' />
        </div>
        </div>
    </ContactContainer>
    </React.Fragment>
  )
}

export default Kontakt