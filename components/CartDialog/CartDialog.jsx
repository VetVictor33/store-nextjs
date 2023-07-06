import './CartDialog.css';

import jacket from '@/public/assets/products/jacket.jpg';
import makeup from '@/public/assets/products/makeup.jpg';
import pans from '@/public/assets/products/pans.jpg';
import phone from '@/public/assets/products/phone.jpg';
import shoes from '@/public/assets/products/shoes.jpg';
import shoes2 from '@/public/assets/products/shoes2.jpg';
import CartItem from '../CartItem/CartItem';

const itensMock = [
    { id: 1, name: 'Kit de Maquiagem', price: 19999, category: 'Beleza', slug: makeup },
    { id: 2, name: 'Jogo de panelas', price: 49999, category: 'Cozinha', slug: pans },
    { id: 3, name: "Jaqueta Rock 'n' Roll", price: 9999, category: 'Vestimenta', slug: jacket },
    { id: 4, name: 'uPhone23', price: 1500000, category: 'Eletrônicos', slug: phone },
    { id: 5, name: 'Mike', price: 29999, category: 'Sapatos', slug: shoes },
    { id: 6, name: 'Saddida', price: 16999, category: 'Esporte', slug: shoes2 },
]

export default function CartDialog({ cartDialog, handleCartDialog }) {

    return (
        <dialog ref={cartDialog} className="CartDialog">
            <div className='header'>
                <p className='title'>Carrinho</p>
                <p className='close-bt' onClick={handleCartDialog}>X</p>
            </div>

            {itensMock ?
                <>
                    {itensMock.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <p className='total'>Total: 'TODO'</p>
                </>
                :
                <h1 className='empty-cart'>Carrinho vazio!</h1>
            }
        </dialog>
    )
}
