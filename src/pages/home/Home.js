import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Header from './components/Header'

export default function HomePage() {
    useEffect(() => {
        document.title = 'Student Calendar'
    })

    return (
        <>
            <Navbar />
            <Header />
        </>
    )
}
