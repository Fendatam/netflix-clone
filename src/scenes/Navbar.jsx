import React, { useState } from 'react'



const Navbar = () => {

  const [isDropdown, setIsDropdown] = useState(false);
  const [isArab, setIsArab] = useState("English");
  


  
  // console.log(lang);
    return (
      <nav className='py-3 w-full'>
        <div className='flex items-center justify-between mx-auto w-[95vw]'>
          <div className=''>
          <img src="./assets/logo.png" alt="logo" className='md:w-[200px] w-[150px]' />
           </div>
          <div className='mt-3 flex gap-8'>
        
              
            <div className='mb-5'>
              
            <button className=' bg-black text-white py-1 px-1 flex border-white rounded-[5px] border-[1px] relative' onClick={() => setIsDropdown(!isDropdown)}>
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
            <div>
              <button className=' bg-[#e50914] text-white py-1 px-3 rounded-[5px]'><h5>Sign In</h5></button>
            </div>
            </div>
          
             
          </div>
        </nav>
      
      )
    }

export default Navbar;