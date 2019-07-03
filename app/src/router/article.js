import AddCategory from '../views/article/AddCategory'
import AddActicle from '../views/article/AddArticle'
import Categorys from '../views/article/Categorys'
import Index from '../views/article/Index'
import Articles from '../views/article/Articles'

export default {
    path: '/article',
    name: 'ArticleIndex',
    component: Index,
    children:[
        {
            path: '/article/addCategory',
            name: 'ArticleAddCategorys',
            component: AddCategory,
        },
        {
            path: '/article/AddActicle',
            name: 'AddActicle',
            component: AddActicle,
        },
        {
            path: '/article/categorys',
            name: 'ProductCategorys',
            component: Categorys,
        },
        {
            path: '/article/articles',
            name: 'Articles',
            component: Articles,
        }
    ]
}