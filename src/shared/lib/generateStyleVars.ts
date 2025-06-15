import { StyleVarsObj } from "../types/ui"

export const generateStyleVars = (varsObjs: StyleVarsObj) => {
  const root = document.documentElement
  Object.values(varsObjs).map(({key, value}) => {
    root.style.setProperty(`--${key}`, value)
  })
}