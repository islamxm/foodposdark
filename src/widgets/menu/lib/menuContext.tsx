import { RouteData, Routes } from "@/shared/types/router";
import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

type YOffset = number
type MenuContextValueType = {
  YOffset: YOffset,
  onChange: (opts: {parentEl: HTMLElement, linkEl: HTMLAnchorElement}) => void,
  routes: Partial<Record<Routes, RouteData>>
}

const MenuContext = createContext<MenuContextValueType>({YOffset: 0, onChange: () => {}, routes: {}})

const useMenu = () => {
  const [YOffset, setXOffset] = useState<YOffset>(0)

  const onChange:MenuContextValueType['onChange'] = (opts) => { 
    const selfY = opts.linkEl.getBoundingClientRect().top
    const diff = selfY - ((80 - 56) / 2)
    setXOffset(diff)
  }

  return {
    YOffset, 
    onChange
  }
}

export const MenuProvider: FC<PropsWithChildren & {routes: Partial<Record<Routes, RouteData>>}> = ({ children, routes }) => {
  const menuContextValue = useMenu()
  return (
    <MenuContext.Provider value={{...menuContextValue, routes}}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = () => {
  const menuContext = useContext(MenuContext)
  return menuContext
}
