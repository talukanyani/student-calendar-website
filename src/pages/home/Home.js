import { useEffect } from 'react'
import Navbar from '../../components/Navbar'

export default function HomePage() {
    useEffect(() => {
        document.title = 'Student Calendar'
    })

    return (
        <>
            <Navbar />
            <h1>Home Page</h1>
        </>
    )
}
