import { Product } from "@/entities/product/model/types";
import { TabItemProps } from "@/widgets/tabBar/types";
import bowl1 from '@/assets/images/bowl 1.png'
import bowl2 from '@/assets/images/bowl 2.png'

export const productListMock: Array<Product> = [
  {
    id: 1,
    title: 'Spicy seasoned seafood noodles',
    price: 30,
    available: {
      availableCount: 10,
      availableUnit: 'bowls'
    },
    thumbnail: bowl1
  },
   {
    id: 2,
    title: 'Salted Pasta with mushroom sauce',
    price: 30,
    available: {
      availableCount: 10,
      availableUnit: 'bowls'
    },
    thumbnail: bowl2
  },
   {
    id: 3,
    title: 'Beef dumpling in hot and sour soup',
    price: 30,
    available: {
      availableCount: 10,
      availableUnit: 'bowls'
    }
  },
    {
    id: 4,
    title: 'Healthy noodle with spinach leaf',
    price: 30,
    available: {
      availableCount: 10,
      availableUnit: 'bowls'
    }
  }
]

export const tabsListMock: Array<TabItemProps> = [
  {id: 1, title: 'Hot Dishes'},
  {id: 2, title: 'Cold Dishes'},
  {id: 3, title: 'Soup'},
]