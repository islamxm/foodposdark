import { classNames } from "@/shared/lib/classNames";
import { StyleVariants } from "@/shared/types/ui";
import { FC, HTMLProps, PropsWithChildren, ReactNode, useEffect } from "react";
import classes from './classes.module.scss'
import { FlexProps } from "antd";
import globalCls from "@/shared/const/classes";

type BaseButtonProps = {
  type?: 'submit' | 'reset' | 'button'
  isLoading?: boolean
}

type DefaultButtonProps = BaseButtonProps & PropsWithChildren<HTMLProps<HTMLButtonElement>> & {
  isIcon?: false
  styleVariant?: Extract<StyleVariants, 'solid' | 'outlined'>
  before?: ReactNode
  after?: ReactNode,
  justify?: FlexProps['justify']
  isFill?: boolean
}
type IconButtonProps = BaseButtonProps & HTMLProps<HTMLButtonElement> & {
  isIcon: true,
  icon: ReactNode,
  iconSize?: number
  styleVariant?: Extract<StyleVariants, 'solid' | 'outlined'>
}

type ButtonProps = DefaultButtonProps | IconButtonProps


const Button: FC<ButtonProps> = (props) => {
  
  if (!props.isIcon) {
    const {
      isFill,
      styleVariant,
      justify,
      before,
      after,
      children,
    } = props

    return (
      <button
        className={classNames([
          classes.wrapper,
          classes[styleVariant || 'solid'],
          globalCls.defTransition,
          isFill && classes.fill,
          props.className
        ])}
        style={{ ...props.style, justifyContent: justify }}
        {...props}
      >
        {before && <div className={classNames([classes.extra, classes.before])}>{before}</div>}
        <div className={classes.main}>{children}</div>
        {after && <div className={classNames([classes.extra, classes.after])}>{after}</div>}
      </button>
    )
  }

  const {
    styleVariant,
    icon,
    iconSize = 48
  } = props
  
  return (
    <button
      className={classNames([
        classes.wrapper,
        classes[styleVariant || 'solid'],
        globalCls.defTransition,
        classes.icon,
        props.className
      ])}
      style={{...props.style, height: iconSize, width: iconSize}}
      {...props}
    >
      <div className={classes.iconContent}>{icon}</div>
    </button>
  )
}
export default Button;