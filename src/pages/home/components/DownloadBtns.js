import styles from './DownloadBtns.module.css'
import { createPortal } from 'react-dom'
import DownloadAlert from './DownloadAlert'
import useHandlePortal from '../../../hooks/useHandlePortal'
import { PLAY_STORE_LINK } from '../../../utils/constants'
import play_store_img from '../../../assets/images/play_store.svg'
import app_store_img from '../../../assets/images/app_store.svg'

export default function DownloadButtons() {
    const [isPortal, isAlert, openAlert, closeAlert] = useHandlePortal()

    return (
        <>
            <section className={styles.download_btns}>
                <a href={PLAY_STORE_LINK}>
                    <img src={play_store_img} alt='Play Store buttton' />
                </a>
                <button onClick={openAlert}>
                    <img src={app_store_img} alt='App Store buttton' />
                </button>
            </section>
            {isPortal && createPortal(
                <DownloadAlert isOpen={isAlert} close={closeAlert} />,
                document.body,
            )}
        </>
    )
}
