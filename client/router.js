import React from 'react';
import { renderRoutes } from "react-router-config";
import { Router, Route } from 'react-router'
import { getHomeData } from '../client/store/home/actions'
import { getDetailData } from '../client/store/detail/actions'
import Home from './routes/Home';
import Detail from './routes/Detail'
import { Col } from 'antd';
const loadHomeData=(store, match)=> {
  // 参数 match 是当前匹配路由的信息
  return store.dispatch(getHomeData())
}
const loadDetailData=(store, match)=> {
  // 参数 match 是当前匹配路由的信息
  return store.dispatch(getDetailData())
}

export const routes = [
  {
    breadcrumb: '首页',
    path: "/",
    component: Home,
    loadData: loadHomeData,
  },
  {
    breadcrumb: 'detail',
    path: "/detail/:id",
    component: Detail,
    loadData:loadDetailData
  }
];

export default (
  <div>
      { renderRoutes(routes) }
  </div>
)