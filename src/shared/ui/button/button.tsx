import { classNames } from "@/shared/lib/classNames";
import { StyleVariants } from "@/shared/types/ui";
import { FC, HTMLProps, PropsWithChildren, ReactNode } from "react";
import classes from './classes.module.scss'
import { FlexProps } from "antd";
import globalCls from "@/shared/const/classes";

type Props = PropsWithChildren<HTMLProps<HTMLButtonElement>> & {
  type?: 'submit' | 'reset' | 'button'
  styleVariant: Extract<StyleVariants, 'solid' | 'outlined'>
  before?: ReactNode
  after?: ReactNode,
  justify?: FlexProps['justify']
  isFill?: boolean
}

const Button:FC<Props> = ({
  children,
  styleVariant = 'solid',
  after,
  before,
  justify = 'center',
  isFill,
  ...props
}) => {
  return (
    <button
      className={classNames([
        classes.wrapper,
        classes[styleVariant],
        globalCls.defTransition,
        isFill && classes.fill,
        props.className
      ])}
      style={{...props.style, justifyContent: justify}}
      {...props}
      >
      {before && <div className={classNames([classes.extra, classes.before])}>{before}</div>}
      <div className={classes.main}>{children}</div>
      {after && <div className={classNames([classes.extra, classes.after])}>{after}</div>}      
    </button>
  )
}
export default Button;