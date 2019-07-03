import AddCategory from '../views/about/AddCategory'
import AddAbout from '../views/about/AddAbout'
import Categorys from '../views/about/Categorys'
import Index from '../views/about/Index'
import Abouts from '../views/about/Abouts'

export default {
    path: '/about',
    name: 'AboutIndex',
    component: Index,
    children:[
        {
            path: '/about/addCategory',
            name: 'AboutAddCategorys',
            component: AddCategory,
        },
        {
            path: '/about/addAbout',
            name: 'AddAbout',
            component: AddAbout,
        },
        {
            path: '/about/categorys',
            name: 'AboutCategorys',
            component: Categorys,
        },
        {
            path: '/about/abouts',
            name: 'Abouts',
            component: Abouts,
        }
    ]
}