import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import routes from '../../config/routes';
import MainLayout from '@/app/layouts/mainLayout/MainLayout';
import { Menu } from '@/widgets/menu';
import { RootProvider } from '@/app/providers/root/ui/rootProvider/RootProvider';

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <RootProvider>
        <MainLayout
          menu={<Menu routes={routes} />}
          main={
            <Routes>
              {Object.entries(routes).map(([_, obj]) => (
                <Route path={obj.route.path} element={obj.route.element} />
              ))}
            </Routes>
          }
        />
      </RootProvider>
    </BrowserRouter>
  )
}