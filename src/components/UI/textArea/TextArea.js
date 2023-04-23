import styles from './TextArea.module.scss'

function TextArea(props) {
    return <textarea rows="9" className={styles.textarea} {...props}></textarea>
}

export default TextArea