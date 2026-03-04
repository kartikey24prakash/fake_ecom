import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='home'>
      <h1>This is fake store</h1>
      <button className='cta' onClick={()=>{
        navigate('/products')
      }}>go to product</button>

    </div>
  )
}

export default Home
