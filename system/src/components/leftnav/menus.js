export default [
    {
        path: '/home',
        name:'后台首页',
        icon:'el-icon-s-home'
    },
    {
        path: '/config',
        name:'全局配置',
        icon:'el-icon-s-home'
    },
    {
        path: '/blog',
        name:'博客管理',
        icon:'el-icon-s-home',
        children: [
            {
                path: '/blog/blog_list',
                name:'文章列表',
                icon:'el-icon-help'
            },
            {
                path: '/blog/blog_add',
                name:'添加文章',
                icon:'el-icon-help',
            },
            {
                path: '/blog/blog_tag',
                name:'标签管理',
                icon:'el-icon-help',
            }
        ]
    },
]
