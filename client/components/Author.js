import React from 'react'
import {Avatar,Divider} from 'antd'
import withStyle from '../hoc/withStyle'
import styles from '../static/style/components/Author.css'
const Author =()=>{
    return (
        <div className={styles["author-div"]}>
            <div> <Avatar size={100} src={'https://wx3.sinaimg.cn/mw690/006Ul03Sly1gbbhm4knc0j31o0280e81.jpg'} /></div>
            <div className={styles["author-introduction"]}>
               技术和才艺于一身的程序媛，专注于WEB和移动前端开发。
                <Divider >社交账号</Divider>
                <Avatar size={28} icon="github" className={styles["account"]}  />
                <Avatar size={28} icon="qq"  className={styles["account"]} />
                <Avatar size={28} icon="wechat"  className={styles["account"]}  />

            </div>
        </div>
    )

}

export default withStyle(styles)(Author)