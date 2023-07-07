"use client"
import { performRequest } from '@/lib/datocms'
import { SALES_QUERY } from '@/lib/querys'
import Arrow from '@/public/assets/icons/arrow.svg'
import { refactorCurrencyFromCents } from '@/utils/refactor'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Image as DatoImage } from "react-datocms"
import './Sales.css'

export default function Sales() {
  const [sales, setSales] = useState([]);
  const [page, setPage] = useState(Math.floor((sales?.length) / -3))

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
          if (prevPage === (sales?.length - 3) * -1) {
            return prevPage
          }
          return prevPage - 1
        })
        break
    }
  }

  useEffect(() => {
    async function getData() {
      const { data: allSales } = await performRequest({ query: SALES_QUERY });
      setSales(allSales.allSales)
    }
    getData()
  }, [])
  return (
    <div className='Sales'>
      <div className="buttons">
        <div className='bt' onClick={() => handlePageChange('-')}>
          <Image src={Arrow} alt='<' />
        </div>
        <div className='bt' onClick={() => handlePageChange('+')}>
          <Image src={Arrow} alt='>' />
        </div>
      </div>
      <div className="carousel" style={{ transform: `translateX(${page * 32}vw)` }} >
        {sales &&
          sales.map(({ id, productOnSale, sale }) => (
            <div key={id}>
              <div key={`${id}-img`} className='img-div'>
                <div key={`${id}-info`} className='info'>
                  <p key={`${id}-name`} className='name'>{productOnSale.name}</p>
                  <div className="prices">
                    <p key={`${id}-price`} className='old-price'>{refactorCurrencyFromCents(productOnSale.price)}</p>
                    <p key={`${id}-sale-price`} className='sale-price'>{refactorCurrencyFromCents(+productOnSale.price * sale)}</p>
                  </div>
                </div>
                <div className='img-div'>
                  <DatoImage data={productOnSale.image.responsiveImage} />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div >
  )
}
