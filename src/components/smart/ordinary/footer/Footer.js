import styles from './Footer.module.scss'
import instagram from 'assets/images/instagram-icon.svg';
import telegram from 'assets/images/telegram-icon.svg';
import linkedin from 'assets/images/linkedin-icon.svg';

function Footer() {
    const social = [
        {
            icon: instagram,
            link: 'https://www.instagram.com/hiblurryface__/',
        },
        {
            icon: telegram,
            link: 'https://t.me/hiblurryface',
        },
        {
            icon: linkedin,
            link: 'https://www.linkedin.com/in/alexandr-ksenz-0471b1241/',
        },
    ]

    return <footer className={styles.wrapper}>
        <div className={styles.container}>
            {social.map(item => {
                return <a href={item.link} className={styles.link}>
                    <img src={item.icon} alt="" className={styles.icon} />
                </a>
            })}
        </div>
        <p className={styles.text}>Alexandr Ksenz © 2023 All rights reserved</p>
    </footer>
}

export default Footer