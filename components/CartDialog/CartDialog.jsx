import './CartDialog.css';

import CartItem from '../CartItem/CartItem';
import { useState } from 'react';


export default function CartDialog({ cartDialog, handleCartDialog }) {
    const [itensMock, set] = useState([])

    return (
        <dialog ref={cartDialog} className="CartDialog">
            <div className='header'>
                <p className='title'>Carrinho</p>
                <p className='close-bt' onClick={handleCartDialog}>X</p>
            </div>

            {itensMock.length ?
                <>
                    {itensMock.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <p className='total'>Total:</p>
                </>
                :
                <h1 className='empty-cart'>Carrinho vazio!</h1>
            }
        </dialog>
    )
}
