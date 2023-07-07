"use client"
import './CartDialog.css';

import CartItem from '../CartItem/CartItem';
import { getItem } from '@/utils/storage';
import { refactorCurrencyFromCents } from '@/utils/refactor';
import { useRouter } from 'next/navigation';


export default function CartDialog({ cartDialog, handleCartDialog }) {
    const cart = getItem('cart')
    const priceArray = cart?.map(item => item.price)
    const totalprice = priceArray?.reduce((previous, current) => {
        return previous + current
    })

    const navigate = useRouter()

    return (
        <dialog ref={cartDialog} className="CartDialog">
            <div className='header'>
                <p className='title'>Carrinho</p>
                <p className='close-bt' onClick={handleCartDialog}>X</p>
            </div>

            {cart?.length ?
                <>
                    {cart.map(item => (
                        <CartItem key={item.id * Math.random()} item={item} />
                    ))}
                </>
                :
                <h1 className='empty-cart'>Carrinho vazio!</h1>
            }

            <div className='total'>
                {cart?.length &&
                    <p className='total'>{refactorCurrencyFromCents(totalprice)}</p>}
                <button
                    onClick={() => navigate.push('/carrinho')}
                >Ir para o carrinho</button>
            </div>
        </dialog>
    )
}
