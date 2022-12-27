import React, { useState } from 'react'

const Accordion = () => {

    const [isAccord1, setIsAccord1] = useState(false);
    const [isAccord2, setIsAccord2] = useState(false);
    const [isAccord3, setIsAccord3] = useState(false);
    const [isAccord4, setIsAccord4] = useState(false);
    const [isAccord5, setIsAccord5] = useState(false);
    const [isAccord6, setIsAccord6] = useState(false);


  return (
      <div className='w-full pt-8 pb-24'>
          <div className=''>
          <h1 className=' text-center md:text-6xl text-3xl text-white'>Frequently Asked Questions</h1>
          </div>
          <div className='py-12 flex-col justify-center items-center flex gap-1'>
              <button className=' flex justify-between bg-[#333] text-white items-center md:w-[50rem] md:h-[5rem] h-[4rem] w-[24rem] relative' onClick={() => {
                  setIsAccord1(!isAccord1);
                  setIsAccord2(false);  
                  setIsAccord3(false);  
                  setIsAccord4(false);  
                  setIsAccord5(false);  
                  setIsAccord6(false);  
              
              }}>
                  <div className='ml-4 text-2xl'>What is Neflix?</div>
                  <div className='mr-4 text-2xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</div>
            </button>
              {isAccord1 ? (
                <div className='bg-[#333] md:w-[50rem] w-[24rem] mt-[2px] transition0'>
                  <p className='text-2xl text-white m-4'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
</p>
                  <p className='text-2xl text-white m-4 mt-6'>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
</p>
              </div>) : ""}
              

              <button className=' flex justify-between bg-[#333] text-white items-center md:w-[50rem] md:h-[5rem] h-[4rem] w-[24rem] relative' onClick={() => {
                  setIsAccord2(!isAccord2);
                  setIsAccord1(false);  
                  setIsAccord3(false);  
                  setIsAccord4(false);  
                  setIsAccord5(false);  
                  setIsAccord6(false);  
              
              }}>
                  <div className='ml-4 text-2xl'>How much does Neflix cost?</div>
                  <div className='mr-4 text-2xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</div>
            </button>
              {isAccord2 ? (
                <div className='bg-[#333] md:w-[50rem] w-[24rem] mt-[2px] transition'>
                  <p className='text-2xl text-white m-4'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from SAR32 to SAR61 a month. No extra costs, no contracts.
</p>
              </div>) : ""}
              


              <button className=' flex justify-between bg-[#333] text-white items-center md:w-[50rem] md:h-[5rem] h-[4rem] w-[24rem] relative' onClick={() => {
                  setIsAccord3(!isAccord3);
                  setIsAccord1(false);  
                  setIsAccord2(false);  
                  setIsAccord4(false);  
                  setIsAccord5(false);  
                  setIsAccord6(false);  
              
              }}>
                  <div className='ml-4 text-2xl'>Where can I watch?</div>
                  <div className='mr-4 text-2xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</div>
            </button>
              {isAccord3 ? (
                  <div className='bg-[#333] md:w-[50rem] w-[24rem] mt-[2px] transition'>
                  <p className='text-2xl text-white m-4'>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

</p>
                  <p className='text-2xl text-white m-4 mt-6'>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
</p>
              </div>) : ""}
              


              <button className=' flex justify-between bg-[#333] text-white items-center md:w-[50rem] md:h-[5rem] h-[4rem] w-[24rem] relative' onClick={() => {
                  setIsAccord4(!isAccord4);
                  setIsAccord1(false);  
                  setIsAccord3(false);  
                  setIsAccord2(false);  
                  setIsAccord5(false);  
                  setIsAccord6(false);  
              
              }}>
                  <div className='ml-4 text-2xl'>How do I cancel?</div>
                  <div className='mr-4 text-2xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</div>
            </button>
              {isAccord4 ? (
                  <div className='bg-[#333] md:w-[50rem] w-[24rem] mt-[2px] transition'>
                  <p className='text-2xl text-white m-4'>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
</p>

              </div>) : ""}
              

              <button className=' flex justify-between bg-[#333] text-white items-center md:w-[50rem] md:h-[5rem] h-[4rem] w-[24rem] relative' onClick={() => {
                  setIsAccord5(!isAccord5);
                  setIsAccord1(false);  
                  setIsAccord3(false);  
                  setIsAccord4(false);  
                  setIsAccord2(false);  
                  setIsAccord6(false);  
              
              }}>
                  <div className='ml-4 text-2xl'>What can I watch on Neflix?</div>
                  <div className='mr-4 text-2xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</div>
            </button>
              {isAccord5 ? (
                  <div className='bg-[#333] md:w-[50rem] w-[24rem] mt-[2px] transition'>
                  <p className='text-2xl text-white m-4'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
</p>

              </div>) : ""}
              
              <button className=' flex justify-between bg-[#333] text-white items-center md:w-[50rem] md:h-[5rem] h-[4rem] w-[24rem] relative' onClick={() => {
                  setIsAccord6(!isAccord6);
                  setIsAccord1(false);  
                  setIsAccord3(false);  
                  setIsAccord4(false);  
                  setIsAccord5(false);  
                  setIsAccord2(false);  
              
              }}>
                  <div className='ml-4 text-2xl'>Is Neflix good for kids?</div>
                  <div className='mr-4 text-2xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</div>
            </button>
              {isAccord6 ? (
                <div className='bg-[#333] md:w-[50rem] w-[24rem] mt-[2px] transition'>
                  <p className='text-2xl text-white m-4'>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
</p>
                  <p className='text-2xl text-white m-4 mt-6'>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
</p>
              </div>) : ""}
              
          
          </div>
          <div className=' flex flex-col justify-center items-center'>
              <p className='text-white md:text-xl text:lg max-md:text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
 <div className='mt-5 md:flex text-start'>
              <input type="text" placeholder='Email address' className='md:py-6 py-4 md:w-[600px] w-[400px] px-2 text-start text-black'/>
              <button className='bg-[#e50914] md:px-7 md:py-[18px] md:mt-0 flex justify-center items-center md:text-3xl py-2 px-3 gap-1 mx-auto mt-5 text-white'><h5>Get Started</h5><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</button>
              
          </div>
          </div>
    </div>
  )
}

export default Accordion