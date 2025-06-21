import { FC, ReactNode } from 'react';
import classes from './classes.module.scss'
import Button from '@/shared/ui/button/button';
import {DeleteOutlined} from '@ant-design/icons'
import { useDeleteOrderItem } from '../../lib/useDeleteOrderItem';
import { Status } from '@/shared/types/ui';

type Props = {
  onClick?: (status: Status) => void
}

export const DeleteOrderItem: FC<Props> = ({
  onClick
}) => {
  const {} = useDeleteOrderItem()
  

  return (
    <div className={classes.wrapper}>
      <Button
        isIcon={true}
        icon={<DeleteOutlined/>}
        styleVariant={'outlined'}
      />
    </div>
  )
}