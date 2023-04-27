import user from 'assets/images/user.png'
import styles from './Comment.module.scss'

function Comment({comment}) {
    return <div className={styles.wrapper}>
        <div className={styles.photo}>
            <img src={user} alt="" className={styles.pic} />
        </div>
        <div className={styles.info}>
            <div className={styles.group}>
                <h3 className={styles.title}>{comment.name}</h3>
                <p className={styles.date}>{comment.date}</p>
            </div>
            <p className={styles.text}>{comment.comment}</p>
        </div>
    </div>
}

export default Comment