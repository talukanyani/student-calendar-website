import { useEffect } from 'react'

export default function PrivacyPage() {
    useEffect(() => {
        document.title = 'Privacy Policy - Student Calendar'
    })

    return (
        <h1>Privacy Policy Page</h1>
    )
}
