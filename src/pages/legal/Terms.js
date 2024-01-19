import { useEffect } from 'react'

export default function TermsPage() {
    useEffect(() => {
        document.title = 'Terms of Use - Student Calendar'
    })

    return (
        <h1>Terms of Use Page</h1>
    )
}
