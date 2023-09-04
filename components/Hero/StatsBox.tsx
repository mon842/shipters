"use client"

import React from 'react'

const StatsBox = ({n,t}:any) => {
  return (
    <div className='m-10'>
        <p className='text-4xl'>{n}</p>
        <p className='text-xl text-gray-500'>{t}</p>
        <div className='rounded-md h-1 bg-gradient-to-r from-green-400 to-purple-600'></div>
    </div>
  )
}

export default StatsBox