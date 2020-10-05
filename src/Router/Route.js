import Categories from '../Components/Categories/Index';
import Product from '../Components/Product/Index';
import Supplier from '../Components/Supplier/Index';
import Order from '../Components/Order/Index';
import Dashboard from '../Components/Dashboard';
import Create from '../Components/Categories/Create';

const sidebar = [
    {
      title: 'Dashboard',
      component: Dashboard,
      route: '/',
      icon: 'mdi mdi-home menu-icon',
      subMenu: []
    },
    {
      title: 'Categories',
      component: Categories,
      route: '/categories',
      icon: 'mdi mdi-table menu-icon',
      subMenu: [{
        title: 'Create',
        component: Create,
        route: '/categories/create',
      }]
    },
    {
      title: 'Product',
      component: Product,
      route: '/product',
      icon: 'mdi mdi-table menu-icon',
      subMenu: []
    },
    {
      title: 'Order',
      component: Order,
      route: '/order',
      icon: 'mdi mdi-database menu-icon',
      subMenu: []
    }
  ];

  export { sidebar }