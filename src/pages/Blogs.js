import styles from 'assets/styles/Blogs.module.scss'
import main from 'assets/styles/Main.module.scss'
import Title from 'components/simple/title/Title'
import Blog from 'components/smart/blog/Blog'

function Blogs() {
    const data = [
        {
            id: '1',
            title: 'Test',
            date: '20 Mar 2003',
            descr: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            img: '',
            tags: ['Tag', 'Test']
        },
        {
            id: '2',
            title: 'Test',
            date: '20 Mar 2003',
            descr: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            img: '',
            tags: ['Tag', 'Test', 'Test', 'Test', 'Test',]
        },
        {
            id: '3',
            title: 'Test',
            date: '20 Mar 2003',
            descr: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            img: '',
            tags: ['Tag', 'Test']
        },
    ]

    return <>
        <header className={main.header}>
            <button className={main.header__button}>Create blog</button>
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