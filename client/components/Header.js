import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../static/style/components/Header.css'
import { Row, Col, Menu, Icon } from 'antd'
import withStyle from '../hoc/withStyle'
const Header =(props)=>{
    //跳转到列表页
    const handleClick=(e)=>{
        if (e.key == 0) {
          this.props.history.push({pathname:'/index'})
        } else {
          this.props.history.push({pathname:'/list?id=' + e.key})
        }
    }
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={13} xl={11}>
                    <span className="header-logo">
                        <Link to={'/index'}>
                            <a> 无比快乐的嘻嘻嘻嘻嘻嘻哈哈哈</a>
                        </Link>
                    </span>
                    <span className="header-txt">前端小白的博客</span>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={10} xl={7}>
                    <Menu
                        mode="horizontal"
                        onClick={handleClick}
                    >
                        <Menu.Item key="0">
                            <Icon type="home" />
                            博客首页
                        </Menu.Item>
                        {
                            props.navList.map((item) => {
                                return (
                                    <Menu.Item key={item.id}>
                                        <Icon type={item.icon} />
                                        {item.typeName} 
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header