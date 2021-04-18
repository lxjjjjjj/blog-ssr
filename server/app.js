const express = require('express');
const { render } = require('./utils');
const app = express()
const mysql = require('mysql');
app.use(express.static('dist'));

const list = [
  {id:1,typeId:1,title:'react-hooks',articleContent:'react-hooks在我这里已经没有秘密了',introduce:'关于react-hooks的踩坑点',addtime:'1580740022'},
  {id:2,typeId:2,title:'webpack',articleContent:'webpack我总会弄懂你的，我要去了解基本内容了',introduce:'关于webpack的基本配置和分包策略',addtime:'1580659200'},
  {id:3,typeId:3,title:'react ssr',articleContent:'ssr 我已经要成功了哦',introduce:'关于webpack的基本配置和分包策略',addtime:'1618733235'},
]
// 链接数据库
var connection = mysql.createConnection({
  host: '8.129.60.15',
  user: 'root',
  password: 'Root123@',
  port: 3306,
  database: 'react_blog'
});
connection.connect(function (err) {
  if (err) {
    console.log('err :', err);
    connection.end(function (err) {
      console.log('连接数据库失败');
      if (err) {
        console.log('连接数据库失败，关闭数据库连接失败！')
        throw err
      }
    })
  } else {
    console.log("链接成功");
  }
})
app.get('/api/homedata', function(req, res, next) {
  const sql = 'SELECT article.id as id,' +
  'article.title as title,' +
  'article.introduce as introduce,' +
  "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime," +
  'article.view_count as view_count ,' +
  'type.typeName as typeName ' +
  'FROM article LEFT JOIN type ON article.type_id = type.id'
  connection.query(sql, [], function (err, results, fields) {
    if (err) {
      throw err
    }
    //将查询出来的数据返回给回调函数
    res.json(results)
    // //停止链接数据库，必须在查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
    // connection.end(function (err) {
    //   if (err) {
    //     console.log('关闭数据库连接失败！')
    //     throw err
    //   }
    // })
  })
})
app.get('/detail', function(req, res, next) {
  console.log('req :', req);
  const sql = 'SELECT article.id as id,' +
  'article.title as title,' +
  'article.introduce as introduce,' +
  'article.article_content as article_content,' +
  "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime," +
  'article.view_count as view_count ,' +
  'type.typeName as typeName ,' +
  'type.id as typeid ' +
  'FROM article LEFT JOIN type ON article.type_id = type.id ' +
  'WHERE article.id=' + id
  connection.query(sql, [], function (err, results, fields) {
    if (err) {
      throw err
    }
    //将查询出来的数据返回给回调函数
    res.json(results)
    // //停止链接数据库，必须在查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
    // connection.end(function (err) {
    //   if (err) {
    //     console.log('关闭数据库连接失败！')
    //     throw err
    //   }
    // })
  })
})

app.use('*', function(req, res, next) {
  if(req.baseUrl === '/favicon.ico') return res.end()
  // res.send(render(req))
  render(req, res)
})
app.listen(3001, () => {
  console.log('listen on port 3001')
})