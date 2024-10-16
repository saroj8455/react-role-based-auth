import { useLocation, Navigate, Outlet } from "react-router-dom";
import React from "react";
import useAuth from "../hooks/useAuth";

export default function RequiredAuth({ allowedRoles }) {
  const { auth } = useAuth();
  const location = useLocation();

  //   {
  //     "username": "admin",
  //     "pwd": "admin",
  //     "accessToken": "1ef8b72f-c0ba-6950-9d97-b6e9646cf462",
  //     "roles": 5150
  // }
  // const isAllowed = allowedRoles.includes(auth.role);

  console.log(auth);

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
