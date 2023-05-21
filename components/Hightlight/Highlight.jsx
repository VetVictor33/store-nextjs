import './Highlight.css'
import Highlight1 from '@/public/assets/highlights/highlight1.jpg'
import Highlight2 from '@/public/assets/highlights/highlight2.jpg'
import Highlight3 from '@/public/assets/highlights/highlight3.jpg'
import Image from 'next/image'


const highlightMock = [
    { id: 1, img: Highlight1 },
    { id: 2, img: Highlight2 },
    { id: 3, img: Highlight3 }
]

export default function Highlight() {
    return (
        <div className='Highlight'>
            <div className='itens'>
                {highlightMock.map(item => (
                    <Image key={item.id} src={item.img} />
                ))}
            </div>
            <div className='fixed-element'>

            </div>
        </div>
    )
}
