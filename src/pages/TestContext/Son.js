import React, { Component, useState } from 'react'
import { Button, Table } from 'antd'
import { DataContext, columns } from './pageConfig'
import axios from 'axios'

const SearchButton = props => {
    const [btnLoading, setBtnLoading] = useState(false)
    const { changeDatas } = props

    const getData = async () => {
        setBtnLoading(true)
        try {
            const { data, ...other } = await axios.get('/api/address')
            changeDatas({ datas: data, changeDatas })
            setBtnLoading(false)
        } catch (error) {
            console.log(error, '--------')
        }
    }

    return (
        <Button type='primary' loading={btnLoading} onClick={() => { getData() }}>查询</Button>
    )
}

const AddContext = props => {
    return (
        <DataContext.Consumer>
            {({ datas, changeDatas }) => {
                return <SearchButton {...props} changeDatas={changeDatas} />
            }}
        </DataContext.Consumer>
    )
}

export default AddContext

// export default class ThemedButton extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             text: 'haha'
//         }
//     }
//     static contextType = DataContext

//     static getDerivedStateFromProps(nextProps, state) {
//         // console.log(nextProps, state)
//         return {}
//     }

//     render() {
//         return (
//             <Button type='primary'>查询</Button>
//         )
//     }
//     // render() {
//     //     console.log(this.context)
//     //     return (
//     //         <Button type='primary'>
//     //             <ThemeContext.Consumer>
//     //                 {({ theme }) => (
//     //                     <span>{theme}</span>
//     //                 )}
//     //             </ThemeContext.Consumer>
//     //         </Button>
//     //     )
//     // }
// }