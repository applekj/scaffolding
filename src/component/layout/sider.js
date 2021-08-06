import React, { useState, useEffect } from 'react'
import { Menu, Layout } from 'antd'
import routerConfig from '@/project.config/router'
import { PieChartOutlined } from '@ant-design/icons';
import panda from './images/panda.svg'

const { routers } = routerConfig
const { Sider } = Layout

const sider = props => {
    const [collapsed, setCollapsed] = useState(false)
    const [expand, setExpand] = useState(false)
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
                key={`${key}-${index}`}
                icon={<PieChartOutlined />}
                // style={activeKeys[0] == item.router ? { backgroundColor: '#666', borderRadius: '5px' } : {}}
                className={activeKeys[0] == item.router ? 'active' : ''}
                onClick={() => {
                    setActiveKeys([item.router])
                    props.history.push({ pathname: item.router })
                }}
            >
                {item.name}
            </Menu.Item>
        })
    }

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            onMouseLeave={() => {
                if (expand) {
                    setCollapsed(expand)
                }
            }}
            onMouseEnter={() => {
                if (expand) {
                    setCollapsed(!expand)
                }
            }}
        >
            <div className='logo' >
                <div>
                    <img src={panda} style={{width:'40px'}} />
                </div>
                {!collapsed && <div className='switch' style={{ justifyContent: !expand ? 'flex-end' : 'flex-start' }} onClick={() => {
                    setExpand(!expand)
                }} >
                    <div className='switch-item'></div>
                </div>}
            </div>
            <Menu theme="dark" selectedKeys={activeKeys} mode="inline">
                {renderMenuItem(routers)}
            </Menu>
        </Sider>
    )
}

export default sider