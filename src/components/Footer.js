import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    const scrollToTop = () => window.scrollTo(0, 0)
    const currentDate = new Date()

    return (
        <footer className={styles.footer}>
            <p>
                &copy; Student Calendar (Pty) Ltd
                {' ' + currentDate.getFullYear()}
            </p>
            <ul>
                <li>
                    <Link to='/terms' onClick={scrollToTop}>
                        Terms
                    </Link>
                </li>
                <li>
                    <Link to='/privacy' onClick={scrollToTop}>
                        Privacy
                    </Link>
                </li>
            </ul>
        </footer>
    )
}
