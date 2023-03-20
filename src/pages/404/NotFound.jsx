import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai"
import './NotFound.scss'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <section className='not-found'>
      <div className="container">
        <h1>Page Not Found</h1>
        <button onClick={() => navigate('/')}><AiOutlineHome />Go To Home</button>
      </div>
    </section>
  )
}

export default NotFound