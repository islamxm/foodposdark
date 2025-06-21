import { FC, ReactNode } from 'react';
import Title from '@/shared/ui/title/title';
import { Orders } from '../../model/types';

type Props = {
  id: Orders['id']
}

export const OrdersTitle:FC<Props> = ({id}) => {
  return(
    <Title level={3}>Orders #{id}</Title>
  )
}