import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";
import NavBar from './components/navbar/NavBar';

const AppLayout = () => {
  const { isSignedIn } = useSelector((state) => state.auth)

   if (!isSignedIn) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default AppLayout
