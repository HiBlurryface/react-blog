import styles from './Input.module.scss'

function Input(props) {
    return <input type="text" className={styles.input} {...props}/>
}

export default Input