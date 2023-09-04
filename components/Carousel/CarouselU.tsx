"use client"
import Image from 'next/image'
import React from 'react'
import src from '../../public/carousel/fulfillment1.webp';
import src2 from '../../public/carousel/wall.jpg';
// images
import StatsBox from '../Hero/StatsBox';

const CarouselU = () => {
    return (
        <div className='relative mx-4 my-5'>
            <div className='grid grid-cols-1 md:grid-cols-2'>

                <Image
                    src={src2}
                    alt='..'
                    width={600}
                    height={600}
                />
                <div className='mt-10 md:mt-52'>
                    <p className='text-blue-900 text-5xl font-bold tracking-tight'>Enhance your customer experience</p>
                    <p className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-600 to-purple-600 tracking-tight'>at every touch point</p>
                </div>
            </div>
            <div>
                <p className='mt-8 text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 via-purple-600 to-purple-600 tracking-tight'>Fulfillment</p>
                <p className='mt-8 text-transparent text-4xl text-black tracking-tight'>Fulfill every need</p>

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <StatsBox n={'B2C fulfillment'} t={'Store inventory closest to your customers & deliver their packages on the same or the next day'} />
                        <StatsBox n={'B2B shipping'} t={'Fulfill and ship your B2B orders in bulk and on time with our end-to-end solution'} />
                        <StatsBox n={'Omnichannel enablement'} t={'Connect your warehouses, stores, marketplaces, and website to provide a unified experience'} />
                    </div>
                    <Image
                        src={src}
                        alt='..'
                        width={600}
                        height={600}
                    />
                </div>

            </div>
        </div>


    )
}

export default CarouselU

// 