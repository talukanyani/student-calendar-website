import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Header from './components/Header'
import Features from './components/Features'

export default function HomePage() {
    useEffect(() => {
        document.title = 'Student Calendar'
    })

    return (
        <>
            <Navbar />
            <Header />
            <Features />
        </>
    )
}
