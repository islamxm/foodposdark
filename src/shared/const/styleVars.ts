import { StyleVarsObj } from "../types/ui"


export const styleVars: StyleVarsObj = {
  // fontFamily: {
  //   key: 'font-family',
  //   value: 'Barlow sans-serif'
  // },
  primaryColor: {
    key: 'primary-color',
    value: '#ea7c69'
  },
  secondaryColor: {
    key: 'secondary-color',
    value: '#9288e0'
  },
  white: {
    key: 'white',
    value: '#fff'
  },
  textDark: {
    key: 'text-dark',
    value: '#3b5162'
  },
  textGray: {
    key: 'text-gray',
    value: '#889898'
  },
  baseDarkBg1: {
    key: 'base-dark-bg-1',
    value: '#252836'
  },
  baseDarkBg2: {
    key: 'base-dark-bg-2',
    value: '#1f1d2b'
  }
}

export type StyleVars = keyof typeof styleVars

