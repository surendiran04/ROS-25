import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";

const ProtectedRoutes = () => {
  const { auth, user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      if (user.LoggedInStatus === undefined) {
        return null;
      }

      if (!auth || user.LoggedInStatus !== "LoggedIn") {
        navigate("/login", { replace: true });
      }
    };

    checkAuth();
  }, [auth, user.LoggedInStatus]);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
