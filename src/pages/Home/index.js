import React, { Component } from 'react';
import './index.less'

export default class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div style={{ padding: '20px 20px 0' }}>
                <div className='dices'>
                    <div className='dice-1'>
                        <div className='num'></div>
                    </div>
                    <div className='dice-2'>
                        <div className='num'></div>
                    </div>
                    <div className='dice-3'>
                        <div className='num'></div>
                    </div>
                    <div className='dice-4'>
                        <div className='num'></div>
                        <div className='num'></div>
                    </div>
                    <div className='dice-5'>
                        <div className='num'></div>
                        <div className='num'></div>
                    </div>
                    <div className='dice-6'>
                        <div className='num'></div>
                        <div className='num'></div>
                        <div className='num'></div>
                    </div>
                    <div className='dice-7'>
                        <div>
                            <div className='num'></div>
                            <div className='num'></div>
                        </div>
                        <div>
                            <div className='num'></div>
                        </div>
                        <div>
                            <div className='num'></div>
                            <div className='num'></div>
                        </div>
                    </div>
                </div>
                <div className='dices' style={{ marginTop: '10px' }}>
                    <div className='dice-8'>
                        <div className='num'></div>
                    </div>
                    <div className='dice-9'>
                        <div className='num'></div>
                    </div>
                    <div className='dice-10'>
                        <div className='num'></div>
                    </div>
                    <div className='dice-11'>
                        <div className='num'></div>
                        <div className='num'></div>
                    </div>
                    <div className='dice-12'>
                        <div className='num'></div>
                        <div className='num'></div>
                    </div>
                    <div className='dice-13'>
                        <div>
                            <div className='num'></div>
                            <div className='num'></div>
                        </div>
                        <div>
                            <div className='num'></div>
                            <div className='num'></div>
                        </div>
                    </div>
                    <div className='dice-14'>
                        <div>
                            <div className='num'></div>
                            <div className='num'></div>
                            <div className='num'></div>
                        </div>
                        <div>
                            <div className='num'></div>
                            <div className='num'></div>
                            <div className='num'></div>
                        </div>
                    </div>
                </div>
                <div className='dices' style={{ marginTop: '10px' }}>
                    <div className='dice-15'>
                        <div className='num'></div>
                    </div>
                    <div className='dice-16'>
                        <div className='num'></div>
                    </div>
                    <div className='dice-17'>
                        <div className='num'></div>
                    </div>
                    <div className='dice-18'>
                        <div className='num'></div>
                        <div className='num'></div>
                    </div>
                    <div className='dice-19'>
                        <div className='num'></div>
                        <div className='num'></div>
                    </div>
                    <div className='dice-20'>
                        <div className='num'></div>
                        <div className='num'></div>
                    </div>
                    <div className='dice-21'>
                        <div>
                            <div className='num'></div>
                            <div className='num'></div>
                        </div>
                        <div>
                            <div className='num'></div>
                        </div>
                        <div>
                            <div className='num'></div>
                            <div className='num'></div>
                            <div className='num'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}