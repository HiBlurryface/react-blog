import ButtonBack from "components/UI/buttonBack/ButtonBack"
import ButtonTransparent from "components/UI/buttonTransparent/ButtonTransparent"
import Title from "components/simple/title/Title"

import main from 'assets/styles/Main.module.scss';
import styles from 'assets/styles/CreateBlog.module.scss'
import Input from "components/UI/input/Input";
import { useState } from "react";
import Subtitle from "components/simple/subtitle/Subtitle";
import TextArea from "components/UI/textArea/TextArea";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBlogAction } from "store/blogsReducer";
import { v4 as uuidv4 } from 'uuid';
import deleteIcon from 'assets/images/deleteIcon.svg'
uuidv4()
function CreateBlog() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const fileReader = new FileReader();

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [tags, setTags] = useState('');
    const [preview, setPreview] = useState('');
    const [descr, setDescr] = useState([]);
    const [images, setImages] = useState([]);

    function getCurrentDate() {
        let date = new Date()
        let day = date.getDate();
        let month = date.toLocaleString('en', { month: 'short' });
        let year = date.getFullYear();

        return day + ' ' + month + ' ' + year;
    }
    function getTags() {
        let splittedTags = tags.split(/[' ',.,!,?]/);

        return splittedTags;
    }
    function getPreview(e) {
        e.preventDefault();
        fileReader.onloadend = () => {
            setPreview(fileReader.result)
        }
        const file = e.target.files[0];
        fileReader.readAsDataURL(file);
    }
    function addPhoto(e, img) {
        e.preventDefault();
        fileReader.onloadend = () => {
            setImages(images.map(item => item.id === img.id ? { ...img, photo: fileReader.result } : item))
        }
        const file = e.target.files[0];
        fileReader.readAsDataURL(file);
    }
    function addBlog() {
        dispatch(addBlogAction({
            id: uuidv4(),
            date: getCurrentDate(),
            title: title,
            subtitle: subtitle,
            tags: getTags(),
            descr: descr,
            preview: preview,
            images: images
        }))
        navigate('/')
    }

    return <>
        <header className={main.header}>
            <ButtonTransparent onClick={() => addBlog()}>Add blog</ButtonTransparent>
            <ButtonBack />
        </header>
        <main className={main.body}>
            <Title>Create blog</Title>
            <div className={styles.container}>
                <form>
                    <input type="file" accept="image/png,image/jpeg" onChange={getPreview} />
                </form>
                <img src={preview} alt="" className={styles.preview} />
                <Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <Input placeholder="Tags" value={tags} onChange={e => setTags(e.target.value)} />
                <Input placeholder="Subtitle" value={subtitle} onChange={e => setSubtitle(e.target.value)} />
                <div className={styles.block}>
                    {descr.map((paragraph, index) => {
                        return <div className={styles.block__wrapper} key={index}>
                            <div className={styles.block__header}>
                                <Subtitle>Paragraph {index + 1}</Subtitle>
                                <button onClick={() => setDescr(descr.filter(item => item.id !== paragraph.id))} className={styles.delete}>
                                    <img src={deleteIcon} alt="" className={styles.delete__icon} />
                                </button>
                            </div>
                            <Input placeholder="Paragraph title"
                                value={paragraph.title}
                                onChange={e => setDescr(descr.map(item => item.id === paragraph.id ? { ...paragraph, title: e.target.value } : item))} />
                            <TextArea placeholder="Paragraph text" value={paragraph.text}
                                onChange={e => setDescr(descr.map(item => item.id === paragraph.id ? { ...paragraph, text: e.target.value } : item))} />
                        </div>
                    })}
                    <ButtonTransparent onClick={() => setDescr([...descr, { id: uuidv4(), title: '', text: '' }])}>Add paragraph +</ButtonTransparent>
                </div>
                <div className={styles.block}>
                    {images.map((img, index) => {
                        return <div className={styles.block__wrapper} key={index}>
                            <div className={styles.block__header}>
                                <Subtitle>Photo {index + 1}</Subtitle>
                                <button onClick={() => setImages(images.filter(item => item.id !== img.id))} className={styles.delete}>
                                    <img src={deleteIcon} alt="" className={styles.delete__icon} />
                                </button>
                            </div>
                            <form>
                                <input type="file" accept="image/png,image/jpeg" className={styles.block__photo} onChange={e=>addPhoto(e, img)} />
                            </form>
                            <img src={img.photo} alt="" className={styles.block__img} />
                        </div>
                    })}
                    <ButtonTransparent onClick={() => setImages([...images, { id: uuidv4(), photo: '' }])}>Add photo +</ButtonTransparent>
                </div>
            </div>
        </main>
    </>
}

export default CreateBlog