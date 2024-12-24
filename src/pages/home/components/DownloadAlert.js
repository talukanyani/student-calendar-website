import styles from './DownloadAlert.module.css'
import Modal from '../../../components/Modal'
import { PLAY_STORE_LINK } from '../../../utils/constants'

export default function DownloadAlert({ isOpen, close }) {
    return (
        <Modal isOpen={isOpen} close={close} width={440}>
            <div className={styles.download_alert}>
                <h1>Download For iOS</h1>
                <p>
                    For now, Student Calendar is only available for Android
                    on <a href={PLAY_STORE_LINK}>Play Store</a>.
                    It will be available for iOS on App Store soon.
                </p>
                <button className='primary_btn' onClick={close}>
                    OK
                </button>
            </div>
        </Modal>
    )
}
