import { FC } from 'react';
import classes from './classes.module.scss'
import { Tabs } from '@/shared/ui/tabs';
import { OrderType } from '@/entities/order';
import useOrderTypeSelect from '../../lib/useOrderTypeSelect';
import { Tab as TabType } from '@/shared/ui/tabs/lib/types';

type Props = {
  defaultValue: OrderType
}

const tabs: Array<TabType & { value: OrderType }> = [
  { id: 1, title: 'Delivery', value: 'Delivery' },
  { id: 2, title: 'Dine In', value: 'Dine In' },
  { id: 3, title: 'To Go', value: 'To Go' },
]

export const OrderTypeTabs: FC<Props> = ({ defaultValue }) => {
  const {
    orderType,
    onSelectOrderType
  } = useOrderTypeSelect(defaultValue)

  return (
    <div className={classes.wrapper}>
      <Tabs
        tabs={tabs}
        activeTab={tabs.find(tab => tab.value === orderType)?.id || 0}
        onChange={tab => onSelectOrderType(tabs.find(t => t.id === tab)?.value)}
      />
    </div>
  )
}