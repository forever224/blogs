import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import( '../views/login.vue')
        },
        {
            path: '/',
            name: 'content',
            redirect: 'home',
            component: () => import( '../views/Content.vue'),
            children:[
                {
                    path: 'home',
                    name: 'home',
                    component: () => import( '../views/home/Home.vue')
                },
                {
                    path: 'config',
                    name: 'config',
                    component: () => import( '../views/config/Config.vue')
                },
                {
                    path: 'blog',
                    name: 'blog',
                    redirect: '/blog/blog_list',
                    component: () => import( '../views/blog/Blog.vue'),
                    children:[
                        {
                            path: 'blog_list',
                            name: 'blog_list',
                            component: () => import( '../views/blog/BlogList.vue')
                        },
                        {
                            path: 'blog_add',
                            name: 'blog_add',
                            component: () => import( '../views/blog/BlogAdd.vue')
                        },
                        {
                            path: 'blog_tag',
                            name: 'blog_tag',
                            component: () => import( '../views/blog/BlogTag.vue')
                        },
                    ]
                }
            ]
        }
    ]
})
