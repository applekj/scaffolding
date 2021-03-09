import React, { Component, useState, useEffect } from 'react';

const asyncComponent = (importComponent) => (props) => {
    const [C, setC] = useState(null)
    const getC = async () => {
        const { default: component } = await importComponent()
        setC(() => component)
    }
    useEffect(() => {
        getC()
    })
    if (C) {
        return <C {...props} />
    } else {
        return null
    }
    // return class AsyncComponent extends Component {
    //     constructor(props) {
    //         super(props)
    //         this.state = {
    //             component: null
    //         }
    //     }
    //     async componentDidMount() {
    //         const { default: component } = await importComponent();
    //         this.setState({
    //             component
    //         })
    //     }
    //     render() {
    //         const C = this.state.component
    //         return C ? <C {...this.props} /> : null
    //     }
    // }
}

export default asyncComponent