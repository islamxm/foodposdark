import { FC, InputHTMLAttributes, ReactNode, useEffect } from 'react';
import classes from './classes.module.scss'
import { Status } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames';
import globalCls from '@/shared/const/classes';
import useInput from '@/shared/lib/hook/useInput';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  status?: Status,
  before?: ReactNode
  after?: ReactNode,
  nonEditable?: boolean
}

const Input: FC<Props> = ({
  status,
  type,
  before,
  after,
  nonEditable,
  ...props
}) => {
  const {
    ref,
    focus,
    focused,
    focusOn,
    focusOff
  } = useInput({ isFocused: false })

  return (
    <label
      onClick={focus}
      className={classNames([
        classes.wrapper,
        globalCls.defTransition,
        status && classes[status],
        focused && classes.focused,
        nonEditable && classes.nonEditable,
      ])}>
      {before &&
        <div className={classNames([classes.extra, classes.before])}>{before}</div>}
      <input
        ref={ref}
        onBlur={focusOff}
        onFocus={focusOn}
        {...props}
      />
      {after &&
        <div className={classNames([classes.extra, classes.after])}>{after}</div>}
    </label>
  )
}

export default Input