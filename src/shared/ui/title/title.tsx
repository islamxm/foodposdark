import { FC, PropsWithChildren, ReactNode } from 'react';
import classes from './classes.module.scss'
import { classNames } from '@/shared/lib/classNames';
import { ColorVars, WithClassNamesAndStyles } from '@/shared/types/ui';

type Props = PropsWithChildren<WithClassNamesAndStyles<{
  level?: 1 | 2 | 3 | 4 | 5 | 6
  title?: string,
  color?: ColorVars
}>>

const Title: FC<Props> = ({
  level = 1,
  className,
  title,
  children,
  style,
  color = 'white'
}) => {

  switch (level) {
    case 1:
      return <h1 style={{...style, color}} className={classNames([classes.title, className])}>{title ?? children}</h1>
    case 2:
      return <h2 style={{...style, color}} className={classNames([classes.title, className])}>{title ?? children}</h2>
    case 3:
      return <h3 style={{...style, color}} className={classNames([classes.title, className])}>{title ?? children}</h3>
    case 4:
      return <h4 style={{...style, color}} className={classNames([classes.title, className])}>{title ?? children}</h4>
    case 5:
      return <h5 style={{...style, color}} className={classNames([classes.title, className])}>{title ?? children}</h5>
    case 6:
      return <h6 style={{...style, color}} className={classNames([classes.title, className])}>{title ?? children}</h6>
    default:
      return null
  }

  return (
    <div></div>
  )
}

export default Title