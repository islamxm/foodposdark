import { FC } from 'react';
import classes from './classes.module.scss'
import { useMenuContext } from '../../lib/menuContext';
import { MenuItem } from '../menuItem/menuItem';
import { Col, Row } from 'antd';

type Props = {

}

export const MenuList: FC<Props> = () => {
  const { routes, YOffset } = useMenuContext()

  return (
    <div className={classes.wrapper}>
      <Row justify={'center'} gutter={[30, 30]}>
        {Object.entries(routes).map(([key, route]) => (
          route.link && <Col span={24}><MenuItem key={key} {...route.link} /></Col>
        ))}
      </Row>
      <div style={{ transform: `translateY(${YOffset}px)` }} className={classes.activeBar}></div>
    </div>
  )
}