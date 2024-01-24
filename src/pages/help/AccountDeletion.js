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
                    your synced data such assessments and subjects will
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
                        On small screen device, tap on <b>profile icon</b>
                        {' '}at top right.
                        On large screen device, tap on <b>settings icon</b>
                        {' '}at bottom left.
                    </li>
                    <li>
                        Tap on account settings, a tile with
                        {' '}<b>profile icon, your name, and your email</b>.
                    </li>
                    <li>Tap <b>Delete Account</b>.</li>
                    <li>Tap <b>Sign in again</b> button.</li>
                    <li>After signing in again, tap <b>Delete</b> button.</li>
                </ol>

            </main>

            <Footer />
        </>
    )
}
