import { useNavigate } from "react-router-dom"
import styles from './ButtonBack.module.scss'
function ButtonBack() {
    const navigate = useNavigate()
    return <button onClick={() => navigate('/')} className={styles.style}>Back</button>
}

export default ButtonBack