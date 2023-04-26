import { NavLink } from 'react-router-dom';
import styles from './Blog.module.scss';
import camera from 'assets/images/camera.png'

function Blog({ data }) {
    function toElipsis(str) {
        let trimmedStr = str.substr(0, 260);
        if (str.length >= 260) {
            return trimmedStr += '...';
        }
        return trimmedStr;
    }

    return <div className={styles.wrapper}>
        <div className={styles.img}>
            {data.preview
                ? <img src={data.preview} alt="" className={styles.pic} />
                : <img src={camera} alt="" className={styles.icon} />
            }
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
            <p className={styles.subtitle}>{toElipsis(data.subtitle)}</p>
        </div>
    </div>
}
export default Blog