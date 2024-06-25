import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogContextProvider from './Context/BlogContext'
import Header from './Component/Header'
import Home from './Pages/Home'
import Display from './Pages/Display'
import About from './Pages/About'
import Footer from './Component/Footer'
import TopStories from './Pages/TopStories'

const App = () => {
  return (
    <>
      <BlogContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/display/:storyId' element={<Display />} />
            <Route path='/about' element={<About />} />
            <Route path='/topstories' element={<TopStories />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </BlogContextProvider>
    </>
  )
}

export default App