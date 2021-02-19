import React, { useState, useEffect, Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Addrw from '@/src/common/Addrw'
import demand from '@/src/common/DemandLoadComponent'

const ProjectRouter = (props) => {
    const Home = demand(() => import('./pages/Home'))
    const TextContext = demand(() => import('./pages/TestContext'))
    const UseReducer = demand(() => import('./pages/UseReducer'))
    return (
        <>
            <Route path='/' exact component={Home} />
            <Route path='/context' exact component={TextContext} />
            <Route path='/useReducer' exact component={UseReducer} />
        </>
    )
}

const AddRW = Addrw(ProjectRouter)

render(<AddRW />, document.getElementById('root'))
