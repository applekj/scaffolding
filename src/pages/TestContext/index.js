import React, { useState, useEffect } from 'react'
import Toolbar from './Children'
import { DataContext } from './pageConfig';
const { Provider } = DataContext

const TestContext = props => {
    const [datas, setDatas] = useState({ datas: [], changeDatas: () => { } })
    return (
        <div style={{ padding: '20px 20px 0' }}>
            <Provider value={{ ...datas, changeDatas: datas => setDatas(datas) }}>
                <Toolbar {...props}/>
            </Provider>
        </div >
    )
}

// class App extends React.Component {
//     render() {
//         return (
//             <div style={{ padding: '20px 20px 0' }}>
//                 <Provider value={{ theme: 'first value' }}>
//                     <Toolbar />
//                 </Provider>
//             </div>
//         )
//     }
// }

export default TestContext