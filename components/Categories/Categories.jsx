"use client"
import React, { useState } from 'react'
import Beauty from '@/public/assets/categories/beauty.jpg'
import Kitchen from '@/public/assets/categories/kitchen.jpg'
import Clothing from '@/public/assets/categories/clothing.jpg'
import Eletronics from '@/public/assets/categories/eletronics.jpg'
import Shoes from '@/public/assets/categories/shoes.jpg'
import Sports from '@/public/assets/categories/sports.jpg'
import Arrow from '@/public/assets/icons/arrow.svg'
import Image from 'next/image'
import './Categories.css'

const categoryMock = [
    { id: 1, name: 'Beleza', slug: Beauty },
    { id: 2, name: 'Cozinha', slug: Kitchen },
    { id: 3, name: 'Vestimenta', slug: Clothing },
    { id: 4, name: 'Eletrônicos', slug: Eletronics },
    { id: 5, name: 'Sapatos', slug: Shoes },
    { id: 6, name: 'Esporte', slug: Sports },
]
export default function Categories() {
    const [page, setPage] = useState(Math.floor((categoryMock.length - 3) / -2))

    const handlePageChange = (change) => {
        switch (change) {
            case '-':
                setPage((prevPage) => {
                    if (prevPage == 0) {
                        return prevPage
                    }
                    return prevPage + 1
                })
                break;
            case '+':
                setPage((prevPage) => {
                    if (prevPage === (categoryMock.length - 3) * -1) {
                        return prevPage
                    }
                    return prevPage - 1
                })
                break
        }
    }

    return (
        <div className='Categories'>
            <div className="buttons">
                <div className='bt' onClick={() => handlePageChange('-')}>
                    <Image src={Arrow} alt='<' />
                </div>
                <div className='bt' onClick={() => handlePageChange('+')}>
                    <Image src={Arrow} alt='>' />
                </div>
            </div>
            <div className="carousel" style={{ transform: `translateX(${page * 32}vw)` }} >
                {
                    categoryMock.map(category => (
                        <div key={category.id}>
                            <div key={`${category.id}-img`} className='img-div'>
                                <p key={`${category.id}-title`} className='title'>{category.name}</p>
                                <Image src={category.slug} alt={category.name} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
