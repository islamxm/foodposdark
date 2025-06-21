import { FC, PropsWithChildren, ReactNode } from 'react';
import classes from './classes.module.scss'
import { classNames } from '@/shared/lib/classNames';
import { BaseSize, ColorVars, HAlign, WithClassNamesAndStyles } from '@/shared/types/ui';
import { styleVars } from '@/shared/const/styleVars';


type Props = PropsWithChildren<WithClassNamesAndStyles<{
  text?: string,
  color?: ColorVars,
  textAlign?: HAlign,
  size?: BaseSize
}>>

const Text:FC<Props> = ({
  text,
  children,
  className,
  style,
  textAlign = 'center',
  color = 'white',
  size = 'md'
}) => { 
  

  return(
    <p 
      style={{...style, color: styleVars[color].value, textAlign }} 
      className={classNames([
        classes.text,
        classes[size], 
        className])}>
      {text ?? children}
    </p>
  )
}

export default Text