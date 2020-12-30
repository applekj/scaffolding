import React, { useState } from 'react'
import { render } from 'react-dom'
import Layout from './components/Layout'
// import 'antd/dist/antd.css';

function App() {
    return <Layout />
}

render(<App />, document.getElementById('root'))
