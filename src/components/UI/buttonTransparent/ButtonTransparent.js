import styles from './ButtonTransparent.module.scss'

function ButtonTransparent({onClick, children}) {
    return <button onClick={onClick} className={styles.style}>{children}</button>
}

export default ButtonTransparent