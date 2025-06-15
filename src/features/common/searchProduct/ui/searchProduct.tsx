import { FC, ReactNode } from 'react';
import classes from './classes.module.scss'
import Input from '@/shared/ui/input/input';

type Props = {

}

export const SearchProduct: FC<Props> = () => {
  return (
    <div>
      <Input
        type={'search'}
        placeholder='Search for food, coffe, etc..'
      />
    </div>
  )
}