import React, { lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from '../components/layout/Layout'

const Home = lazy(() => import('../pages/home/Home'))
const Summary = lazy(() => import('../pages/summary/Summary'))
const NotFound = lazy(() => import('../pages/404/NotFound'))

const View = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="summary" element={<Summary/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default View