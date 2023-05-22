"use client"
import React, { useState } from 'react'
import makeup from '@/public/assets/products/makeup.jpg'
import pans from '@/public/assets/products/pans.jpg'
import jacket from '@/public/assets/products/jacket.jpg'
import phone from '@/public/assets/products/phone.jpg'
import shoes from '@/public/assets/products/shoes.jpg'
import shoes2 from '@/public/assets/products/shoes2.jpg'
import Arrow from '@/public/assets/icons/arrow.svg'
import Image from 'next/image'
import './Sales.css'

const productsMock = [
  { id: 1, name: 'Kit de Maquiagem', price: 19999, category: 'Beleza', slug: makeup },
  { id: 2, name: 'Jogo de panelas', price: 49999, category: 'Cozinha', slug: pans },
  { id: 3, name: "Jaqueta Rock 'n' Roll", price: 9999, category: 'Vestimenta', slug: jacket },
  { id: 4, name: 'uPhone23', price: 1500000, category: 'Eletrônicos', slug: phone },
  { id: 5, name: 'Mike', price: 29999, category: 'Sapatos', slug: shoes },
  { id: 6, name: 'Saddida', price: 16999, category: 'Esporte', slug: shoes2 },
]

const saleMock = 0.75
export default function Sales() {
  const [page, setPage] = useState(Math.floor((productsMock.length - 3) / -2))

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
          if (prevPage === (productsMock.length - 3) * -1) {
            return prevPage
          }
          return prevPage - 1
        })
        break
    }
  }

  return (
    <div className='Sales'>
      <p className='title'>Ofertas imperdíveis</p>
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
          productsMock.map(category => (
            <div key={category.id}>
              <div key={`${category.id}-img`} className='img-div'>
                <div key={`${category.id}-info`} className='info'>
                  <p key={`${category.id}-name`} className='name'>{category.name}</p>
                  <div className="prices">
                    <p key={`${category.id}-price`} className='old-price'>R$ {category.price / 100}</p>
                    <p key={`${category.id}-sale-price`} className='sale-price'>R$ {((category.price / 100) * saleMock).toFixed(2)}</p>
                  </div>
                </div>
                <Image src={category.slug} alt={category.name} />
              </div>
            </div>
          ))
        }
      </div>
    </div >
  )
}
