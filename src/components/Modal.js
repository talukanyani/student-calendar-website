import styles from './Modal.module.css'

export default function Modal({ isOpen, close, width, children }) {
    return (
        <div
            onClick={close}
            className={[
                styles.modal,
                isOpen ? styles.modal_visible : undefined,
            ].join(' ')}
        >
            <div
                onClick={event => event.stopPropagation()}
                className={[
                    styles.modal_content,
                    isOpen ? styles.modal_content_visible : undefined,
                ].join(' ')}
                style={{ width: width }}
            >
                {children}
            </div>
        </div>
    )
}
