import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
    const { pathname } = useLocation()
    const [old, setOld] = useState('/')

    sessionStorage.setItem(old, window.scrollY)

    useEffect(() => {
        let oldScroll = sessionStorage.getItem(pathname)
        if (oldScroll) {
            window.scrollTo({
                top: oldScroll,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo(0, 0)
        }
        setOld(pathname)
    }, [pathname])

    return null
}

export default ScrollToTop
