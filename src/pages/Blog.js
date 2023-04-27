import Title from "components/simple/title/Title"
import main from 'assets/styles/Main.module.scss';
import styles from 'assets/styles/Blog.module.scss';
import ButtonBack from "components/UI/buttonBack/ButtonBack";
import { useNavigate, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFount";
import Input from "components/UI/input/Input";
import TextArea from "components/UI/textArea/TextArea"
import Button from "components/UI/button/Button";
import ButtonTransparent from "components/UI/buttonTransparent/ButtonTransparent";
import Subtitle from "components/simple/subtitle/Subtitle";
import { useDispatch, useSelector } from "react-redux";
import { addCommentAction, deleteBlogAction } from "store/blogsReducer";
import getCurrentDate from "utils/getCurrentDate";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import Comment from "components/smart/comment/Comment";

uuidv4()
function Blog() {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const blogs = useSelector(state => state.blogs)
    const blog = blogs.filter(item => item.id === params.id)[0]

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    function deleteBlog() {
        dispatch(deleteBlogAction(blog.id));
        navigate('/');
    }
    function addComment(id, blog) {
        dispatch(addCommentAction(id,blog, {
            id: uuidv4(),
            name: name,
            email: email,
            date: getCurrentDate(),
            comment: comment,
        }))
        setName('')
        setEmail('')
        setComment('')
    }
    return blog === undefined
        ? <PageNotFound />
        : <>
            <header className={main.header}>
                <ButtonTransparent onClick={() => deleteBlog()}>Delete blog</ButtonTransparent>
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
                        <div className={styles.header__img}>
                            <img src={blog.preview} alt="" className={styles.header__photo} />
                        </div>
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
                                return <div className={styles.block__img} key={index}>
                                    <img src={item} alt="" className={styles.block__pic} />
                                </div>
                            })}
                        </div>}
                    </div>
                    <div className={styles.comments}>
                        <div className={styles.comments__wrapper}>
                            <Subtitle>{blog.comments.length} Comments</Subtitle>
                            {blog.comments === 0
                                ? <h3 className={styles.comments__subtitle}>Add first comment!</h3>
                                : blog.comments.map((comment, index) => {
                                    return <Comment comment={comment} key={index} />
                                })
                            }
                        </div>
                        <div className={styles.comment__wrapper}>
                            <Subtitle>Your comment</Subtitle>
                            <div className={styles.comments__group}>
                                <Input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} validation={validation.name} message='* Required field' />
                                <Input placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} validation={validation.email} message='* Required field' />
                            </div>
                            <TextArea placeholder="Your comment" value={comment} onChange={e => setComment(e.target.value)} validation={validation.comment} message='* Required field' />
                            <Button onClick={() => addComment(blog.id, blog)}>Add comment</Button>
                        </div>
                    </div>
                </div>
            </main>
        </>
}

export default Blog