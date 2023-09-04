"use client"

import Image from 'next/image'
import React from 'react'

// components
import StatsBox from './StatsBox'
import FeatureBox from './FeatureBox'

// images
import src from '../../public/home-A-trusted-growth-partner-rv.webp'
import src2 from '../../public/courier.webp'
import src3 from '../../public/carousel/fulfillment1.webp';
import src4 from '../../public/carousel/fulfillment1.webp';
import src5 from '../../public/carousel/fulfillment1.webp';

const arr = [
    {
        n: '2.5 Lakh+',
        t: 'merchants nationwide'
    },
    {
        n: '20 Crore',
        t: 'transactions every year'
    },
    {
        n: '₹ 30K Crore',
        t: 'annual GMV powered'
    },
    {
        n: '25 Crore',
        t: 'shipments delivered'
    },
]


const arr2 = [
    {
        n: 'International shipping',
        t: 'Simplify exports and expand your business to more than 220 countries and territories',
        i: src3
    },
    {
        n: 'B2B shipping',
        t: 'Lower your B2B and cargo shipping costs by upto 40%',
        i: src4
    },
    {
        n: 'Hyperlocal delivery',
        t: 'Make intra-city deliveries in hours with our experienced courier partners',
        i: src5
    },
]
const Hero = () => {

    return (
        <div className=''>

            <div className='px-5'>
                <p className='text-purple-500'>A trusted growth partner</p>
                <p className='text-blue-900 text-5xl font-bold tracking-tight'>Lakhs of eCommerce businesses chose</p>
                <p className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600 tracking-tight'><span className='font-bold'>Shiprocket</span> to streamline their customer
                    journey-from shipping to returns and beyond</p>

                <div className='grid grid-cols-1 md:grid-cols-2 my-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 ' >
                        {
                            arr.map((item) => (
                                <StatsBox key={item.n} n={item.n} t={item.t} />
                            ))
                        }
                    </div>
                    <Image
                        src={src}
                        alt=''
                        width={600}
                        height={600}
                    />
                </div>
                <p className='text-blue-900 text-5xl font-bold tracking-tight'>Enhance your customer experience</p>
                <p className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-600 to-purple-600 tracking-tight'>at every touch point</p>
                <p className='mt-8 text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 via-purple-600 to-purple-600 tracking-tight'>Shipping</p>
                <p className=' text-3xl text-black'>Keep things simple</p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-gray-50 via-blue-50 to-blue-100  m-10 p-10 rounded-md'>
                <div className='flex justify-center items-center'>
                    <div>
                        <p className='flex justify-start  text-blue-900 text-3xl'>Domestic shipping</p>
                        <p className='flex justify-start items-center text-gray-500 w-1/2 ' >Manage all channels in a single view and
                            reach nationwide efficiently with AI-based
                            courier selection</p>
                    </div>

                </div>
                <Image
                    src={src2}
                    alt=''
                    width={600}
                    height={600}
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5'>
                {
                    arr2.map((item) => (
                        <div key={item.n} className='bg-gradient-to-r from-gray-50 via-blue-50 to-blue-100  m-10 p-10 rounded-md'>
                            <FeatureBox  n={item.n} t={item.t} i={item.i} m={0}/>
                        </div>
                        
                    ))
                }
            </div>


            <div className='my-8 mx-4'>
                <p className='flex justify-center text-sm'>dsija onds</p>
                <p className='flex justify-center text-5xl lg:text-7xl font-extrabold'>Get The deals</p>
                <p className='mt-2 flex justify-center text-sm'>The Season is here. Start yours prepared with the best in touch, agility, presicion and speed.</p>
                <div className='flex justify-center my-5'>
                    <button type="button" className="text-white bg-gray-900 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">more</button>
                </div>

            </div>

        </div>

    )
}

export default Hero