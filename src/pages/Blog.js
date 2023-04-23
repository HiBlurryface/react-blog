import Title from "components/simple/title/Title"
import main from 'assets/styles/Main.module.scss';
import styles from 'assets/styles/Blog.module.scss';
import ButtonBack from "components/UI/buttonBack/ButtonBack";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFount";

function Blog({ data }) {
    const params = useParams()
    const blog = data.find(item => item.id === params.id)
    console.log(blog.images)
    return blog === undefined
        ? <PageNotFound />
        : <>
            <header className={main.header}>
                <ButtonBack />
            </header>
            <main className={main.body}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <Title>{blog.title}</Title>
                        <div className={styles.header__group}>
                            <p className={styles.header__date}>{blog.date}</p>
                            <ul className={styles.header__list}>
                                {blog.tags.map((tag, index) => {
                                    return <li className={styles.header__list_item} key={index}>
                                        {tag}
                                    </li>
                                })}
                            </ul>
                        </div>
                        <p className={styles.header__subtitle}>{blog.subtitle}</p>
                        <img src="" alt="" className={styles.header__photo} />
                    </div>
                    <div className={styles.content}>
                        {blog.descr && <div className={styles.content__text}>
                            {blog.descr.map((item, index) => {
                                return <div className={styles.block} key={index}>
                                    <h2 className={styles.block__title}>{item.title}</h2>
                                    <p className={styles.block__text}>{item.text}</p>
                                </div>
                            })}
                        </div>}
                        {blog.images && <div className={styles.content__images}>
                            {blog.images.map((item, index) => {
                                return <img src="" alt="" className={styles.block__img} key={index} />
                            })}
                        </div>}
                    </div>
                </div>
            </main>
        </>
}

export default Blog