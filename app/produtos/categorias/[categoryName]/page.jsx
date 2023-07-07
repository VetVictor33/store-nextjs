"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation";
import { performRequest } from '@/lib/datocms';
import { PRODUCTS_QUERY } from '@/lib/querys';
import { refactorCurrencyFromCents, removeEspecialCharacter } from '@/utils/refactor';
import { Image as DatoImage } from "react-datocms"
import { setItem } from '@/utils/storage';


export default function ProductByCategory() {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getData() {
            const { data } = await performRequest({ query: PRODUCTS_QUERY });
            const { allProducts } = data
            setItem('products', allProducts)
            const thisCategoryProducts = []
            allProducts.forEach(item => item.category.forEach(category => {
                if (removeEspecialCharacter(category.name) === categoryName) {
                    thisCategoryProducts.push(item)
                }
            }))
            setProducts(thisCategoryProducts)
        }
        getData()
    }, [])
    return (
        <div>
            {products?.length > 0 ?
                products.map(product => (
                    <div className='ProductPage'>
                        <div className='image-div'>
                            <DatoImage data={product?.image?.responsiveImage} />
                        </div>
                        <div className='details-div'>
                            <p className='name'>{product.name}</p>
                            <p className='old-price'>{refactorCurrencyFromCents(product.price)}</p>
                        </div>
                        <div className='bottuns'>
                            <button
                            // onClick={handleAddToCart}
                            >Adicionar ao carrinho</button>
                        </div>
                    </div>
                ))
                :
                <p>Sem produtos nessa categoria</p>
            }
        </div>
    )
}
