import React, { useState } from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import axios from 'axios'
import Chart from '../Chart'
import createState from 'createState'

const conditions = [
    {
        name: 'con1',
        title: '条件1',
        rules: [
            {
                required: true,
                message: '请输入条件1'
            }
        ]
    },
    {
        name: 'con2',
        title: '条件2',
        rules: [
            {
                required: true,
                message: '请输入条件2'
            }
        ]
    },
    {
        name: 'con3',
        title: '条件3',
        rules: [
            {
                required: true,
                message: '请输入条件3'
            }
        ]
    }
]

const DataManager = props => {
    const [form] = Form.useForm()
    const [btnLoading, setBtnLoading] = useState(false)
    const { state, dispatch } = createState.useContainer()

    const getData = async params => {
        try {
            const {data,...other} = await axios.post('/api/getChartData', params)
            if(data){
                setBtnLoading(false)
                dispatch({
                    type:'add',
                    payload: { chartData: data.data }
                })
                // setState({chartData:data.data})
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{padding:'20px 20px 0'}}>
            <Form
                form={form}
                onFinish={value => {
                    setBtnLoading(true)
                    getData(value)
                }}
                style={{ padding: '20px 20px 0' }}
            >
                <Row gutter={16}>
                    {conditions.map((item, index) => {
                        return (
                            <Col span={6} key={index}>
                                <Form.Item
                                    name={item.name}
                                    label={item.title}
                                    rules={item.rules}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        )
                    })}
                    <Col span={6} >
                        <Button type='primary' htmlType='submit' loading={btnLoading} >查询</Button>
                    </Col>
                </Row>
            </Form>
            <Chart />
        </div>
       
    )
}

export default DataManager