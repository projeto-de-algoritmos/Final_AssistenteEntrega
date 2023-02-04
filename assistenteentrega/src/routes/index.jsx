import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ManagementDelivery from '../pages/ManagementDelivery'
import Map from '../pages/Map'
import RegisterItems from '../pages/RegisterItems'

const MainRoutes = () => (
  <Routes>
    <Route exact path='/' element={<Home />}/>
    <Route exact path='/management' element={<ManagementDelivery />}/>
    <Route exact path='/map' element={<Map />}/>
    <Route exact path='/register' element={<RegisterItems />}/>
  </Routes>
)

export default MainRoutes