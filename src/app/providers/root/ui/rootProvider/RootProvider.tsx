import { getRouteHome } from "@/shared/const/router";
import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router";

export const RootProvider:FC<PropsWithChildren> = ({children}) => {
  const {pathname} = useLocation()

  if(pathname === '/') {
    return <Navigate to={getRouteHome()}/>
  }
  return children
}