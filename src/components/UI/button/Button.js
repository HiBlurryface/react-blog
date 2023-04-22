import styles from './Button.module.scss'

function Button({onClick, children}) {
    return <button onClick={onClick} className={styles.style}>{children}</button>
}

export default Button