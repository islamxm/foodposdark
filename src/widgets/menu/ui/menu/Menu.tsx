import { FC, ReactNode } from 'react';
import classes from './classes.module.scss'
import { RouteData, Routes } from '@/shared/types/router';
import { MenuProvider } from '../../lib/menuContext';
import { MenuList } from '../menuList/menuList';

type Props = {
  routes: Partial<Record<Routes, RouteData>>
}

export const Menu: FC<Props> = ({
  routes
}) => {
  return (
    <MenuProvider routes={routes}>
      <div className={classes.wrapper}>
        <MenuList />
      </div>
    </MenuProvider>
  )
}

