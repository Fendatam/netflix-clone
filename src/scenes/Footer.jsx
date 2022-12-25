import React, {useState} from 'react'

const Footer = () => {
      const [isDropdown, setIsDropdown] = useState(false);
  const [isArab, setIsArab] = useState("English");
  return (
      <div className=' py-24 flex flex-col justify-center items-center'>
          <div className='flex md:mr-[710px] mb-5'>
              <h5 className='text-gray-400 text-md'>Questions? Call 800-850-1262</h5>
          </div>
          <div className='grid grid-cols-4 gap-x-24 gap-y-5 text-gray-400 text-md mt-3'>
              <div className=' hover:underline cursor-pointer'>FAQ</div>
              <div className=' hover:underline cursor-pointer'>Help Center</div>
              <div className=' hover:underline cursor-pointer'>Account</div>
              <div className=' hover:underline cursor-pointer'>Media Center</div>
              <div className=' hover:underline cursor-pointer'>Investor Relations</div>
              <div className=' hover:underline cursor-pointer'>Jobs</div>
              <div className=' hover:underline cursor-pointer'>Redeem Gift Cards</div>
              <div className=' hover:underline cursor-pointer'>Buy Gift Cards</div>
              <div className=' hover:underline cursor-pointer'>Ways to Watch</div>
              <div className=' hover:underline cursor-pointer'>Terms of Use</div>
              <div className=' hover:underline cursor-pointer'>Privacy</div>
              <div className=' hover:underline cursor-pointer'>Cookie Preferences</div>
              <div className=' hover:underline cursor-pointer'>Corporate Information</div>
              <div className=' hover:underline cursor-pointer'>Contact Us</div>
              <div className=' hover:underline cursor-pointer'>Speed Test</div>
              <div className=' hover:underline cursor-pointer'>Legal Notices</div>
              <div className=' hover:underline cursor-pointer'>Only on Netflix</div>
          </div>
          <div className='mr-[820px] mt-8'>
              
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
          <div className='text-md text-gray-400 mr-[800px] mt-5'>Netflix Saudi Arabia</div>
              </div>
   
  )
}

export default Footer