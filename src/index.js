import React, { useState, useEffect, Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Addrw from '@/src/common/Addrw'
import demand from '@/src/common/DemandLoadComponent'

const ProjectRouter = () => {
    const Home = demand(() => import('./pages/Home'))
    const TextContext = demand(() => import('./pages/TestContext'))
    const UseReducer = demand(() => import('./pages/UseReducer'))
    const DataManager = demand(() => import('./pages/DataManager'))
    const Css = demand(() => import('./pages/Css'))
    const Antwocode = demand(() => import('./pages/Antwocode'))
    const ReduxSagaTheory = demand(() => import('./pages/ReduxSagaTheory'))

    return (
        <>
            <Route path='/' exact component={Home} />
            <Route path='/context' exact component={TextContext} />
            <Route path='/useReducer' exact component={UseReducer} />
            <Route path='/dataManager' exact component={DataManager} />
            <Route path='/css' exact component={Css} />
            <Route path='/antwocode' exact component={Antwocode} />
            <Route path='/reduxsaga' exact component={ReduxSagaTheory} />
        </>
    )
}

const AddRW = Addrw(ProjectRouter)

render(<AddRW />, document.getElementById('root'))
