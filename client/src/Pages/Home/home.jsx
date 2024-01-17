import React from 'react'
import { Helmet } from 'react-helmet-async'
import Product from '../../Components/ProductSection/product'
import AboutUS from '../../Components/AboutUS/aboutUs'

const Home = () => {
  return (
    <>
   <Helmet>
    <title>Home Page</title>
   </Helmet>
    <div>
      <Product/>
      <AboutUS/>
      
    </div> 
    </>
  )
}

export default Home
