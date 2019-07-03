import Vue from 'vue'
import Router from 'vue-router'
import Content from '../views/Content.vue'
import Login from '../views/Login.vue'
import Index from '../views/index/Index.vue'
import Config from '../views/index/config'
import ProductRouter from './product'
import ArticleRouter from './article'
import AboutRouter from './about'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Content',
            component: Content,
            children:[
                {
                    path: '/index',
                    name: 'Index',
                    component: Index,
                },
                {
                    path: '/config',
                    name: 'Config',
                    component: Config,
                },
                ProductRouter,
                ArticleRouter,
                AboutRouter
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },

    ]
})
