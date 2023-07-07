"use client"
import React from 'react'
import { useParams, useRouter } from "next/navigation";
import { getItem, setItem } from '@/utils/storage';
import { Image as DatoImage } from "react-datocms"
import { refactorCurrencyFromCents } from '@/utils/refactor';
import './ProductPage.css'


export default function ProductPage() {
    const { productId } = useParams();
    const navigate = useRouter()
    const productsOnSale = getItem('productsOnSale')
    const { productOnSale, sale } = productsOnSale.find(element => element.id === productId)
    if (!productOnSale) navigate.push('/')

    const handleAddToCart = () => {
        const salePrice = productOnSale.price * sale
        const product = { ...productOnSale, price: salePrice }
        const cart = getItem('cart')
        if (cart) {
            cart.push(product)
            setItem('cart', cart)
        } else {
            setItem('cart', [product])
        }
    }

    return (
        <div className='ProductPage'>
            <div className='image-div'>
                <DatoImage data={productOnSale.image.responsiveImage} />
            </div>
            <div className='details-div'>
                <p className='name'>{productOnSale.name}</p>
                <p className='old-price'>{refactorCurrencyFromCents(productOnSale.price)}</p>
                <p className='price'>{refactorCurrencyFromCents(productOnSale.price * sale)}</p>
            </div>
            <div className='bottuns'>
                <button
                    onClick={handleAddToCart}
                >Adicionar ao carrinho</button>
            </div>
        </div>
    )
}
