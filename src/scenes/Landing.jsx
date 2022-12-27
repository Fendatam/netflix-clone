import React from 'react'

const Landing = () => {
  return (
      <div className='text-white mx-auto w-full md:pt-48 pt-24 flex flex-col items-center justify-center font-opensans'>
          <div className='md:text-7xl text-4xl font-semibold text-center'>
              <h1>Unlimited movies, TV</h1><h1>shows, and more.</h1>
          </div>
          <div className='md:text-3xl text-2xl mt-3 max-md:flex max-md:items-center max-md:justify-center max-md:text-center'>
             <p >Watch anywhere. Cancel anytime.</p>
          </div>
          <div className='mt-5 md:text-xl text-md max-md:flex max-md:items-center max-md:justify-center'>
              <p className='max-md:text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
          </div>
          <div className='mt-5 md:flex text-start justify-center items-center'>
              <input type="text" placeholder='Email address' className='md:py-6 py-4 md:w-[600px] w-[400px] px-2 text-start text-black'/>
              <button className='bg-[#e50914] md:px-7 md:py-[18px] md:mt-0 flex justify-center items-center md:text-3xl py-2 px-3 gap-1 mx-auto mt-5'><h5>Get Started</h5><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</button>
              
          </div>

    </div>
  )
}

export default Landing