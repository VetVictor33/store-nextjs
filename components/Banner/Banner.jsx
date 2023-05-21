"use client"

import { useEffect, useState } from "react"
import './Banner.css'
import Image from "next/image";
import Placeholder from '@/public/assets/placeholder.jpg'
import Banner1 from '@/public/assets/banners/banner1.jpg'
import Banner2 from '@/public/assets/banners/banner2.jpg'
import Banner3 from '@/public/assets/banners/banner3.jpg'
import Banner4 from '@/public/assets/banners/banner4.jpg'
import Banner5 from '@/public/assets/banners/banner5.jpg'
import Banner6 from '@/public/assets/banners/banner6.jpg'
import Arrow from '@/public/assets/icons/arrow.svg'


let myInterval;
const bannerMock = [
    { id: 1, img: Banner1 },
    { id: 2, img: Banner2 },
    { id: 3, img: Banner3 },
    { id: 4, img: Banner4 },
    { id: 5, img: Banner5 },
    { id: 6, img: Banner6 }
]

export default function Banner() {
    const [page, setPage] = useState(0);
    const [transition, setTransition] = useState(1);

    const handlePageChange = (change) => {
        clearInterval(myInterval);
        myInterval = setInterval(() => {
            handlePageChange('+')
        }, 5000);
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
        myInterval = setInterval(() => {
            handlePageChange('+')
        }, 5000);
        return () => clearInterval(myInterval);
    }, [])

    return (
        <div className="Banner">
            <div className="carousel" style={{ transform: `translateX(${page * 100}vw)`, transition: `${transition}s` }}>
                {bannerMock.map(item => (
                    <Image key={item.id} className="image" src={item.img} />
                ))}
            </div>
            <div className="buttons">
                <div className='bt' onClick={() => handlePageChange('-')}>
                    <Image src={Arrow} alt='<' />
                </div>
                <div className='bt' onClick={() => handlePageChange('+')}>
                    <Image src={Arrow} alt='>' />
                </div>
            </div>
        </div>
    )
}
