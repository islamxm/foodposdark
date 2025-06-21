import { FC } from 'react';
import classes from './classes.module.scss'
import { Col, Row } from 'antd';
import { Tab as TabType, Tabs as TabsType } from '../../lib/types';
import { Tab } from '../tab/tab';

type Props = {
  tabs: TabsType
  onChange: (tab: TabType['id']) => void
  activeTab: TabType['id']
}

export const Tabs:FC<Props> = ({
  tabs,
  onChange,
  activeTab
}) => {
  
  return(
    <div className={classes.wrapper}>
      <Row gutter={[8,8]}>
        {
          tabs.map(tab => (
            <Col>
              <Tab
                {...tab}
                onChange={onChange}
                isActive={activeTab === tab.id}
                />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}