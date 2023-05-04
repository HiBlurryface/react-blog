import classNames from 'classnames'
import styles from './Button.module.scss'

function Button({onClick, active, children}) {
    return <button className={classNames(styles.button, {[`${styles.button__disabled}`]: active === false})} onClick={onClick}>{children}</button>
}

export default Button