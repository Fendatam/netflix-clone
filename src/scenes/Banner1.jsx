import React from 'react'

const Banner1 = () => {
  return (
    <section className='md:flex py-12 justify-center items-center gap-24'>
      <div className='text-white font-opensans'>
              <h1 className='md:text-6xl text-4xl font-semibold max-md:text-center'>Enjoy on your TV.</h1>
              <p className='md:text-3xl text-xl mt-4 max-md:text-center'>Watch on Smart TVs, Playstation, Xbox,</p>
              <p className='md:text-3xl text-xl max-md:text-center'>Chromecast, Apple TV, Blu-ray players, and</p>
              <p className='md:text-3xl text-xl max-md:text-center'>more.</p>
      </div>
      <div className='relative z-0 '>
        <div className='z-0 max-md:flex max-md:items-center max-md:justify-center'>
        <video autoPlay loop muted src='./assets/hoho.m4v' className='absolute md:h-[220px] md:top-[21%] md:right-[14%] top-[20%] right[50%] h-[180px]'/>
        </div>
        <div className='z-40 max-md:flex max-md:items-center max-md:justify-center'>
        <img src='./assets/tv.png' alt='tv' className='md:h-[400px] h-[300px] relative' />
        </div>
          </div>
    </section>
  )
}

export default Banner1