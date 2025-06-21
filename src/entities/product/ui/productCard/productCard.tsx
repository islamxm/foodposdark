import { FC, useEffect } from 'react';
import classes from './classes.module.scss'
import { Product } from '../../model/types';
import { Col, Row } from 'antd';
import Text from '@/shared/ui/text/text';
import { classNames } from '@/shared/lib/classNames';
import Image from '@/shared/ui/image/image';
import { Link } from 'react-router';
import globalCls from '@/shared/const/classes';

export const ProductCard:FC<Product> = ({
  title,
  available,
  thumbnail,
  price
}) => {

  return(
    <Link to={'#'} className={classes.wrapper}>
      <div className={classNames([classes.img])}>
        <div className={classes.img_el}>
          <Image
            width={150}
            height={150}
            src={thumbnail}
            loading={'lazy'}
            />
        </div>
      </div>
      <div className={classes.body}>
        <Row gutter={[8,8]}>
          <Col span={24}>
            <Text style={{fontWeight: 500}} className={classNames([classes.title, globalCls.defTransition])}>{title}</Text>
          </Col>
          <Col span={24}>
            <Text style={{fontWeight: 400}} className={classes.price}>${price}</Text>
          </Col>
          <Col span={24}>
            <Text color={'textGray'} className={classes.available}>
              {`${available.availableCount} ${available.availableUnit} available`}
            </Text>
          </Col>
        </Row>
      </div>
    </Link>
  )
}