import styles from './Header.module.css'
import play_store_img from '../../../assets/images/play_store.svg'
import app_store_img from '../../../assets/images/app_store.svg'

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <h1 className='small_heading'>
                    Student Calendar
                </h1>
                <h2>
                    Stay Organised and on Track.
                    Manage your Academic Assessments.
                </h2>
                <section className={styles.download_btns}>
                    <button>
                        <img
                            src={play_store_img}
                            alt='Play Store buttton'
                        />
                    </button>
                    <button>
                        <img
                            src={app_store_img}
                            alt='App Store buttton'
                        />
                    </button>
                </section>
            </div>
        </header>
    )
}
