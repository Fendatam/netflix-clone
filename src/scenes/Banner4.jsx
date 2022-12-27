import React from 'react'

const Banner4 = () => {
  return (
    <section className='md:flex py-12 justify-center items-center gap-12'>
          <div className='md:order-last flex max-md:items-center max-md:justify-center'>
      <div className='text-white font-opensans'>
              <h1 className='md:text-6xl text-4xl font-semibold max-md:text-center'>Create profiles for kids.</h1>
              <p className='md:text-3xl text-xl max-md:text-center mt-4'>Send kids on adventures with their favorite</p>
              <p className='md:text-3xl text-xl max-md:text-center'>characters in a space made just for them—</p>
              <p className='md:text-3xl text-xl max-md:text-center'>free with your membership.</p>
      </div>
          </div>
          <div className='md:order-first flex'>
              <img src='./assets/koki.png' alt='koki' className='h-[400px]'/>
          </div>
    </section>
  )
}

export default Banner4