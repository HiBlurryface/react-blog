import styles from 'assets/styles/Blogs.module.scss'
import main from 'assets/styles/Main.module.scss'
import ButtonTransparent from 'components/UI/buttonTransparent/ButtonTransparent'
import Title from 'components/simple/title/Title'
import Blog from 'components/smart/blog/Blog'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Subtitle from 'components/simple/subtitle/Subtitle'

function Blogs() {
    const navigate = useNavigate();
    const blogs = useSelector(state => state.blogs)
    
    return <>
        <header className={main.header}>
            <ButtonTransparent onClick={() => navigate('/create-blog')}>Create blog</ButtonTransparent>
        </header>
        <main className={main.body}>
            <Title>Blogs</Title>
            <div className={styles.container}>
                {blogs.length === 0
                    ? <Subtitle>There are currently no blogs. Be the first to add a blog</Subtitle>
                    : blogs.map((blog, index) => {
                        return <Blog data={blog} key={index} />
                    })
                }
            </div>
        </main>
    </>
}

export default Blogs