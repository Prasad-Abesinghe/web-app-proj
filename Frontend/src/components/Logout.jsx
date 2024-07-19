import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logout} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = ()=> {
        logout().then(()=>{
            alert("Logout Successfull!!");
            navigate("/");
        }).catch((error)=>{

        })
    }
  return (
    <div className=' h-screen bg-primary flex items-center justify-center'>
        <button className='btn-accent rounded-md px-8 py-3 text-white' onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Logout