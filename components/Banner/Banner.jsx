"use client"

import { BANNER_QUERY } from "@/lib/querys";
import Arrow from '@/public/assets/icons/arrow.svg';
import { Image as DatoImage } from "react-datocms"
import Image from "next/image";
import { useEffect, useState } from "react";
import './Banner.css';
import { performRequest } from "@/lib/datocms";


let myInterval;

export default function Banner() {
    const [page, setPage] = useState(0);
    const [bannerImages, setBannerImages] = useState([]);
    const [transition, setTransition] = useState(1);

    const handlePageChange = (change) => {
        clearInterval(myInterval);
        myInterval = setInterval(() => {
            handlePageChange('+')
        }, 5000);
        switch (change) {
            case '-':
                setPage((prevPage) => {
                    if (prevPage === 0) {
                        setTransition(3)
                        return (bannerImages.length - 1) * -1
                    }
                    if (transition !== 1) {
                        setTransition(1)
                    }
                    return prevPage + 1
                })
                break;
            case '+':
                setPage((prevPage) => {
                    if (prevPage <= (bannerImages.length - 1) * -1) {
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
        async function getData() {
            const { data: allBanners } = await performRequest({ query: BANNER_QUERY });
            setBannerImages(allBanners.allBanners)
        }
        getData()
        return () => clearInterval(myInterval);
    }, [])

    return (
        <div className="Banner">
            <div className="carousel" style={{ transform: `translateX(${page * 100}vw)`, transition: `${transition}s` }}>
                {bannerImages && bannerImages.map(item => (
                    <DatoImage data={item.image.responsiveImage} />
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
