import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import MyProjects from './components/MyProjects'
import About from './components/About'
import Contact from './components/Contact'
import MySkills from './components/MySkills'

const App = () => {
  return (
    <div className='scroll-smooth w-100vw h-100vh bg-gradient-to-bl from-black to-green-900 text-white p-4 md:px-12 lg:px-16 xl:px-20 2xl:px-24'>
      <Navbar />
      <Hero />
      <MyProjects />
      <About />
      <MySkills />
      <Contact />
      <Footer />

      <p className='mt-8 font-medium text-sm text-center '>Developed By Sathish❤️ | All rights Reserved &copy; {new Date().getFullYear()} </p>
    </div>
  )
}

export default App
