import React from 'react'

const Landing = () => {
  return (
      <div className='text-white mx-auto w-full pt-48 flex flex-col items-center justify-center font-opensans'>
          <div className='text-7xl font-semibold text-center'>
              <h1>Unlimited movies, TV</h1><h1>shows, and more.</h1>
          </div>
          <div className='text-3xl mt-3'>
             <p >Watch anywhere. Cancel anytime.</p>
          </div>
          <div className='mt-5 text-xl'>
              <p>Ready to watch? Enter your email to create or restart your membership.</p>
          </div>
          <div className='mt-5 flex text-start'>
              <input type="text" placeholder='Email address' className='py-6 w-[600px] px-2 text-start text-black'/>
              <button className='bg-[#e50914] px-7 py-3 flex justify-center items-center text-3xl gap-1'><h5>Get Started</h5><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</button>
              
          </div>

    </div>
  )
}

export default Landing