import { FC, useEffect, useRef, useState } from 'react';
import classes from './classes.module.scss'
import { NavLink, NavLinkProps } from 'react-router';
import { classNames } from '@/shared/lib/classNames';
import { useMenuContext } from '../../lib/menuContext';
import { RouteLinkProps } from '@/shared/types/router';

export const MenuItem: FC<RouteLinkProps> = ({
  icon,
  ...props
}) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const { onChange } = useMenuContext()
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    if (isActive && ref.current) {
      const parentEl = ref.current.parentElement?.parentElement?.parentElement
      parentEl && onChange({
        parentEl,
        linkEl: ref.current
      })
    }
  }, [ref, isActive])

  return (
    <div className={classes.wrapper}>
      <NavLink
        {...props}
        ref={ref}
        className={({ isActive }) => {
          const cls = [classes.link]
          if (isActive) {
            cls.push(classes.active)
            setIsActive(true)
          } else setIsActive(false)
          return classNames(cls)
        }}>
        {icon}
      </NavLink>
    </div>
  )
}

