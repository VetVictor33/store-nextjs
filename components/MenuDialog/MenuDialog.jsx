import './MenuDialog.css';
import Link from 'next/link';

export default function MenuDialog({ menuDialog, handleMenuDialog, categoryMock, dialogStatus }) {

    const handleMenuDialogEvent = (e) => {
        const dimentions = menuDialog.current.getBoundingClientRect();
        if (e.clientX > dimentions.width) {
            handleMenuDialog()
        }
    }

    return (
        <dialog ref={menuDialog} className='categories-list' onClick={handleMenuDialogEvent}>

            <Link className='title highlight' href={'/'}
                onClick={handleMenuDialog}>
                Destaques</Link>
            <p className='close-bt' onClick={handleMenuDialog}>X</p>

            <p className='title'>Categorias:</p>

            {categoryMock.map(category => (
                <Link key={category.id}
                    onClick={handleMenuDialog}
                    href={`/products/category/${category.slug}`}
                    className='item'
                >
                    {category.name}
                </Link>
            ))}

        </dialog>
    )
}
