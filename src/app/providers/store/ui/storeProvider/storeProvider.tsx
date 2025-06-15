import { FC, PropsWithChildren, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../config/store';


const StoreProvider:FC<PropsWithChildren> = ({children}) => {
  return(
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreProvider
