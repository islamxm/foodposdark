import { CSSProperties, ReactNode } from "react"

export type WithBaseUIStates<T> = {
  loading?: ReactNode,
  error?: ReactNode,
} & T

export type WithClassNamesAndStyles<T> = {
  className?: string,
  style?: CSSProperties
} & T

export type ColorVariants = 
'primary' |
'danger' |
'success' | 
'info' |
'warning' 

export type StyleVariants = 
'simple' |
'solid' |
'outlined' 

export type ColorVars =
'primaryColor' |
'secondaryColor' |
'white' |
'textDark' |
'textGray' |
'baseDarkBg1' |
'baseDarkBg2' 
export type OtherStyleVars = 
'fontFamily'

export type StyleVarsObj = Record< ColorVars, {key: string, value: string}>

export type HAlign = 'left' | 'right' | 'center'

export type Status = 'loading' | 'success' | 'error'

export type IconProps = {
  width: number,
  height: number,
  fill: string,
  stroke: string
  className: string
}

export type BaseSize = 'sm' | 'md' | 'lg'