import React from 'react'

const Banner1 = () => {
  return (
    <section className='md:flex py-12 md:justify-center md:items-center gap-24'>
      <div className='text-white font-opensans'>
              <h1 className='text-6xl font-semibold'>Enjoy on your TV.</h1>
              <p className='text-3xl mt-4'>Watch on Smart TVs, Playstation, Xbox,</p>
              <p className='text-3xl'>Chromecast, Apple TV, Blu-ray players, and</p>
              <p className='text-3xl'>more.</p>
      </div>
      <div className='relative z-0'>
        <div className='z-0'>
        <video autoPlay loop muted src='./assets/hoho.m4v' className='absolute h-[220px] top-[21%] right-[14%]'/>
        </div>
        <div className='z-40'>
        <img src='./assets/tv.png' alt='tv' className='h-[400px] relative' />
        </div>
          </div>
    </section>
  )
}

export default Banner1