import styles from './Navbar.module.css'
import logo from '../assets/images/logo.svg'

export default function Navbar() {
    return (
        <>
            <div className={styles.navbar_placeholder}></div>
            <div className={styles.navbar}>
                <a href='/'>
                    <img src={logo} alt='Student Calendar logo' />
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href='/#header'>Home</a>
                        </li>
                        <li>
                            <a href='/#features'>Features</a>
                        </li>
                        <li>
                            <a href='/#download'>Download</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
