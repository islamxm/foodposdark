import { FC } from 'react';
import classes from './classes.module.scss'
import { Col, Row } from 'antd';
import { ProductListProps } from '../../model/types';
import { ProductCard } from '@/entities/product';

export const ProductList: FC<ProductListProps> = ({
  data
}) => {
  return (
    <div className={classes.wrapper}>
      <Row gutter={[28, 50]} wrap>
        {data.map(data => (
          <Col>
            <ProductCard {...data} />
          </Col>
        ))}
      </Row>
    </div>
  )
}