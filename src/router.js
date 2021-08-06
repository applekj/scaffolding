import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home'
import PublicLayout from '@/src/component/layout'

const proRouter = () => {
    return (
        <>
            <Route exact path='/' component={Home} />
        </>
    )
}

export default PublicLayout(proRouter)