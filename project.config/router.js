export default {
    routers: [
        {
            router: '/',
            name: '首页'
        },
        {
            router: '/react',
            name: 'React相关',
            children: [
                {
                    router: '/context',
                    name: 'context'
                },
                {
                    router: '/useReducer',
                    name: 'useReducer'
                },
                {
                    router: '/dataManager',
                    name: '数据状态管理'
                },
                {
                    router: '/reduxsaga',
                    name: 'redux-saga原理'
                }
            ]
        },
        {
            router: '/KAP',
            name: 'KAP',
            children: [
                {
                    router: '/css',
                    name: 'css类'
                },
                {
                    router:'/antwocode',
                    name:'解析二维码'
                },
            ]
        },
    ]
}