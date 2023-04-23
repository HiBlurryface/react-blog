import styles from './Button.module.scss'

function Button(props) {
    console.log(props)
    return <button className={styles.button} {...props}>{props.children}</button>
}

export default Button