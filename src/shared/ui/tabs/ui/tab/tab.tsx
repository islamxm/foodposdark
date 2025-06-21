import { FC } from 'react';
import classes from './classes.module.scss'
import { Tab as TabType } from '../../lib/types';
import { classNames } from '@/shared/lib/classNames';
import globalCls from '@/shared/const/classes';

type Props = TabType & {
  onChange: (tab: TabType['id']) => void,
  isActive: boolean
}

export const Tab: FC<Props> = ({
  id,
  title,
  isActive,
  onChange
}) => {

  return (
    <button 
      onClick={() => onChange(id)} 
      className={classNames([
        classes.wrapper, 
        isActive && classes.active,
        globalCls.defTransition
      ])}
      >
      {title}
    </button>
  )
}