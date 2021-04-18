import React from 'react';
import { renderRoutes } from "react-router-config";
import { getHomeData } from '../client/store/home/actions'
import Home from './routes/Home';
import Detail from './routes/Detail'
import { flattenRoutes, getBreadcrumbs} from './utils'
const loadHomeData=(store, match)=> {
  // 参数 match 是当前匹配路由的信息
  return store.dispatch(getHomeData())
}
// 根组件
const Root = ({ route, ...rest }) => {
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  )
};

export const routes = [
  {
    breadcrumb: '首页',
    path: "/",
    component: Home,
    loadData: loadHomeData,
    routes: [
      {
        breadcrumb: 'detail',
        path: "/detail/:id",
        component: Detail
      }
    ]
  }
];

export default (
  <div>
    { renderRoutes(routes) }
  </div>
)