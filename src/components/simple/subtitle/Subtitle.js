import styles from './Subtitle.module.scss'

function Subtitle({children}) {
    return <h2 className={styles.title}>{children}</h2>
}

export default Subtitle