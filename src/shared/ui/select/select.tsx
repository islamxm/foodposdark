import { FC, ReactNode } from 'react';
import classes from './classes.module.scss'
import {Select as AntSelect, SelectProps} from 'antd'
import { classNames } from '@/shared/lib/classNames';
import globalCls from '@/shared/const/classes';

type Props = {

}

const Select: FC<SelectProps> = (props) => {
  return (
    <AntSelect
      {...props}
      className={classNames([
        globalCls.antSelect,
        props.className,
        classes.wrapper,
      ])}
    />
  )
}

export default Select