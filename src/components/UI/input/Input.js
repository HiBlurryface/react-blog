import styles from './Input.module.scss'

function Input(props) {
    return <div className={styles.wrapper}>
        {props.validation && <span className={styles.error}>{props.message}</span>}
        <input type="text" className={styles.input} {...props}/>
    </div>
}

export default Input