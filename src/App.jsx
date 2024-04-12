import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import MainBody from "./assets/Components/MainBody/MainBody"
import Trailers from './assets/Components/Trailers/Trailers';
import MainBody2 from './assets/Components/MainBody2/MainBody2'

import Footer from './assets/Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
       <MainBody></MainBody>  
      <Trailers></Trailers>
      <MainBody2></MainBody2> 
      <Footer></Footer> 
    </div>
  )
}

export default App