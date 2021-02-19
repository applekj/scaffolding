import React, { useEffect, useReducer } from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd'
import axios from 'axios'
import { initState,loginReducer} from './pageReducer';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Demo = () => {
    const [state, dispatch] = useReducer(loginReducer, initState)
    const { username, password, btnLoading, msg, btnDisabled } = state;

    useEffect(() => {
        if (msg) {
            message.success(msg)
        }
    }, [msg])

    const onFinish = values => {
        dispatch({ type: 'login' })
        login()
    }
    const onFinishFailed = errorInfo => { console.log(errorInfo) }

    const login = async () => {
        try {
            const { data, ...other } = await axios.get('/api/login')
            if (data.code == 0) {
                dispatch({ type: 'success', payload: { msg: data.message } })
            }
        } catch (error) {
            dispatch({ type: 'error', payload: { msg: '登录失败' } })
        }
    }

    return (
        <div style={{ padding: '20px 20px 0' }}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{ width: '600px' }}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>记住账号</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={btnLoading} disabled={btnDisabled} >
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Demo