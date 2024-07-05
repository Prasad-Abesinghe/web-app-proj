import React from 'react'
import NavBar from '../components/NavBar'
import ShopSideBar from './ShopSideBar'
import { Outlet } from 'react-router-dom'

const ShopLayout = () => {
  return (
    <div>
        <NavBar/>
        <div className=" flex sm:flex-col ">
            <ShopSideBar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default ShopLayout