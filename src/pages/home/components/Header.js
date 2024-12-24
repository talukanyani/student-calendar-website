import styles from './Header.module.css'
import DownloadButtons from './DownloadBtns'

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <h1 className='small_heading'>
                    Student Calendar
                </h1>
                <h2>
                    Stay Organised and on Track.
                    Manage your School Work Effortlessly.
                </h2>
                <DownloadButtons />
            </div>
        </header>
    )
}
