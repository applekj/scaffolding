/* 
    如何引入effect实现redux-saga hook版？？？？？
 */
import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import axios from 'axios'
import createState from 'createState'

const ReduxSagaTheory = props => {
    const { state, dispatch } = createState.useContainer()
    const [loading, setLoading] = useState(true)

    // const getData = async params => {
    //     try {
    //         const { data, ...other } = await axios.get('/api/address', { params })
    //         if (data) {
    //             setLoading(false)
    //             dispatch({
    //                 type: 'add',
    //                 payload: { tableData: data }
    //             })
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    function* getData() {
        const params = yield { name: '123' }
        const result = yield axios.get('/api/address', { params })
        return result
    }

    const task = saga => {
        const sa = saga()
        function next(args){
            const result = sa.next(args)
            const effect = result.value
            runEffect(result.value,next)
        }
        next()
    }

    useEffect(() => {
        if (loading) {
            const g = getData()
            g.next().value.then(result => {
                const { data, ...other } = result
                if (data) {
                    setLoading(false)
                    dispatch({
                        type: 'add',
                        payload: { tableData: data }
                    })
                }
            })
        }
    }, [loading])

    return (
        <div
            style={{ padding: '20px 20px 0' }}
        >
            <Button type='primary' loading={loading} onClick={() => { setLoading(true) }}>查询</Button>
        </div>
    )
}

export default ReduxSagaTheory