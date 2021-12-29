import styles from "../styles/Contact.module.css";

type ContactContainerProps = {
    children: React.ReactNode
}

const ContactContainer = ({children} : ContactContainerProps) => {
    return (
        <section id="contact" className={styles.contact}>
            {children}
        </section>
    )
}

export default ContactContainer