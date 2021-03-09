import React, { useState } from 'react'
import { createContainer } from 'unstated-next'

const State = createContainer((initialState = {}) => {
    const [state, setState] = useState(initialState)
    return { state, setState }
})

export default State