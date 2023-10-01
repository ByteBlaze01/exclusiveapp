import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import Image from 'next/image';
// import { ProductService } from './service/ProductService';


export function Slider() {

    // const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    return (
        <div className=''>
            <Image
                src="/Images/slideOne.svg"
                alt="Vercel Logo"
                width={0}
                height={0}
                priority
                style={{ width: 'auto', height: '70vh' }}
            />
        </div>
    );
}