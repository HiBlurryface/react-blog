import classNames from 'classnames'
import styles from './Button.module.scss'

function Button(props) {
    return <button className={classNames(styles.button, {[`${styles.button__disabled}`]: props.active === false})} {...props}>{props.children}</button>
}

export default Button