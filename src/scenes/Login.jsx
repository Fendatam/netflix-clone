import React, {useState} from 'react'

const Login = () => {
          const [isDropdown, setIsDropdown] = useState(false);
  const [isArab, setIsArab] = useState("English");
  return (
      <div>
            <div className='flex justify-between items-start'>
          <img src="./assets/logo.png" alt="logo" className='w-[200px] mt-2' />
          </div>
          <div className='md:pt-12'>
              <div className='lgg:w-1/4 md:w-1/3 h-[640px] flex flex-col items-center momo mx-auto'>
                  <div className='text-white opacity-100 mt-12'>
                      <h1 className='mr-[250px] text-4xl font-semibold font-opensans'>Sign In</h1>
                  </div>
                  <div className='mt-5'>
                      <input type="text" placeholder='Email address' className='py-4  w-[360px] px-2 text-start text-black opacity-100 bg-slate-100 rounded-[5px]' />
                  </div>
                  <div className='mt-3'>
                      <input type="text" placeholder='Password' className='py-4  w-[360px] px-2 text-start text-black opacity-100 bg-slate-100 rounded-[5px]'/>
                  </div>
                  <div className='mt-12'>
                      <button className=' bg-[#e50914] text-white py-4 px-2 w-[360px] rounded-[5px]'><h5>Sign In</h5></button>
                  </div>
                  <div className='flex justify-between mt-2 gap-[10rem]'>
                      <div>
                        <input type="checkbox" id="rmmbr"/>
                        <label for="rmmbr" className='text-slate-200'>Remember me</label>                        
                      </div>
                      <div>
                          <p className='text-slate-200 hover:underline cursor-pointer'>Need help?</p>
                      </div>
                  </div>
                      <div className='mt-20 lgg:mr-[130px] md:mr-[70px] text-lg max-sm:mr-[130px]'>
                          <p className='text-slate-200'>New to Netflix? <span className='text-white hover:underline cursor-pointer'>Sign up Now</span>.</p>
                      </div>
                  <div className='md:mx-[60px] max-md:ml-[20px] mt-3'>
                      <p className='text-slate-200'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue hover:underline cursor-pointer'>Learn more.</span></p>
                    </div>
              </div>
             <hr className='max-md:opacity-100 opacity-0'/> 
          </div>
          <div className='momo w-full mx-auto flex flex-col items-center mt-20'>
        <div className='flex md:mr-[710px] mb-5 mt-5'>
              <h5 className='text-gray-400 text-md'>Questions? Call 800-850-1262</h5>
              </div>
              <div className='grid md:grid-cols-4 grid-cols-2 md:gap-x-24 gap-y-5 gap-x-20 text-gray-400 text-md mt-3 max-md:mx-5'>
                  <div className=' hover:underline cursor-pointer'>FAQ</div>
              <div className=' hover:underline cursor-pointer'>Help Center</div>
              <div className=' hover:underline cursor-pointer'>Terms of Use</div>
              <div className=' hover:underline cursor-pointer'>Privacy</div>
              <div className=' hover:underline cursor-pointer'>Cookie Preferences</div>
              <div className=' hover:underline cursor-pointer'>Corporate Information</div>
              </div>
              <div className='mt-12 md:mr-[790px] lgg:mb-24 md:mb-12 max-sm:mb-24'>
                   <button className=' bg-black text-white py-4 px-3 flex border-white rounded-[5px] border-[1px] relative' onClick={() => setIsDropdown(!isDropdown)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
                {isArab ? (<h5>English</h5>) : (<h5>العربية</h5>)}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
              </button>
              {isDropdown ? (
                  <div className='absolute w-[110px] '>
                <ul className='bg-gray-600 text-white rounded-[5px] text-center'>
                    <li className=' hover:bg-blue'>
                      <button onClick={() => {
                          setIsDropdown(!isDropdown);
                          setIsArab(true)
                        }}>
                  English
                      </button>
                  </li>
                    <li className=' hover:bg-blue'>
                      <button onClick={() => {
                          setIsArab(false);
                          setIsDropdown(!isDropdown)}}>
                  العربية
                      </button>
                  </li>
                </ul>
                </div>
              ) : ""}
              </div>
          </div>
    </div>
  )
}

export default Login