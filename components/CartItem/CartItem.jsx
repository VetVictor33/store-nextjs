import Image from 'next/image';
import './CartItem.css';
import { refactorCurrencyFromCents } from '@/utils/refactor';

export default function CartItem({ item }) {
    const { slug, name, price } = item;
    return (
        <div className='CartItem'>
            <Image src={slug} alt={name} />
            <p className='name'>{name}</p>
            <p className='price'>{refactorCurrencyFromCents(price)}</p>
        </div>
    )
}
