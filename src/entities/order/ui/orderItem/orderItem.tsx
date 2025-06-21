import { FC, ReactNode } from 'react';
import classes from './classes.module.scss'
import { Row, Col } from 'antd'
import { Order } from '../../model/types';
import Input from '@/shared/ui/input/input';
import Text from '@/shared/ui/text/text';

type Props = {
  data: Order
  actionSlot?: ReactNode,
  orderSlot?: ReactNode,

}

export const OrderItem: FC<Props> = ({
  data,

  actionSlot,
  orderSlot,
}) => {

  return (
    <div className={classes.wrapper}>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <div className={classes.top}>
            <div className={classes.order}>{orderSlot}</div>
            <div className={classes.quantity}>
              <Input
                style={{textAlign: 'center'}}
                value={data.qunatity.value}
                nonEditable
              />
            </div>
            <div className={classes.price}>
              <Text>
                $ {data.product.price}
              </Text>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <div className={classes.bottom}>
            <div className={classes.note}>
              <Input
                placeholder='Order note...'
              />
            </div>
            {actionSlot && (
              <div className={classes.action}>
                {actionSlot}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  )
}