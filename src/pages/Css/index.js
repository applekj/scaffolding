import React from 'react'
import { Row, Col, Divider } from 'antd'
import './index.less'

const Css = props => {
    return (
        <div style={{ padding: '20px 20px 0' }}>
            <Divider orientation='left' >设置元素透明度的两种方式及区别：rgba()、opactiy</Divider>
            <Row gutter={32}>
                <Col span={6}>
                    <div className='opactiy-one div'>背景色不透明，文字不透明</div>
                </Col>
                <Col span={6}>
                    <div className='opactiy-two div'>背景色半透明，文字不透明</div>
                </Col>
                <Col span={6}>
                    <div className='opactiy-tre div'>背景色不透明，文字不透明</div>
                </Col>
                <Col span={6}>
                    <div className='opactiy-for div'>背景色半透明，文字半透明</div>
                </Col>
            </Row>
            <Divider orientation='left' >总结：rgba()仅仅作用于元素的颜色和背景色，而opactiy具有继承性，既作用元素本身，也影响子元素</Divider>
        </div>
    )
}

export default Css