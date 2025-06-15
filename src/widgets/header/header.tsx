import { FC, ReactNode } from 'react';
import classes from './classes.module.scss'
import { Col, Flex, Row, Typography } from 'antd';
import Title from '@/shared/ui/title/title';
import { classNames } from '@/shared/lib/classNames';
import globalCls from '@/shared/const/classes';
import Text from '@/shared/ui/text/text';

type Props = {
  title?: string,
  subtitle?: string,
  extra?: ReactNode
}

export const Header:FC<Props> = ({
  title,
  subtitle,
  extra
}) => {
  return(
    <Flex gap={5} className={classNames([classes.header])}>
      <div className={classes.main}>
        <Row gutter={4}>
          {title && <Col span={24}><Title>{title}</Title></Col>}
          {subtitle && <Col span={24}><Text textAlign={'left'} color={'textGray'}>{subtitle}</Text></Col>}
        </Row>
      </div>
      {
        extra && (
          <div className={classes.extra}>{extra}</div>
        )
      }
    </Flex>
  )
}

