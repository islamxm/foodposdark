import { FC, ReactNode } from 'react';
import classes from './classes.module.scss'
import Select from '@/shared/ui/select/select';
import { OrderType } from '@/entities/order';
import { classNames } from '@/shared/lib/classNames';
import useOrderTypeSelect from '../../lib/useOrderTypeSelect';

type Props = {
  defaultValue: OrderType
}

export const OrderTypeSelect:FC<Props> = ({
  defaultValue = 'Dine In'
}) => {
  const {options} = useOrderTypeSelect(defaultValue)
  
  return(
    <div className={classes.wrapper}>
      <Select
        defaultValue={defaultValue}
        options={options}
        className={classNames([
          classes.select
        ])}
        />
    </div>
  )
}