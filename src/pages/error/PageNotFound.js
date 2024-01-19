import { useEffect } from 'react'

export default function PageNotFound() {
    useEffect(() => {
        document.title = '404'
    })

    return (
        <h1>404 - Page Not Found</h1>
    )
}
