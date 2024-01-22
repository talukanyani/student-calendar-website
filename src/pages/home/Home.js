import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Header from './components/Header'
import Features from './components/Features'
import Download from './components/Download'

export default function HomePage() {
    useEffect(() => {
        document.title = 'Student Calendar'
    })

    return (
        <>
            <Navbar />
            <Header />
            <Features />
            <Download />
        </>
    )
}
