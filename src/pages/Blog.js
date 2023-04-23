import Title from "components/simple/title/Title"
import main from 'assets/styles/Main.module.scss';
import styles from 'assets/styles/Blog.module.scss';
import ButtonBack from "components/UI/buttonBack/ButtonBack";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFount";
import Input from "components/UI/input/Input";
import TextArea from "components/UI/textArea/TextArea"
import Button from "components/UI/button/Button";
import ButtonTransparent from "components/UI/buttonTransparent/ButtonTransparent";

function Blog({ data }) {
    const params = useParams()
    const blog = data.find(item => item.id === params.id)

    return blog === undefined
        ? <PageNotFound />
        : <>
            <header className={main.header}>
                <ButtonTransparent>Delete blog</ButtonTransparent>
                <ButtonTransparent>Edit blog</ButtonTransparent>
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
                    <div className={styles.comments}>
                        <div className={styles.comments__wrapper}>
                            <h2 className={styles.comments__title}>Comments</h2>
                            <div className={styles.comment}>
                                <img src="" alt="" className={styles.comment__photo} />
                                <div className={styles.comment__info}>
                                    <div className={styles.comment__group}>
                                        <h3 className={styles.comment__title}>Hiblurryface</h3>
                                        <p className={styles.comment__date}>20 March 2023</p>
                                    </div>
                                    <p className={styles.comment__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores, voluptas eligendi quae consequatur ducimus rerum, voluptate enim explicabo exercitationem blanditiis, praesentium laudantium debitis modi dolores temporibus vel necessitatibus ipsam?</p>
                                </div>
                            </div>
                            <div className={styles.comment}>
                                <img src="" alt="" className={styles.comment__photo} />
                                <div className={styles.comment__info}>
                                    <div className={styles.comment__group}>
                                        <h3 className={styles.comment__title}>Hiblurryface</h3>
                                        <p className={styles.comment__date}>20 March 2023</p>
                                    </div>
                                    <p className={styles.comment__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores, voluptas eligendi quae consequatur ducimus rerum, voluptate enim explicabo exercitationem blanditiis, praesentium laudantium debitis modi dolores temporibus vel necessitatibus ipsam?</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.comment__wrapper}>
                            <h2 className={styles.comments__title}>Your comment</h2>
                            <form action="" className={styles.comments__form}>
                                <div className={styles.comments__group}>
                                    <Input placeholder="Your Name" required=""/>
                                    <Input placeholder="Your Email" required=""/>
                                </div>
                                <Input placeholder="Subject" required=""/>
                                <TextArea placeholder="Your comment" required=""/>
                                <Button type="submit">Add comment</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
}

export default Blog