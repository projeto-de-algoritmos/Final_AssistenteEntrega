import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ManageDelivery from '../pages/ManageDelivery'
import RegisterItems from '../pages/RegisterItems'

const MainRoutes = () => (
  <Routes>
    <Route exact path='/' element={<Home />}/>
    <Route exact path='/entrega' element={<ManageDelivery />}/>
    <Route exact path='/estoque' element={<RegisterItems />}/>
  </Routes>
)

export default MainRoutes