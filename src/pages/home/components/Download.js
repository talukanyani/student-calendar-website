import styles from './Download.module.css'
import DownloadButtons from './DownloadBtns'

export default function Download() {
    return (
        <div id='download' className={styles.download}>
            <h2 className='small_heading'>Download</h2>
            <DownloadButtons />
        </div>
    )
}
