import Title from "components/simple/title/Title"
import main from 'assets/styles/Main.module.scss';
import styles from 'assets/styles/Blog.module.scss';
import { useNavigate } from "react-router-dom";

function Blog() {
    const navigate = useNavigate()
    return <>
        <header className={main.header}>
            <button onClick={()=> navigate('/')} className={main.header__button}>Back</button>
        </header>
        <main className={main.body}>
            <Title>Title</Title>
        </main>
    </>
}

export default Blog