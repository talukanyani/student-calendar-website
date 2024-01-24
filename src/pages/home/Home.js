import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Header from './components/Header'
import Features from './components/Features'
import Download from './components/Download'
import Footer from '../../components/Footer'

export default function HomePage() {
    useEffect(() => {
        document.title = 'Student Calendar'
    })

    return (
        <>
            <Navbar />
            <main>
                <Header />
                <Features />
                <Download />
            </main>
            <Footer />
        </>
    )
}
