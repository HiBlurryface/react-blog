import ButtonBack from "components/UI/buttonBack/ButtonBack"
import ButtonTransparent from "components/UI/buttonTransparent/ButtonTransparent"
import Title from "components/simple/title/Title"

import main from 'assets/styles/Main.module.scss';
import styles from 'assets/styles/CreateBlog.module.scss'
import Input from "components/UI/input/Input";
import { useState } from "react";
import Subtitle from "components/simple/subtitle/Subtitle";
import TextArea from "components/UI/textArea/TextArea";

function CreateBlog() {
    const [blog, setBlog] = useState({
        title: '',
        tags: [],
        subtitle: '',
        descr: [
        ]
    })
    return <>
        <header className={main.header}>
            <ButtonTransparent>Add blog</ButtonTransparent>
            <ButtonBack />
        </header>
        <main className={main.body}>
            <Title>Create blog</Title>
            <div className={styles.container}>
                <Input placeholder="Title" />
                <Input placeholder="Tags" />
                <Input placeholder="Subtitle" />
                {blog.descr.map((item,index) => {
                    return <div className={styles.paragraph}>
                        <Subtitle>Paragraph {index+1}</Subtitle>
                        <Input placeholder="Paragraph title" />
                        <TextArea placeholder="Paragraph text" />
                    </div>
                })}
                <ButtonTransparent onClick={()=>setBlog({...blog, descr: [...blog.descr, {title: '', text: ''}]})}>Add paragraph +</ButtonTransparent>
            </div>
        </main>
    </>
}

export default CreateBlog