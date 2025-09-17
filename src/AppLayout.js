import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";

const AppLayout = () => {
  const { isSignedIn } = useSelector((state) => state.auth)

   if (!isSignedIn) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AppLayout
