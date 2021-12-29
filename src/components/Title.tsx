
import styles from "../styles/Title.module.css";

type TitleType = 'default' | 'main'

type TitleProps = {
    title: string
    type?: TitleType
}

const Title = ({title, type='default'} : TitleProps ) => {
    return <h2 className={`${type === 'main' ? styles.main_title : styles.default_title}`}>{title}</h2>
}

export default Title