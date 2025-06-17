import { FC } from 'react';
import classes from './classes.module.scss'
import Input from '@/shared/ui/input/input';
import {SearchOutlined} from '@ant-design/icons'

type Props = {

}

export const SearchProduct: FC<Props> = () => {

  return (
    <div>
      <Input
        type={'search'}
        placeholder='Search for food, coffe, etc..'
        before={<SearchOutlined style={{fontSize: 20}}/>}
      />
    </div>
  )
}