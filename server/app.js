const express = require('express');
const { render } = require('./utils');
const app = express()
const mysql = require('mysql');
app.use(express.static('dist'));
const router = express.Router();

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
app.use('/api/detailData', function(req, res, next) {
  // const id = req.baseUrl.slice(req.baseUrl.length-1,req.baseUrl.length);
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
  console.log('app use req.path',req)
  render(req, res)
})
app.listen(3001, () => {
  console.log('listen on port 3001')
})