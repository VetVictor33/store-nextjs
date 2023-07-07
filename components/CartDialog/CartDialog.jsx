"use client"
import './CartDialog.css';

import CartItem from '../CartItem/CartItem';
import { getItem } from '@/utils/storage';
import { refactorCurrencyFromCents } from '@/utils/refactor';
import { useRouter } from 'next/navigation';
import { getTotalPrice } from '@/utils/cartUtils';


export default function CartDialog({ cartDialog, handleCartDialog }) {
    const cart = getItem('cart')
    const totalPrice = getTotalPrice(cart)
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
                        <CartItem key={item.id} item={item} />
                    ))}
                </>
                :
                <h1 className='empty-cart'>Carrinho vazio!</h1>
            }

            <div className='total'>
                {cart?.length &&
                    <p className='total'>{refactorCurrencyFromCents(totalPrice)}</p>}
                <button
                    onClick={() => navigate.push('/carrinho')}
                >Ir para o carrinho</button>
            </div>
        </dialog>
    )
}
