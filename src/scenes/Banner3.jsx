import React from 'react'

const Banner3 = () => {
  return (
    <section className='md:flex py-12 md:justify-center md:items-center gap-12'>
      <div className='text-white font-opensans'>
              <h1 className='text-6xl font-semibold'>Watch everywhere.</h1>
              <p className='text-3xl mt-4'>Stream unlimited movies and TV shows on</p>
              <p className='text-3xl'>your phone, tablet, laptop, and TV without</p>
              <p className='text-3xl'>paying more.</p>
      </div>
      <div>

          <div className='relative z-0'>
        <img src='./assets/device-pile.png' alt='tv' className='h-[400px] relative z-40' />
        <video src='./assets/momo.m4v' autoPlay loop muted className=' absolute h-[190px] top-[10%] right-[19%] z-0'/>
        
          </div>
      </div>
    </section>
  )
}

export default Banner3