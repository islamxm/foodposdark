import { HomePage } from "@/pages/homePage";
import {
  getRouteDashboard,
  getRouteHome,
  getRouteRoot,
  getRouteSettings,
} from "@/shared/const/router";
import { RouteData, Routes } from "@/shared/types/router";
import {HomeOutlined, PieChartOutlined, SettingOutlined, } from '@ant-design/icons'

const routes: Partial<Record<Routes, RouteData>> = {
  'root': {
    route: {
      path: getRouteRoot(),
      element: <HomePage/>
    },
  },
  'home': {
    route: {
      path: getRouteHome(),
      element: <HomePage />,
    },
    link: {
      title: 'Home',
      to: getRouteHome(),
      icon: <HomeOutlined/>
    }
  },
  'dashboard': {
    route: {
      path: getRouteDashboard(),
      element: <></>
    },
    link: {
      title: 'Dashboard',
      to: getRouteDashboard(),
      icon: <PieChartOutlined/>
    }
  },
  'settings': {
    route: {
      path: getRouteSettings(),
      element: <></>
    },
    link: {
      title: 'Settings',
      to: getRouteSettings(),
      icon: <SettingOutlined/>
    }
  }
}

export default routes