import styles from './PageNotFound.module.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

export default function PageNotFound() {
    useEffect(() => {
        document.title = '404'
    })

    return (
        <>
            <Navbar />
            <div className={styles.page_not_found}>
                <h1>404</h1>
                <h2>Ooops! Page Not Found</h2>
                <p>We can not find the page you are looking for.</p>
                <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                    <button className='primary_btn'>Home Page</button>
                </Link>
            </div>
        </>
    )
}
