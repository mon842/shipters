"use client"

import React from 'react'
import FeatureBox from '../Hero/FeatureBox'


// images
import src1 from '@/public/services/Conversion1.webp'
import src2 from '@/public/services/Conversion2.webp'
import src3 from '@/public/services/Conversion3.webp'
import src4 from '@/public/services/Conversion4.webp'

const arr2 = [
    {
        n: 'Trust building',
        t: 'Show Shiprocket’s badge of trust throughout your website to boost credibility',
        i: src1
    },
    {
        n: 'Customer engagement',
        t: 'Lower your B2B and cargo shipping costs by upto 40%',
        i: src2,
    },
    {
        n: 'Checkout optimisation',
        t: 'Speed up checkout by 70% with pre-filled details and intelligent fraud detection',
        i: src3,
    },

    {
        n: 'Customer retention',
        t: 'Re-engage with high-potential prospects and increase customer retention by 25%',
        i: src4,
    },
]

const Services = () => {
    return (
        <div className='my-10 mx-10'>
            <p className='mt-3 text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 via-purple-600 to-purple-600 tracking-tight'>Conversion</p>
            <p className='my-7  text-3xl  text-black tracking-tight'>Drive repeat purchases</p>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                
                <FeatureBox key={arr2[0].n} n={arr2[0].n} t={arr2[0].t} i={arr2[0].i} />
                <div className='mt-32'>
                    <FeatureBox key={arr2[1].n} n={arr2[1].n} t={arr2[1].t} i={arr2[1].i} />
                </div>
                
                <FeatureBox key={arr2[2].n} n={arr2[2].n} t={arr2[2].t} i={arr2[2].i} />
                <div className='mt-32'>
                    <FeatureBox key={arr2[3].n} n={arr2[3].n} t={arr2[3].t} i={arr2[3].i} />
                </div>
            </div>
        </div>
    )
}

export default Services