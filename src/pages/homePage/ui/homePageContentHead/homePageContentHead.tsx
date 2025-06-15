import { FC, PropsWithChildren, ReactNode } from 'react';
import classes from './classes.module.scss'
import Title from '@/shared/ui/title/title';

type Props = FC<{
  title: string
  extra?: ReactNode
}>

export const HomePageContentHead: Props = ({
  extra,
  title
}) => {

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <Title level={3}>{title}</Title>
      </div>
      {extra && (
        <div className={classes.extra}>
          {/* filter feature with async state change */}
          {extra}
        </div>
      )}
    </div>
  )
}