import { FC, ReactNode } from 'react';
import classes from './classes.module.scss' 
import { SelectProps } from 'antd';

type Props = {

}

export const Select:FC<SelectProps> = (props) => {
  return(
    <Select 
      {...props}
      className={classes.wrapper}
      />
  )
}