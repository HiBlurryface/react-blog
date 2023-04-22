import Title from "components/simple/title/Title"
import main from 'assets/styles/Main.module.scss';
import styles from 'assets/styles/Blog.module.scss';
import ButtonBack from "components/UI/buttonBack/ButtonBack";

function Blog() {
    return <>
        <header className={main.header}>
            <ButtonBack />        
        </header>
        <main className={main.body}>
            <Title>Title</Title>
        </main>
    </>
}

export default Blog