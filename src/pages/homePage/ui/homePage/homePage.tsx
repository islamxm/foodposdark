import { FC, useState } from 'react';
import PageLayout from '@/shared/ui/pageLayout/pageLayout';
import { Header } from '@/widgets/header';
import { Col, Row } from 'antd';
import { TabBar } from '@/widgets/tabBar';
import { TabContextValueType } from '@/widgets/tabBar/lib/tabContext';
import { ProductList } from '@/widgets/productList';
import { tabsListMock, productListMock } from '../../model/mock';
import { HomePageContentHead } from '../homePageContentHead/homePageContentHead';
import { SearchProduct } from '@/features/common/searchProduct';
import { OrderTypeSelect } from '@/features/common/orderTypeSelect';

export const HomePage: FC = () => {
  const [activeTab, setActiveTab] = useState<TabContextValueType['activeTab']>(1)

  return (
    <PageLayout
      header={
        <Header
          title='Jaegar Resto'
          subtitle='Tuesday, 2 Feb 2021'
          extra={<SearchProduct/>}
        />
      }
    >
      <Row gutter={[24,24]}>
        <Col span={24}>
          <TabBar
            activeTab={activeTab}
            onChange={setActiveTab}
            data={tabsListMock}
          />
        </Col>
        <Col span={24}>
          <HomePageContentHead 
            title='Choose Dishes' 
            extra={<OrderTypeSelect/>}
            />
        </Col>
        <Col span={24}>
          <ProductList
            data={productListMock}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}

