import styles from 'assets/styles/Blogs.module.scss'
import main from 'assets/styles/Main.module.scss'
import Button from 'components/UI/button/Button'
import Title from 'components/simple/title/Title'
import Blog from 'components/smart/blog/Blog'

function Blogs({data}) {

    return <>
        <header className={main.header}>
            <Button>Create blog</Button>
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