import type { NextPage } from 'next'
import React from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import ContactContainer from '../containers/ContactContainer'
import styles from "../styles/Contact.module.css";
import Link from "next/link"

const Contact: NextPage = () => {
  return (
    <div className={styles.outer_wrapper}>
      <ContactContainer>
        <div className={styles.inner_wrapper}>
        <Title title="Připraven/a vydat se na cestu?" type="main" />
        <div className={styles.button_wrapper}>
          <Button value="Chci se objednat" type='submit' />
          <Link href="/kontaktni-formular">
            <a><Button value="Kontaktuj mě" type='submit' extraClasses='w-100' /></a>
          </Link>
        </div>
        </div>
    </ContactContainer>
    </div>
  )
}

export default Contact