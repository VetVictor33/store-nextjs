import './CartItem.css';
import { refactorCurrencyFromCents } from '@/utils/refactor';
import { Image as DatoImage } from "react-datocms"

export default function CartItem({ item }) {
    const { image, name, price, amount } = item;
    return (
        <div className='CartItem'>
            <DatoImage data={image.responsiveImage} />
            <p className='name'>{name}</p>
            <div>
                <p className='price'>{refactorCurrencyFromCents(price)}</p>
                <p>{amount}</p>
            </div>
        </div>
    )
}
