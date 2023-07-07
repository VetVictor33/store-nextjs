import './CartItem.css';
import { refactorCurrencyFromCents } from '@/utils/refactor';
import { Image as DatoImage } from "react-datocms"

export default function CartItem({ item, handleAmountChange }) {
    const { id, image, name, price, amount } = item;

    return (
        <div className='CartItem'>
            <div className='img-div'>
                <DatoImage data={image.responsiveImage} />
            </div>
            <p className='name'>{name}</p>
            <div>
                <div className='total-price-div'>
                    <div className='buttons-div'>
                        <button
                            onClick={() => handleAmountChange(id, '-')}
                        >-</button>
                        <p>x{amount}</p>
                        <button
                            onClick={() => handleAmountChange(id, '+')}
                        >+</button>
                    </div>
                    <p>{refactorCurrencyFromCents(price)}</p>
                    <p className='price'>total: {refactorCurrencyFromCents((amount * price))}</p>
                    <div className='buttons-div'>
                        <button
                            onClick={() => handleAmountChange(id, 0)}
                        >X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
