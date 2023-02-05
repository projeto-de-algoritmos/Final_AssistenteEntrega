import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Map from '../pages/Map'
import RegisterItems from '../pages/RegisterItems'

const MainRoutes = () => (
  <Routes>
    <Route exact path='/' element={<Home />}/>
    <Route exact path='/entrega' element={<Map />}/>
    <Route exact path='/estoque' element={<RegisterItems />}/>
  </Routes>
)

export default MainRoutes