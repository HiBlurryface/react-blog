import styles from './TextArea.module.scss'

function TextArea(props) {
    return <div className={styles.wrapper}>
        {props.validation && <span className={styles.error}>{props.message}</span>}
        <textarea rows="9" className={styles.textarea} {...props}></textarea>
    </div>
}

export default TextArea