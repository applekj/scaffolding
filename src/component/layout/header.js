import React, { useState, useEffect, useRef } from 'react'
import { Layout, Avatar, Dropdown, Row, Col, Select, Menu, Tooltip, message } from 'antd'
import { connect } from 'react-redux'

const { Header } = Layout
const { Option } = Select

const header = props => {
    return (
        <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#ffffff' }} >
        </Header>
    )
}

export default connect(state => ({ ...state }))(header)