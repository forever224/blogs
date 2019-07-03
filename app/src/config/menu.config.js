export default [
    {
        path: '/index',
        name: '后台首页',
        icon: 'el-icon-service'
    },
    {
        path: '/config',
        name: '全局配置',
        icon: 'el-icon-service'
    },
    {
        name: '资讯频道',
        icon: 'el-icon-edit-outline',
        path:'/article',
        children: [
            {
                path: '/article/articles',
                name: '文章列表',
                icon: 'el-icon-tickets',
            },
            {
                path: '/article/AddActicle',
                name: '文章录入',
                icon: 'el-icon-tickets',
            },
            {
                path: '/article/categorys',
                name: '分类列表',
                icon: 'el-icon-tickets',
            },
            {
                path: '/article/addCategory',
                name: '分类录入',
                icon: 'el-icon-tickets',
            }

        ]
    },
    {
        name: '产品频道',
        path:'/product',
        icon: 'el-icon-edit-outline',
        children: [
            {
                path: '/product/products',
                name: '产品列表',
                icon: 'el-icon-tickets',
            },
            {
                path: '/product/addProduct',
                name: '产品录入',
                icon: 'el-icon-tickets',
            },
            {
                path: '/product/categorys',
                name: '分类管理',
                icon: 'el-icon-tickets',
            },
            {
                path: '/product/addCategorys',
                name: '分类录入',
                icon: 'el-icon-tickets',
            }

        ]
    },
    {
        name: '公司信息',
        icon: 'el-icon-edit-outline',
        path:'/about',
        children: [
            {
                path: '/about/abouts',
                name: '文章列表',
                icon: 'el-icon-tickets',
            },
            {
                path: '/about/addAbout',
                name: '文章录入',
                icon: 'el-icon-tickets',
            },
            {
                path: '/about/categorys',
                name: '分类列表',
                icon: 'el-icon-tickets',
            },
            {
                path: '/about/addCategory',
                name: '分类录入',
                icon: 'el-icon-tickets',
            }

        ]
    }
]
