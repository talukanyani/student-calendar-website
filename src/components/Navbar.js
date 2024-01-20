import styles from './Navbar.module.css'
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg'
import menu_icon from '../assets/icons/menu.svg'
import close_icon from '../assets/icons/close.svg'

export default function Navbar() {
    const [isMenuInsertedToDOM, setIsMenuInsertedToDOM] = useState(false)
    const [isMenuVisibleToScreen, setIsMenuVisibleToScreen] = useState(false)

    const openMenu = () => {
        setIsMenuInsertedToDOM(true)
        setTimeout(() => {
            setIsMenuVisibleToScreen(true)
        }, 50);
    }

    const closeMenu = () => {
        setIsMenuVisibleToScreen(false)
        setTimeout(() => {
            setIsMenuInsertedToDOM(false)
        }, 1000);
    }

    return (
        <>
            <div className={styles.navbar_placeholder}></div>
            <div className={styles.navbar}>
                {/* Logo */}
                <a href='/'>
                    <img src={logo} alt='Student Calendar logo' />
                </a>
                {/* Navbar Navigations 
                    - Hidden by CSS when screen is small */}
                <Navigations />
                {/* Icon button to open menu 
                    - Hidden by CSS when the screen is large*/}
                <button className='icon_btn' onClick={openMenu}>
                    <img src={menu_icon} alt='Open menu icon' />
                </button>
            </div>
            {isMenuInsertedToDOM && createPortal(
                <Menu isOpen={isMenuVisibleToScreen} close={closeMenu} />,
                document.body,
            )}
        </>
    )
}

function Menu({ isOpen, close }) {
    return (
        <div className={isOpen ? styles.is_menu : undefined}>
            <div className={styles.menu_overlay} onClick={close}></div>
            <div className={styles.menu_content}>
                {/* Menu header */}
                <section>
                    <button className='icon_btn' onClick={close}>
                        <img src={close_icon} alt='Close menu icon' />
                    </button>
                </section>
                {/* Menu Navigations */}
                <Navigations onNavClick={close} />
            </div>
        </div>
    );
}

function Navigations({ onNavClick = () => { } }) {
    return (
        <nav className={styles.navigations}>
            <ul>
                <li>
                    <Link to='/' onClick={() => {
                        onNavClick()
                        window.scrollTo(0, 0)
                    }}>
                        Home
                    </Link>
                </li>
                <li>
                    <a href='/#features' onClick={onNavClick}>
                        Features
                    </a>
                </li>
                <li>
                    <a href='/#download' onClick={onNavClick}>
                        Download
                    </a>
                </li>
            </ul>
        </nav>
    )
}
