import MainContainer from "./Containers/MainContainer"
import { Title } from "./Titles/Titles"

import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext, useEffect } from "react";

const ProtectedRoutes = () => {
    


  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes