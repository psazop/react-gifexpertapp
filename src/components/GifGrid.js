import React /*, { useState, useEffect }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifgridItem } from './GifgridItem';

export const GifGrid = ( { category } ) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Loading...</p> }
            
            <div className="card-grid">
                { images.map( ( img ) => (
                    <GifgridItem 
                        key={ img.id }
                    { ...img }
                    />
                ))}
            </div>
        </>
    )
}
