
import FooterU from '@/components/Footer/FooterU'
import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/Services'
import Banner from '@/components/Banner/Banner'

import Image from 'next/image'
import Landing from '@/components/Landing/Landing'

import Style from './page.module.css'
import CarouselU from '@/components/Carousel/CarouselU'

export default function Home() {
  return (
    <div>
      <Landing/>
       <CarouselU/> 
      <Banner/>
      <div className={`flex justify-center items-center bg-slate-100 ${Style.back}`}>
        <div>
          <p className='flex justify-center'>New Styles on Sale</p>
          <p className='text-xs underline my-1'>Download the app and access all our products</p>
        </div>
      </div>
      <Hero />
      <Services/>

      <FooterU />
    </div>
  )
}
