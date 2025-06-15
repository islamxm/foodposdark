import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext } from "react";

export type LineStyleType = {xTransform: number, width: number}

export type TabContextValueType = {
  activeTab: number | undefined
  onChange: (activeTab: number | undefined) => void,
  lineStyle: LineStyleType,
  onLineStyleChange: Dispatch<SetStateAction<LineStyleType>>
}

const tabContext = createContext<TabContextValueType>({activeTab: undefined, onChange: () => {}, lineStyle: {xTransform: 0, width: 0}, onLineStyleChange: () => {}})

type TabContextProviderProps = FC<PropsWithChildren & {value: TabContextValueType}>
export const TabContextProvider:TabContextProviderProps = ({children, value}) => {
  
  return (
    <tabContext.Provider value={value}>
      {children}
    </tabContext.Provider>
  )
}

export const useTabContext = () => {
  const context = useContext(tabContext)
  return context
}





