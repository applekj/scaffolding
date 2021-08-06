import React from 'react'
import { Layout } from 'antd'
import PubSider from './sider'
import PubHeader from './header'
import './index.scss'

const { Content, Footer } = Layout

const PublicLayout = WrapComponent => {
    return props => {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <PubSider {...props} />
                <Layout className="site-layout" style={{ position: 'relative' }}>
                    <PubHeader  {...props} />
                    <Content className='site-layout-background' style={{ padding: '20px 20px 0', minHeight: 280 }}>
                        <WrapComponent {...props} />
                    </Content>
                    <Footer className='footer'>
                        <span className="copyright">
                            {" Copyright © "} 
                            <a target="_blank" href="https://panda-water.cn">熊猫智慧水务</a>
                            {" 2021 All Rights Reserved "}
                            <a target="_blank" id="IndexCaseNumber" href="http://icp.chinaz.com/home/info?host=panda-water.cn">沪ICP备11036640-1</a>
                        </span>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default PublicLayout

