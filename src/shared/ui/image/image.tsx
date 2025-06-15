import { FC, ImgHTMLAttributes } from 'react';
import classes from './classes.module.scss'
import { classNames } from '@/shared/lib/classNames';
import { useBaseStatus } from '@/shared/lib/hook/useBaseStatus';
import placeholderImg from '@/assets/images/product-pl.jpg'

type HTMLImageType = ImgHTMLAttributes<HTMLImageElement>

type Props = {
  src: HTMLImageType['src']
  width?: HTMLImageType['width']
  height?: HTMLImageType['height']
  alt?: HTMLImageType['alt']
  loading?: HTMLImageType['loading']
  className?: HTMLImageType['className']
  placeholder?: HTMLImageType['src'] 
}

const Image:FC<Props> = (props) => {
  const {
    isError,
    isLoading,
    onBaseStatusChange
  } = useBaseStatus()

  return(
    <img
      {...props}
      src={props.src ?? props.placeholder ?? placeholderImg}
      className={classNames([
        classes.img, 
        props.className,
        isLoading && classes.loading,
        isError && classes.error,
        (!props.src && !props.placeholder) && classes.placeholderShow
      ])}
      onLoad={() => onBaseStatusChange('success')}
      onError={() => onBaseStatusChange('error')}
      />
  )
}

export default Image