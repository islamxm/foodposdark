import { act, FC, useEffect, useRef } from 'react';
import classes from './classes.module.scss'
import { TabItemProps } from '../../types';
import { Flex } from 'antd';
import { useTabContext } from '../../lib/tabContext';
import { classNames } from '@/shared/lib/classNames';

const TabItem: FC<TabItemProps> = ({
  id,
  title,
}) => {
  const { onChange, onLineStyleChange, activeTab } = useTabContext()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeTab === id && ref?.current) {
      const parentXOffset = ref.current.parentElement?.offsetLeft
      const selfXOffset = ref.current.offsetLeft
      const xTransform = selfXOffset - (parentXOffset || 0)
      const width = ref.current.scrollWidth
      onLineStyleChange({ xTransform, width })
    }
  }, [activeTab, ref])

  return (
    <Flex
      ref={ref}
      onClick={() => onChange(id)}
      justify={'center'}
      align={'center'}
      className={classNames([classes.wrapper, activeTab === id && classes.active])}>
      {title}
    </Flex>
  )
}

export default TabItem