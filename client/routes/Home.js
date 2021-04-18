import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getHomeData } from '../store/home/actions'
import withStyle from '../hoc/withStyle'
import styles from './Home.css';
import Page from './Page';
import { Link } from 'react-router-dom'
import { Row, Col, List, Icon } from 'antd'
import Header from '../components/Header'
import Auhtor from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

class Home extends React.Component {

  // 预加载数据，服务端调用
  static async loadData(store, match) {
    // 参数 match 是当前匹配路由的信息
    return store.dispatch(getHomeData())
  }

  componentDidMount() {
    //服务端已经往store中注入数据，这里不需要重复请求
    // if(JSON.stringify(this.props.home) !== '{}' ) {
      this.props.getHomeData()
    // }
  }

  render() {
    const props = this.props;
    return (
      <div>
        <div className={styles.title}>This is home</div>
        <div> {JSON.stringify(props.home) !== '{}' && props.home.list.map(item => <div key={item}>{item}</div>)} </div>
        <button onClick={() => props.getHomeData()}>click me</button>
        <div><button className={styles.alertMe} onClick={() => alert('hhhhhh')}>alert</button></div>
        <Page></Page>
        { JSON.stringify(props.home) !== '{}' && <Header navList={props.home.navList}/>}
      </div>
    )
  }
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