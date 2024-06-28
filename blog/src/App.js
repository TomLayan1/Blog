import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogContextProvider from './Context/BlogContext'
import Header from './Component/Header'
import Home from './Pages/Home'
import Display from './Pages/Display'
import About from './Pages/About'
import Footer from './Component/Footer'
import TopStories from './Pages/TopStories'
import Blog from './Pages/Blog'

const App = () => {
  return (
    <>
      <BlogContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/story/:id' element={<Display />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/topstories' element={<TopStories />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </BlogContextProvider>
    </>
  )
}

export default App