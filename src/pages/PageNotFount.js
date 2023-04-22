import ButtonBack from "components/UI/buttonBack/ButtonBack"
import Title from "components/simple/title/Title"
import main from 'assets/styles/Main.module.scss';

function PageNotFound() {
    return <>
        <header className={main.header}>
            <ButtonBack />
        </header>
        <main className={main.body}>
            <Title>Page not found</Title>
        </main>
    </>
}

export default PageNotFound