import React from 'react'

const Banner4 = () => {
  return (
    <section className='md:flex py-12 md:justify-center md:items-center gap-12'>
          <div className='md:order-last flex'>
      <div className='text-white font-opensans'>
              <h1 className='text-6xl font-semibold'>Create profiles for kids.</h1>
              <p className='text-3xl mt-4'>Send kids on adventures with their favorite</p>
              <p className='text-3xl'>characters in a space made just for them—</p>
              <p className='text-3xl'>free with your membership.</p>
      </div>
          </div>
          <div className='md:order-first flex'>
              <img src='./assets/koki.png' alt='koki' className='h-[400px]'/>
          </div>
    </section>
  )
}

export default Banner4