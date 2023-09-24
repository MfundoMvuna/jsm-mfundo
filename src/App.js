import React from 'react'

import {Footer, Blog, Possibilty, Features, WhatGPT3, Header } from './containers';
import { CTA, brand, Navbar, Brand} from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
        <div className='gradient_bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibilty />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App