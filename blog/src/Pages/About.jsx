import React from 'react'

const About = () => {
  return (
    <>
      <div className='bg-primaryColor text-white text-center py-32 px-8 mb-12 flex justify-center items-center'>
          <h1 className='text-5xl lg:text-7xl leading-snug mb-5 font-bold'>About Us</h1>
      </div>
      <div className='px-8 md:px-20 lg:px-40'>
        <div className=' mx-auto mb-8 lg:mb-14'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus doloribus nisi commodi repellat. Corrupti rerum architecto perferendis commodi illo libero ducimus ullam est explicabo fugit doloremque, eos sed soluta consectetur dolorum officiis ea possimus voluptatum? Saepe dolores temporibus deleniti quas ratione accusamus eveniet ipsam assumenda, expedita, dolore quae doloribus similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione adipisci, aperiam nisi accusantium magni quisquam neque iusto corporis repudiandae error sequi id facilis distinctio consectetur, pariatur alias? Dolor natus quae porro ad neque ipsam.</p>
        </div>

        <hr className='mb-8 lg:mb-14'/>

        <div>
          <h2 className='text-center text-4xl font-bold mb-8'>Meet <span className='bg-orange-600 p-2'>Us</span></h2>
          <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  )
}

export default About