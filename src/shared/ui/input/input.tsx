import { FC, InputHTMLAttributes } from 'react';
import classes from './classes.module.scss'
import { Status } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames';
import globalCls from '@/shared/const/classes';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  status?: Status,
}

const Input: FC<Props> = ({
  status,
  type,
  ...props
}) => {

  return (
    <label className={classNames([
      classes.wrapper,
      status && classes[status]
    ])}>

      <input
        className={classNames([
          props.className,
          globalCls.defTransition
        ])}
        {...props}
      />
    </label>
  )
}

export default Input