import React, { useContext } from 'react'
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import "./card.scss"
import { WishlistContext } from '../../context/WishlistContext';
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';

const Card = ({ image, title, text, start, heart, product,id }) => {
  const { addWish } = useContext(WishlistContext)
  return (
    <>
      <div className="CardArea">

        <div className="cardBox">
          <div className="cardImage">
            <img src={image} alt="" />
          </div>
          <div className="cardTitle">
            <h1>{title}</h1>
            <div className="cardIcon">
              <div className='star'><CiStar /><p>{start}</p></div>
              <div className='heart'><CiHeart /><p>{heart}</p></div>
            </div>
            <p>{text}</p>
          </div>
          <div className="cardButton">
            <button className='cardBtn'>Cart</button>
            <div><Link to={`/${id}`}>view</Link></div>
          </div>
          <div className="addWish">
            <div onClick={() => addWish(product)} ><IoMdHeart /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
