import Categories from '../Components/Categories/Index';
import Product from '../Components/Product/Index';
import Supplier from '../Components/Supplier/Index';
import Order from '../Components/Order/Index';

const sidebar = [
    {
      title: 'Dashboard',
      component: Categories,
      route: '/',
      icon: 'mdi mdi-home menu-icon'
    },
    {
      title: 'Categories',
      component: Categories,
      route: '/categories',
      icon: 'mdi mdi-table menu-icon'
    },
    {
      title: 'Product',
      component: Product,
      route: '/product',
      icon: 'mdi mdi-table menu-icon'
    },
    {
      title: 'Suppliers',
      component: Supplier,
      route: '/suppliers',
      icon: 'mdi mdi-table menu-icon'
    },
    {
      title: 'Order',
      component: Order,
      route: '/order',
      icon: 'mdi mdi-database menu-icon'
    },
  ];

  export { sidebar }