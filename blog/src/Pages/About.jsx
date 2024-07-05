import React, { useEffect, useRef } from 'react'
import { team } from '../Data/Team'
import lottie from 'lottie-web'
import { motion } from 'framer-motion';

const About = () => {

  const whoWeAre = useRef(null);
  const whatWeDo = useRef(null);
  const ourVision = useRef(null);
  const joinUs = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: whoWeAre.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../whoWeAre.json')
    });

    // Cleanup to prevent multiple animations
    return () => {
      lottie.destroy();
    };
  }, [])

  useEffect(() => {
    lottie.loadAnimation({
      container: whatWeDo.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../WhatWeDo.json')
    });

    // Cleanup to prevent multiple animations
    return () => {
      lottie.destroy();
    };
  }, [])

  useEffect(() => {
    lottie.loadAnimation({
      container: ourVision.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../ourVision.json')
    })

    // Cleanup to prevent multiple animations
    return () => {
      lottie.destroy();
    };
  }, [])

  useEffect(() => {
    lottie.loadAnimation({
      container: joinUs.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../joinUs.json')
    })

    // Cleanup to prevent multiple animations
    return () => {
      lottie.destroy();
    };
  }, [])
  return (
    <>
      <div className='bg-primaryColor text-white text-center py-32 px-8 mb-24 flex justify-center items-center'>
          <h1 className='text-5xl lg:text-7xl leading-snug mb-5 font-bold'>About Us</h1>
      </div>
      <div className='px-8 md:px-20 lg:px-40'>
        <div className=' mx-auto mb-8 lg:mb-14'>
          <p>Welcome to <span className='text-orange-600'>Tech Trends Digest</span>, your go-to source for the latest insights in technology, startups, AI, and more. Our mission is to keep you informed and inspired about the ever-evolving world of technology.</p>
        </div>

        <div className='mb-[200px] h-[350px] flex items-center justify-between'>
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5 }}
            className='w-[45%]'>
            <h2 className='text-orange-600 text-lg font-bold mb-3 md:text-2xl'>Who We Are</h2>
            <p>We are a passionate team of tech enthusiasts, writers, and industry professionals dedicated to exploring the frontiers of innovation. Our diverse backgrounds in startups, artificial intelligence, and various tech sectors enable us to bring you unique perspectives on the topics that matter.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5 }}
            className='w-[50%] -z-10' ref={whoWeAre}></motion.div>
        </div>

        <div className='mb-[200px] h-[350px] flex flex-row-reverse items-center justify-between'>
          <div className='w-[45%]'>
            <h2 className='text-orange-600 text-lg font-bold mb-3 md:text-2xl'>What We Do</h2>
            <p>At <span className='text-orange-600'>Tech Trends Digest</span>, we dive deep into the world of technology, covering everything from the latest trends in artificial intelligence to the startup ecosystem's vibrant landscape. Whether you’re a tech professional, an entrepreneur, or simply a curious reader, our content is designed to engage and educate.</p>
          </div>
          <div className='w-[50%] -z-10' ref={whatWeDo}></div>
        </div>

        <div className='mb-[250px] h-[350px] flex items-center justify-between'>
          <div className='w-[45%]'>
            <h2 className='text-orange-600 text-lg font-bold mb-3 md:text-2xl'>Our Vision</h2>
            <p>We believe in the transformative power of technology and its potential to shape a better future. Our vision is to create a community where knowledge is shared, ideas are sparked, and readers are empowered to stay ahead in the fast-paced tech world.</p>
          </div>
          <div className='w-[50%] -z-10' ref={ourVision}></div>
        </div>

        <div className='mb-10 h-[350px] flex flex-row-reverse items-center justify-between'>
          <div className='w-[45%]'>
            <h2 className='text-orange-600 text-lg font-bold mb-3 md:text-2xl'>Join Us</h2>
            <p>Stay connected with <span className='text-orange-600'>Tech Trends Digest</span> to explore cutting-edge topics, discover emerging trends, and gain valuable insights. Whether you’re looking for in-depth articles, interviews with industry leaders, or the latest tech news, we’ve got you covered.
            <br/>
            <br/>
            Thank you for being a part of our journey. Together, let’s explore the future of technology!</p>
          </div>
          <div className='w-[50%] -z-10' ref={joinUs}></div>
        </div>
      </div>

      <hr className='mb-8 lg:mb-14'/>

      <div>
        <h2 className='text-center text-4xl font-bold mb-12'>Meet <span className='bg-orange-600 p-2 text-white'>Us</span></h2>
        
        <div className='px-3 lg:px-40 grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
          {team.map(member => (
            <div className='flex flex-col items-center p-5'>
                <div className='max-h-[180px] max-w-[180px] border-4 p-1 rounded-full mb-5'>
                  <img className='rounded-full' src={member.image} alt={member.name}/>
                </div>
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