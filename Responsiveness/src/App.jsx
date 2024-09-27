import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      <div className="w-full h-screen border-black border-t bg-zinc-900">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
