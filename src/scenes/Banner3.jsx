import React from 'react'

const Banner3 = () => {
  return (
    <section className='md:flex py-12 justify-center items-center gap-12'>
      <div className='text-white font-opensans'>
              <h1 className='md:text-6xl text-4xl font-semibold max-md:text-center'>Watch everywhere.</h1>
              <p className='md:text-3xl text-xl mt-4 max-md:text-center'>Stream unlimited movies and TV shows on</p>
              <p className='md:text-3xl text-xl max-md:text-center'>your phone, tablet, laptop, and TV without</p>
              <p className='md:text-3xl text-xl max-md:text-center'>paying more.</p>
      </div>
      <div>

          <div className='relative z-0 max-md:flex max-md:justify-center max-md:items-center'>
        <img src='./assets/device-pile.png' alt='tv' className='h-[400px] relative z-40' />
        <video src='./assets/momo.m4v' autoPlay loop muted className=' absolute h-[190px] top-[10%] md:right-[19%] right-[18%] z-0 max-md:w-[270px]'/>
        
          </div>
      </div>
    </section>
  )
}

export default Banner3