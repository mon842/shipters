"use client"

import Image from 'next/image'
import React from 'react'

const FeatureBox = ({ n, t, i }: any) => {
    return (
        <div className='my-3'>
            <Image
                src={i}
                alt=''
                width={600}
                height={600}
            />
            <p className='flex justify-start my-5 font-medium text-blue-800 text-2xl'>{n}</p>
            <p className='flex justify-start my-2 items-center text-gray-500 w-5/6' >{t}</p>
        </div>
    )
}

export default FeatureBox