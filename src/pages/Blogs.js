import styles from 'assets/styles/Blogs.module.scss'
import main from 'assets/styles/Main.module.scss'
import ButtonTransparent from 'components/UI/buttonTransparent/ButtonTransparent'
import Title from 'components/simple/title/Title'
import Blog from 'components/smart/blog/Blog'
import { useNavigate } from 'react-router-dom'

function Blogs({data}) {
    const navigate = useNavigate()
    return <>
        <header className={main.header}>
            <ButtonTransparent onClick={()=> navigate('/create-blog')}>Create blog</ButtonTransparent>
        </header>
        <main className={main.body}>
            <Title>Blogs</Title>
            <div className={styles.container}>
                {data.map((blog, index) => {
                    return <Blog data={blog} key={index}/>
                })}
            </div>
        </main>
    </>
}

export default Blogs