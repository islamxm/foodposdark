import { FC, ReactNode } from 'react';
import classes from './classes.module.scss'
import { classNames } from '@/shared/lib/classNames';
type Props = {
  main: ReactNode
  menu: ReactNode
}

const MainLayout:FC<Props> = ({
  main,
  menu
}) => {
  return(
    <div className={classes.wrapper}>
      <div className={classNames([classes.menu])}>
        {menu}
      </div>
      <div className={classNames([classes.main])}>
        {main}
      </div>
    </div>
  )
}

export default MainLayout