import { FC, PropsWithChildren, ReactNode } from 'react';
import classes from './classes.module.scss'
import { classNames } from '@/shared/lib/classNames';

type Props = PropsWithChildren<{ header?: ReactNode, extra?: {
  content: ReactNode,
  isFullWindowHeight: boolean
} }>

const PageLayout: FC<Props> = ({ header, children, extra }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        {header && <div className={classes.header}>{header}</div>}
        {children && <div className={classes.content}>{children}</div>}
      </div>
      {extra && <div className={classNames([
        classes.extra,
        extra.isFullWindowHeight && classes.fullWindowHeight
      ])}>{extra.content}</div>}
    </div>

  )
}

export default PageLayout