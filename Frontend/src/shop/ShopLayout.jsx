import React from 'react'
import ShopSideBar from './ShopSideBar'
import { Outlet } from 'react-router-dom'

const ShopLayout = () => {
  return (
    <div>
        <div className=" flex md:flex-col ">
            <ShopSideBar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default ShopLayout