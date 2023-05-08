import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Foods from './Foods'
import Carousel from './Carousel'

import "./home.css"
export default function Home() {
  return (
    <div >
        {/* <Carousel/> */}
        <div className="front">
        </div>
        <div className="come"><h2>Come, Sit, talk and Eat</h2></div>
        <div>
            <Foods/>
        </div>
        <Footer/>
    </div>
  )
}
