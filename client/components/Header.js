import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../static/style/components/Header.css'
import { Row, Col, Menu, Icon } from 'antd'
import withStyle from '../hoc/withStyle'
const navList=[
    {typeName:'日常学习',id:1,icon:'file-markdown'},
    {typeName:'面试面经',id:2,icon:'smile'}
  ]
const Header =(props)=>{
    //跳转到列表页
    const handleClick=(e)=>{
        // if (e.key == 0) {
        //     props.history.push({pathname:'/index'})
        // } else {
        //     props.history.push({pathname:'/list?id=' + e.key})
        // }
    }
    return (
        <div className={styles.header}>
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={13} xl={11}>
                    <span className={styles['header-logo']}>
                        <Link to={'/home'}>
                            无比快乐的嘻嘻嘻嘻嘻嘻哈哈哈
                        </Link>
                    </span>
                    <span className={styles["header-txt"]}>前端小白的博客</span>
                </Col>

                <Col className={styles["memu-div"]} xs={0} sm={0} md={14} lg={10} xl={7}>
                    <Menu
                        style={{backgroundColor:'#FFB6C1'}}
                        mode="horizontal"
                        onClick={handleClick}
                    >
                        <Menu.Item key="0"
                            style={{color:'#fff',paddingLeft:'1rem',paddingRight:'1rem'}}
                        >
                            <Icon type="home" />
                            博客首页
                        </Menu.Item>
                        {
                            navList.map((item) => {
                                return (
                                    <Menu.Item key={item.id} style={{color:'#fff',paddingLeft:'1rem',paddingRight:'1rem'}}>
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
export default withStyle(styles)(Header)