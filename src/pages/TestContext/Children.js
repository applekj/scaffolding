import React from 'react'
import { Button, Table } from 'antd'
import ThemedButton from './Son'
import { columns, DataContext } from './pageConfig'

const Toolbar = props => {
    return (
        <>
            <div style={{ marginBottom: '20px' }}>
                <ThemedButton  {...props} />
            </div>
            <Table columns={columns} dataSource={props.datas} />
        </>
    )
}

const AddContext = props => {
    return (
        <DataContext.Consumer>
            {({ datas, changeDatas }) => {
                return <Toolbar {...props} datas={datas} />
            }}
        </DataContext.Consumer>
    )
}

export default AddContext