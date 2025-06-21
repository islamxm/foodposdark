import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import classes from './classes.module.scss'
import globalCls from '@/shared/const/classes';
import { classNames } from '@/shared/lib/classNames';

const BlockInView: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect>()
  const [blockHeight, setBlockHeight] = useState<number>(0)

  useEffect(() => {
    ref.current && setRect(ref.current.getBoundingClientRect())
  }, [ref])

  useEffect(() => {
    if(!rect) return
    const height = window.innerHeight - rect.top - 25
    height >= 0 ? setBlockHeight(height) : setBlockHeight(0)
  }, [rect])

  return (
    <div ref={ref} className={classNames([
      classes.wrapper,
      globalCls.customScroll
    ])} 
    style={{ height: `${blockHeight}px` }}
    >
      {children}
    </div>
  )
}
export default BlockInView