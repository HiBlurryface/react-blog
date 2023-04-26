import styles from './Preview.module.scss'
import camera from 'assets/images/camera.png'

function Preview(props) {
    return <div className={styles.wrapper}>
        {props.src
            ? <img src={props.src} className={styles.photo} />
            : <img src={camera} className={styles.icon} />
        }
    </div>
}

export default Preview