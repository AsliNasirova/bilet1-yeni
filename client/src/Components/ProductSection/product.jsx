import React, { useEffect, useState } from 'react';
import Card from '../Card/card';
import "./product.scss"
const Product = () => {
    const [product,setProduct]=useState()
    async function getProducts() {
        const data=await fetch("http://localhost:3000/sets")
        const res=await data.json()
        console.log(res);
        setProduct(res)
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <>
    <section id='product'>
        <div className="productArea">
            <div className="titleProduct">
           <h1> Our Products</h1>
            </div>
            <div className="productCard">
                {product && product.map((item)=>(
                    <div className="card">
                        <Card key={item._id} id={item._id} image={item.image} title={item.title} start={item.start} heart={item.heart} text={item.text} product={item}/>
                    </div>
                ))}
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Product
