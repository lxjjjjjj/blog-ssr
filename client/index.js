import React from 'react';
import 'antd/dist/antd.css';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { getClientStore } from './store'
import Router from './router'
// import Home from '../component/Home';

const App = () => {
  return (
    //为了防止客户端重复渲染出现闪烁 所以在客户端和服务端都要注入相同的props 和 store
    <Provider store={getClientStore()}>
      <BrowserRouter>
        {Router}
      </BrowserRouter>
    </Provider>
  )
}
ReactDom.hydrate(<App />, document.getElementById('root'))

// ReactDom.hydrate(<Home />, document.getElementById('root'))