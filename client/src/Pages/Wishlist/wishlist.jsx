import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/WishlistContext'

const Wishlist = () => {
  const {wish,deleteWish}=useContext(WishlistContext)
  return (
    <>
  <Helmet>
    <title>
        Wishlist Page
    </title>
  </Helmet>
    <div>
      <h1>Wishlist</h1>
      {wish && wish.map(x=>
      <ul>
      <li><img src={x.image} alt="" /></li>
        <li><h1>{x.title}</h1></li>
        <li>{x.start}</li>
        <li>{x.heart}</li>
        <li><p>{x.text}</p></li>
        <li><button onClick={()=>deleteWish(x)}>deleteWish</button></li>
        </ul>
        )}
    </div> 
     </>
  )
}

export default Wishlist
