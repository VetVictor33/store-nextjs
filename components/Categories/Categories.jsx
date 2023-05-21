"use client"
import React, { useState } from 'react'
import Placeholder from '@/public/assets/placeholder.jpg'
import Image from 'next/image'
import './Categories.css'

const categoryMock = [
    { id: 1, name: 'Eletrônicos' },
    { id: 2, name: 'Cozinha' },
    { id: 3, name: 'Lar' },
    { id: 4, name: 'Roupas' },
    { id: 5, name: 'Sapatos' },
    { id: 6, name: 'Esporte' },
]
export default function Categories() {
    const [page, setPage] = useState(0)


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
            <div className="carousel" style={{ transform: `translateX(${page * 32}vw)` }} >
                {
                    categoryMock.map(category => (
                        <div key={category.id}>
                            <div key={`${category.id}-img`} className='img-div'>
                                <Image src={Placeholder} alt={category.name} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="buttons">
                <button onClick={() => handlePageChange('-')}>{'<'}</button>
                <button onClick={() => handlePageChange('+')}>{'>'}</button>
            </div>
        </div >
    )
}
