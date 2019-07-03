import AddCategory from '../views/product/AddCategory'
import AddProduct from '../views/product/AddProduct'
import Categorys from '../views/product/Categorys'
import Index from '../views/product/Index'
import Product from '../views/product/Products'

export default {
    path: '/product',
    name: 'ProductIndex',
    component: Index,
    children:[
        {
            path: '/product/addCategorys',
            name: 'ProductAddCategorys',
            component: AddCategory,
        },
        {
            path: '/product/addProduct',
            name: 'AddProduct',
            component: AddProduct,
        },
        {
            path: '/product/categorys',
            name: 'ProductCategorys',
            component: Categorys,
        },
        {
            path: '/product/products',
            name: 'Products',
            component: Product,
        }
    ]
}