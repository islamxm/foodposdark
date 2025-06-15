import { FC, useState } from 'react';
import classes from './classes.module.scss'
import { Flex } from 'antd';
import TabItem from '../tabItem/tabItem';
import { TabList } from '../../types';
import { LineStyleType, TabContextProvider, TabContextValueType } from '../../lib/tabContext';

type Props = {
  data: TabList
} & Pick<TabContextValueType, 'activeTab' | 'onChange'>

export const TabBar: FC<Props> = ({
  data,
  ...contextValue
}) => {
  const [lineStyle, setLineStyle] = useState<LineStyleType>({ xTransform: 0, width: 0 })

  return (
    <TabContextProvider value={{
      ...contextValue,
      lineStyle,
      onLineStyleChange: setLineStyle
    }}>
      <div className={classes.wrapper}>
          <Flex gap={30}>
            {data.map(tab => (
              <TabItem
                {...tab}
              />
            ))}
          </Flex>
        <div style={{ transform: `translateX(${lineStyle.xTransform}px)`, width: lineStyle.width }} className={classes.line}></div>
      </div>
    </TabContextProvider>

  )
}
