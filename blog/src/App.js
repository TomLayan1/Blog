import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogContextProvider from './Context/BlogContext'
import Home from './Pages/Home'
import Display from './Pages/Display'
import About from './Pages/About'
import Footer from './Component/Footer'
import AllPosts from './Pages/AllPosts'

const App = () => {
  return (
    <>
      <BlogContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/all-stories' element={<AllPosts />} />
            <Route path='/about' element={<About />} />
            <Route path='/story/:id' element={<Display />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </BlogContextProvider>
    </>
  )
}

export default App