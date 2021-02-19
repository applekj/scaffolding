import React, { useState, useEffect, Component } from 'react'
import { Layout, Menu } from 'antd'
import routerConfig from '@/project.config/router'
import { PieChartOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import './index.less'

const { routers } = routerConfig
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const AddRW = WrapComponent => () => {
    const Test = (props) => {
        const [activeKeys, setActiveKeys] = useState([props.history.location.pathname])
        const renderMenuItem = (datas = [], key = 0) => {
            return datas.map((item, index) => {
                if (item.children) {
                    return <SubMenu
                        key={`${key}-${index}`}
                        icon={<PieChartOutlined />}
                        title={<span>{item.name}</span>}
                    >
                        {renderMenuItem(item.children, key + 1)}
                    </SubMenu>
                }
                return <Menu.Item
                    className={activeKeys[0] == item.router ? 'ant-menu-item-selected' : ''}
                    key={`${key}-${index}`}
                    icon={<PieChartOutlined />}
                    onClick={() => {
                        setActiveKeys([item.router])
                        props.history.push({ pathname: item.router})
                    }}
                >
                    {item.name}
                </Menu.Item>
            })
        }
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible>
                    <div className="logo" />
                    <Menu theme="dark" selectedKeys={activeKeys} mode="inline">
                        {renderMenuItem(routers)}
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ position: 'relative' }}>
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <WrapComponent {...props} />
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
    const Mid = withRouter(Test)
    return <Router><Mid /></Router>
}

export default AddRW
