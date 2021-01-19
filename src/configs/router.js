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
                    router: '/caleTable',
                    name: 'react 状态提升'
                },
                {
                    router: '/rh',
                    name: 'react hooks'
                },
                {
                    router: '/hc',
                    name: '高阶组件'
                },
                {
                    router: '/ref',
                    name: 'ref的使用'
                },
                // {
                //     router: '/pdf',
                //     name: '渲染pdf'
                // },
                {
                    router: '/rv',
                    name: '虚拟滚动'
                },
                {
                    router: '/excel',
                    name: '渲染excel'
                },
                {
                    router: '/context',
                    name: 'context的骚操作'
                },
            ]
        },
        {
            router: '/b',
            name: '测试'
        },

        {
            router: '/layout',
            name: '页面布局'
        },
        {
            router: '/css',
            name: 'css盒模型'
        },
        {
            router: '/dom',
            name: 'DOM相关'
        },
        {
            router: '/rotate',
            name: '旋转相册'
        },
        {
            router: '/http',
            name: 'http类'
        },
        {
            router: '/renderTree',
            name: '树的渲染'
        }
    ]
}