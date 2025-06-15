import { ReactNode } from "react"
import { NavLinkProps, RouteProps } from "react-router"

export type Routes = 
'root' |
'home' |
'dashboard' |
'settings'

export type RouteLinkProps = NavLinkProps & {icon?: ReactNode}
export type RouteMainProps = RouteProps

export type RouteData = {
  route: RouteMainProps,
  link?: RouteLinkProps
}