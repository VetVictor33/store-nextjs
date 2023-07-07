import { HIGTLIGHT_QUERY } from '@/lib/querys';
import { Image as DatoImage } from "react-datocms"
import { performRequest } from '@/lib/datocms';
import { useEffect, useState } from 'react';
import './Highlight.css';


export default function Highlight() {
    const [highlights, setHightlights] = useState([]);

    useEffect(() => {
        async function getData() {
            const { data: allHighlights } = await performRequest({ query: HIGTLIGHT_QUERY });
            setHightlights(allHighlights.allHighlights)
        }
        getData()
    }, [])
    return (
        <div className='Highlight'>
            <div className='itens'>
                {highlights && highlights.map(item => (
                    <DatoImage data={item.image.responsiveImage} />
                ))}
            </div>
        </div>
    )
}
