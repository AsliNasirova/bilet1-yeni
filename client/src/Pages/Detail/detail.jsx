import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
  const [detail, setDetail] = useState()
  const { id } = useParams()
  const fetchDetails = async () => {
    const res = await axios(`http://localhost:3000/sets/${id}`)
    setDetail(res.data)
  }

  useEffect(()=>{
    fetchDetails()
  },[])
  return (
    <>
      <Helmet>
        <title>Detail Page</title>
      </Helmet>
      <div>
<h1>Detail</h1>
{detail ? <>
<div className="detailCard">
  <ul>
    <li><img src={detail.image} alt="" /></li>
    <li>{detail.title}</li>
    <li>{detail.start}</li>
    <li>{detail.heart}</li>
    <li>{detail.text}</li>
  </ul>
</div>
</>:''}
      </div>
    </>
  )
}

export default Detail
