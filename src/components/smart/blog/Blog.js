import { NavLink } from 'react-router-dom'
import styles from './Blog.module.scss'

function Blog({ data }) {
    return <div className={styles.wrapper}>
        <div className={styles.img}>
            <img src="" alt="" className={styles.pic} />
        </div>
        <div className={styles.info}>
            <NavLink to={`/blog/${data.id}`} className={styles.title}>{data.title}</NavLink>
            <div className={styles.group}>
                <p className={styles.date}>{data.date}</p>
                <ul className={styles.list}>
                    {data.tags.map((tag, index) => {
                        return <li className={styles.item} key={index}>
                            <a href="" className={styles.tag}>{tag}</a>
                        </li>
                    })}
                </ul>
            </div>
            <p className={styles.subtitle}>{data.descr.substr(0, 260)}...</p>
        </div>
    </div>
}
export default Blog