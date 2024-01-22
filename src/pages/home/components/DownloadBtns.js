import styles from './DownloadBtns.module.css'
import { PLAY_STORE_LINK } from '../../../utils/constants'
import play_store_img from '../../../assets/images/play_store.svg'
import app_store_img from '../../../assets/images/app_store.svg'

export default function DownloadButtons() {
    return (
        <section className={styles.download_btns}>
            <a href={PLAY_STORE_LINK}>
                <img src={play_store_img} alt='Play Store buttton' />
            </a>
            <button>
                <img src={app_store_img} alt='App Store buttton' />
            </button>
        </section>
    )
}
