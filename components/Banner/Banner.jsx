"use client"

import { useEffect, useState } from "react"
import './Banner.css'

const bannerMock = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
]

export default function Banner() {
    const [page, setPage] = useState(0);
    const [transition, setTransition] = useState(1);

    const handlePageChange = (change) => {
        switch (change) {
            case '-':
                setPage((prevPage) => {
                    if (prevPage == 0) {
                        setTransition(3)
                        return (bannerMock.length - 1) * -1
                    }
                    if (transition !== 1) {
                        setTransition(1)
                    }
                    return prevPage + 1
                })
                break;
            case '+':
                setPage((prevPage) => {
                    if (prevPage === (bannerMock.length - 1) * -1) {
                        setTransition(3)
                        return 0
                    }
                    if (transition !== 1) {
                        setTransition(1)
                    }
                    return prevPage - 1
                })
                break
        }
    }


    useEffect(() => {
        const myInterval = setInterval(() => {
            handlePageChange('+')
        }, 5000);

        return () => clearInterval(myInterval);
    }, [])

    return (
        <div className="Banner">
            <div className="carousel" style={{ transform: `translateX(${page * 100}vw)`, transition: `${transition}s` }}>
                {bannerMock.map(item => (
                    <div key={item.id} className="item">{item.id}</div>
                ))}
            </div>
            <div className="buttons">
                <button onClick={() => handlePageChange('-')}>{'<'}</button>
                <button onClick={() => handlePageChange('+')}>{'>'}</button>
            </div>
        </div>
    )
}
