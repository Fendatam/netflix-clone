import React from 'react'

const Banner2 = () => {
  return (
    <section className='md:flex py-12 justify-center items-center gap-32'>
          <div className='md:order-last flex max-md:justify-center max-md:items-center'>
      <div className='text-white font-opensans'>
              <h1 className='md:text-6xl text-4xl font-semibold max-md:text-center'>Download your shows</h1>
              <h1 className='md:text-6xl text-4xl font-semibold max-md:text-center'>to watch offline.</h1>
              <p className='md:text-3xl text-xl mt-4 max-md:text-center'>Save your favorites easily and always have</p>
              <p className='md:text-3xl text-xl max-md:text-center'>something to watch.</p>
      </div>
      </div>
      <div>

          <div className='md:order-first flex relative'>
        <img src='./assets/mobi.jpg' alt='mobi' className='h-[400px] relative' />
        <div className=' bg-black border-[#333] rounded-[10px] border-[3px] w-[22rem] h-[7rem] absolute bottom-[10%] md:right-[20%] right-[10%] flex'>
          <img src='./assets/boxshot.png' alt='boxzft' className=' my-2 ml-2'/>
          <div className=' justify-center items-center mt-5 ml-5'>
            <h5 className='text-white font-semibold'>Stranger Things</h5>
            <h5 className='text-blue'>Downloading ...</h5>
        </div>
          <div className=' mt-4 ml-12'>
            <img src='./assets/download-icon.gif' alt='Download' className=' h-16'/>
      </div>
          </div>
        </div>
          </div>
    </section>
  )
}

export default Banner2