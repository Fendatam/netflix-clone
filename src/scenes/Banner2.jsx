import React from 'react'

const Banner2 = () => {
  return (
    <section className='md:flex py-12 md:justify-center md:items-center gap-32'>
          <div className='md:order-last flex'>
      <div className='text-white font-opensans'>
              <h1 className='text-6xl font-semibold'>Download your shows</h1>
              <h1 className='text-6xl font-semibold'>to watch offline.</h1>
              <p className='text-3xl mt-4'>Save your favorites easily and always have</p>
              <p className='text-3xl'>something to watch.</p>
      </div>
      </div>
      <div>

          <div className='md:order-first flex relative'>
        <img src='./assets/mobi.jpg' alt='mobi' className='h-[400px] relative' />
        <div className=' bg-black border-[#333] rounded-[10px] border-[3px] w-[22rem] h-[7rem] absolute bottom-[10%] right-[20%] flex'>
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