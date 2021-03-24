import React, { useState, useReducer } from 'react'
import { createContainer } from 'unstated-next'

const reducer = (state, { payload }) => {
    return { ...state, ...payload }
}

const State = createContainer((initialState = {}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return { state, dispatch }
})

export default State