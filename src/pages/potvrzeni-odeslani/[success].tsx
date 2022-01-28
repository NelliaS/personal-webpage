import React from 'react'
import ContactContainer from '../../containers/ContactContainer'
import styles from "../../styles/ContactSubmission.module.css";
import { useRouter } from 'next/router'

const ContactSubmissionPage = ():JSX.Element  => {
    const router = useRouter()
    const { success } = router.query
    
    return (
        success === 'ok' ? (
        <div className={styles.outer_wrapper}>
        <ContactContainer>
            <div className={styles.inner_box}>
                <p>Úspěšně odesláno, brzo se ti ozvu</p>
            </div>
        </ContactContainer>
        </div> ) : <></>
    )
}

export default ContactSubmissionPage