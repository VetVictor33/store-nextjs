import Image from 'next/image';
import './CartItem.css';
import { refactorPrice } from '@/utils/refactorPrice';

export default function CartItem({ item }) {
    const { slug, name, price } = item;
    return (
        <div className='CartItem'>
            <Image src={slug} alt={name} />
            <p className='name'>{name}</p>
            <p className='price'>{refactorPrice(price, 'R$')}</p>
        </div>
    )
}
