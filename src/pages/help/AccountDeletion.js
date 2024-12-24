import styles from './AccountDeletion.module.css'
import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AccountDeletionPage() {
    useEffect(() => {
        document.title = 'Delete your account - Student Calendar'
    })

    return (
        <>
            <Navbar />

            <main className={styles.account_deletion}>

                <h1>Deleting your Account</h1>

                <p>
                    When you delete your account, your profile details
                    such as email and username will be deleted,
                    your synced data such assessments and plans will
                    be deleted.
                </p>
                <p>
                    Deleting your account is permanent, you won't be able
                    to retrive your account and its associated data.
                </p>

                <h2>To delete your account, follow the following steps:</h2>
                <p>You have to sign in with the account you want to delete.</p>
                <ol>
                    <li>
                        On small screen device, tap on <b>more icon</b>
                        {' '}at top right, then tap settings.
                        On large screen device, tap on <b>Settings</b>
                        {' '}at bottom left.
                    </li>
                    <li>Tap on <b>Account</b>.</li>
                    <li>Tap on <b>Delete Account</b>.</li>
                    <li>Tap <b>Re Sign In</b> button.</li>
                    <li>After re-signing in, tap <b>Delete</b> button.</li>
                </ol>

            </main>

            <Footer />
        </>
    )
}
