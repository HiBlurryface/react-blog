import styles from './Input.module.scss'

function Input({name, id, value, onChange, placeholder, validation, message}) {
    return <div className={styles.wrapper}>
        {validation && <span className={styles.error}>{message}</span>}
        <input type="text" className={styles.input} name={name} id={id} value={value} onChange={onChange} placeholder={placeholder}/>
    </div>
}

export default Input