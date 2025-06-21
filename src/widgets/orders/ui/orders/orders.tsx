import { FC } from 'react';
import classes from './classes.module.scss'
import { Col, Row } from 'antd';
import { OrdersTitle } from '@/entities/order';
import { OrderTypeTabs } from '@/features/common/orderTypeSelect';
import { OrderItem } from '@/entities/order';
import { ProductCardSm } from '@/entities/product';
import { ordersListMock } from '@/shared/mock';
import { DeleteOrderItem } from '@/features/order/delete-order-item/ui/deleteOrderItem/deleteOrderItem';


type Props = {}

export const Orders: FC<Props> = () => {
  return (
    <div className={classes.wrapper}>
      <Row gutter={[0, 25]}>
        <Col span={24}>
          <div className={classes.head}>
            <Row gutter={[0, 24]}>
              <Col span={24}>
                <OrdersTitle id={123} />
              </Col>
              <Col span={24}>
                <OrderTypeTabs defaultValue={'Delivery'} />
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={24}>
          <div className={classes.body}>
            <Row gutter={[0,25]}>
              {ordersListMock.map(order => (
                <Col span={24}>
                  <OrderItem
                    data={order}
                    orderSlot={<ProductCardSm {...order.product} />}
                    actionSlot={
                      <DeleteOrderItem/>
                    }
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
        <Col span={24}>
          <div className={classes.action}></div>
        </Col>
      </Row>
    </div>
  )
}