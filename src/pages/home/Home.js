import { useEffect } from 'react'

export default function HomePage() {
    useEffect(() => {
        document.title = 'Student Calendar'
    })

    return (
        <h1>Home Page</h1>
    )
}
