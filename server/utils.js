import React from 'react'
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom'; 
import { renderToString } from 'react-dom/server';
import { matchRoutes } from "react-router-config";
import Routes, { routes } from '../client/router';
import { getServerStore } from "../client/store";
// import StyleContext from 'isomorphic-style-loader/StyleContext'
import antdCss from 'antd/dist/antd.css'

// 改造这里 服务端做数据预取
const loadBranchData = (pathname, store) => {
  console.log('pathname',pathname)
  let branch
  if (!pathname) {
    branch = matchRoutes(routes, pathname).filter((item=>{
      return item.match.isExact
    }))
  } else {
    let newPath = pathname.split('/')[1]
    branch = routes.filter((item=>{
      return item.path.includes(newPath)
    }))
    branch = [{
      route:branch
    }]
  }
  console.log('branch',branch)
// warning: 这里route.loadData 需要错误捕获
  const promises = branch.map(({ route, match }) => {
    return route.loadData
      ? route.loadData(store, match) // 把store 和 match 传入数据预取函数
      : Promise.resolve(null)
  })
 
  return Promise.all(promises)
}

export const render = (req, res) => {
  const store = getServerStore();
  const context = { css: [] };
  // 加载完数据后，再把组件生成字符串返回，现在返回的组件都是有数据的结果
  loadBranchData(req.baseUrl, store).then((data) => {
    // 到这里所有的数据预加载完毕
    console.log('data',data)
    const string = getRenderString()
    console.log('string',string)
    res.send(string);
  }).catch((_err) => {
    console.log(_err)
    res.send('loadBranchData_error');
  })
  //构建服务端的路由
  // const content = renderToString(React.createElement(StaticRouter, {location: req.path}, Routes));
  // const insertCss = antdCss._getCss()
  function getRenderString() {
    const content = renderToString(
      // Warning 这里的 store 一定要和 loadBranchData 的store一致，因为预取的数据要在流到组件中，组件再被生成字符串返回
      // 如果这两个store不一致，将即使数据预取成功，也没有再次流到组件中
      // <StyleContext.Provider value={{ antdCss }}>
        <Provider store={store}>
          <StaticRouter location={req.baseUrl} context={context}>
            {Routes}
          </StaticRouter>
        </Provider>
      // </StyleContext.Provider>
    );
    // <style>
    //       ${insertCss}
    //       </style>
    // 服务端的 renderToString执行完后 context中已经被注入了数据
    const cssStr = context.css.length ? context.css.join('\n') : '';
    // 数据注水
    const hydrate = `
      window.initialState = ${JSON.stringify(store.getState())};
    `
    return `
      <html>
        <head>
          <title>刘相君的博客</title>
          <style>
          ${cssStr}
          </style>
          
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            // Warning 这个script一定不能放到后面，它必须在客户端代码执行之前注水数据
            ${hydrate}
          </script>
          <script src="/index.js"></script>
        </body>
      </html>
    `
  }
}