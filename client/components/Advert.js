import React from 'react'
import withStyle from '../hoc/withStyle'
import styles from '../static/style/components/Advert.css'
import { Divider } from 'antd'
const Advert = () => {
    return (
        <div className={styles['ad-div']}>
            <Divider >工作经历</Divider>
            <div>
                滴滴 2021.06-至今
            <div>
                    负责滴滴出行小程序的开发
                    重点项目：1.负责新版个人中心的开发，优化个人中心图片加载，优化微信体验评分
                    2.负责首页和打车页面的需求。
                    3.参与开源项目mpx的建设，新增mpx-fetch的参数校验功能，mpx转快手小程序的建设
                    4.熟练使用vue3+node+squelize进行后端接口的开发参与小程序上线平台的建设，获取主数据通过cookie和egg中间件进行权限校验
                    5.参与tailwind改善小程序包体积的需求，使用postcss提取主包和分包的公共样式
                    6.参与mpx-jest的开发，修改mpx文件代码覆盖率问题
                    7.完善小程序代码构建ci流程，在不同的编译错误时发送不同的系统提示消息
            </div>
            </div>
            <div>
                美团 2020.07-2021.05
            <div>
                    负责数据可视化开发，
                    重点项目：1.在d3，g2和g6的基础上开发有向五环图和伸缩树图。
                    2.开发通用的全屏指令，应用在各种情景。
                    3.熟悉低代码平台，解析schema信息进行渲染。
            </div>
            </div>
            <div>
                知乎 2019.11-2020.03
            <div>
                    使用react-hooks实现移动端开发
                    重点项目：1.使用node完成个人详情页失效的跳转页面
                    2.海外认证实名制 使用context控制未实名制用户进行写操作
            </div>
            </div>
            <div>
                腾讯 2019.07-10：
            <div>
                    使用ts+react+webpack开发控制台系统
                    重点项目：1.使用ts重构项目，练掌握使用ts和react结合
            </div>
            </div>
            <div>
                小米 2019.05-07：
            <div>
                    使用react+redux开发中台系统
                    重点项目:1.实现登陆配置中心的权限设置。使用redux实现根据路由信息的不同分 配权限。
            </div>
            </div>
        </div>
    )
}

export default withStyle(styles)(Advert)