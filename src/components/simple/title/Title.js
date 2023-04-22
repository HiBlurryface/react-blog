import styles from './Title.module.scss'

function Title({children}) {
    return <h1 className={styles.style}>{children}</h1>
}

export default Title