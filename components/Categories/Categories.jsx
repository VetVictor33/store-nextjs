"use client"
import { performRequest } from '@/lib/datocms'
import { CATEGORIES_QUERY } from '@/lib/querys'
import Arrow from '@/public/assets/icons/arrow.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import './Categories.css'
import { Image as DatoImage } from "react-datocms"
import { setItem } from '@/utils/storage'
import { useRouter } from 'next/navigation'
import { removeEspecialCharacter } from '@/utils/refactor'

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const navigate = useRouter()
    const [page, setPage] = useState(Math.floor((categories?.length) / -2))

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
                    if (prevPage === (categories.length - 3) * -1) {
                        return prevPage
                    }
                    return prevPage - 1
                })
                break
        }
    }

    useEffect(() => {
        async function getData() {
            const { data } = await performRequest({ query: CATEGORIES_QUERY });
            setCategories(data.allCategories)
            setItem('categories', data.allCategories)
        }
        getData()
    }, [])
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
                {categories &&
                    categories.map(category => (
                        <div key={category.id}
                            onClick={() => navigate.push(`/produtos/categorias/${removeEspecialCharacter(category.name)}`)}
                        >
                            <div key={`${category.id}-img`} className='img-div'>
                                <p key={`${category.id}-title`} className='title'>{category.name}</p>
                                <DatoImage data={category.image.responsiveImage} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
