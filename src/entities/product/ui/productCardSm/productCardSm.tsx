import { FC, ReactNode } from 'react';
import classes from './classes.module.scss'
import Image from '@/shared/ui/image/image';
import { Product } from '../../model/types';
import { Col, Row } from 'antd';
import { classNames } from '@/shared/lib/classNames';
import Text from '@/shared/ui/text/text';
import globalCls from '@/shared/const/classes';
import { Link } from 'react-router';

type Props = Pick<Product, 'id' | 'price' | 'thumbnail' | 'title'>

export const ProductCardSm: FC<Props> = ({
  title,
  thumbnail,
  price
}) => {
  return (
    <Link to={'#'} className={classes.wrapper}>
      <div className={classes.img}>
        <Image
          width={40}
          height={40}
          src={thumbnail}
          loading={'lazy'}
        />
      </div>
      <div className={classes.body}>
        <Row gutter={[4, 4]}>
          <Col span={24}>
            <Text
              style={{ fontWeight: 500 }} 
              className={classNames([
                classes.title, 
                globalCls.defTransition
              ])}
              size='sm'
              textAlign={'left'}
              >
              {title}
            </Text>
          </Col>
          <Col span={24}>
            <Text size='sm' textAlign={'left'} style={{fontWeight: 400}} className={classes.price}>${price}</Text>
          </Col>
        </Row>
      </div>
    </Link>
  )
}