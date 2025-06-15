import { FC, PropsWithChildren, ReactNode } from 'react';
import classes from './classes.module.scss'

type Props = PropsWithChildren<{header?: ReactNode,}>

const PageLayout:FC<Props> = ({header, children}) => {
  return(
    <div className={classes.wrapper}>
      {header && <div className={classes.header}>{header}</div>}
      {children && <div className={classes.content}>{children}</div>}
    </div>
  )
}

export default PageLayout