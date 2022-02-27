import React, { useEffect ,useState} from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getHomeData } from '../store/home/actions'
import withStyle from '../hoc/withStyle'
import styles from '../static/style/pages/home.css'
import { Link } from 'react-router-dom'
import { Row, Col, List, Icon } from 'antd'
import Header from '../components/Header'
import Auhtor from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import marked from 'marked'
import Detail from './Detail.js'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

const Home = (props)=> {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize: false,
    xhtml: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  })
  useEffect(()=>{
    //服务端已经往store中注入数据，这里不需要重复请求
    if(JSON.stringify(props.home) !== '{}' ) {
      props.getHomeData()
    }
  },[])

  
    return (
      <div>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} key='light' >
          { JSON.stringify(props.home) !== '{}' && <List
            header={<div className='ListTitle'>最新日志</div>}
            itemLayout="vertical"
            dataSource={props.home}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link to={`/detail/${item.id}`}>
                    {item.title}
                  </Link>
                </div>
                <Route path={`/detail/${item.id}`} component={Detail} />
                <div className="list-icon">
                  <span><Icon type="calendar" /> {item.addTime}</span>
                  <span><Icon type="folder" /> {item.typeName}</span>
                  <span><Icon type="fire" /> {item.view_count}人</span>
                </div>
                <div className="list-context"
                  dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}
                ></div>
              </List.Item>
            )}
          /> }
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} key='right'>
          <Auhtor />
          <Advert />
        </Col>
      </Row>
      <Footer />
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    home: state.home.homeData
  }
}

export default compose(
  connect(mapStateToProps, {getHomeData}),
  withStyle(styles)
)(Home)