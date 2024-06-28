import React from 'react'
import { team } from '../Data/Team'

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
      </div>

      <hr className='mb-8 lg:mb-14'/>

      <div>
        <h2 className='text-center text-4xl font-bold mb-12'>Meet <span className='bg-orange-600 p-2 text-white'>Us</span></h2>
        
        <div className='px-3 lg:px-40 grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
          {team.map(member => (
            <div className='flex flex-col items-center p-5'>
              {/* <div className='max-h-[190px] max-w-[190px] border-4 border-secondaryColor rounded-full p-1 mb-4'> */}
                <div className='max-h-[180px] max-w-[180px] border-4 p-1 rounded-full mb-5'>
                  <img className='rounded-full' src={member.image}/>
                </div>
              {/* </div> */}
              <div className='flex flex-col items-center'>
                <p className='font-semibold text-lg mb-2'>{member.name}</p>
                <p className='text-grayLight'>{member.position}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default About