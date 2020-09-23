import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const SidebarMain = (props) => {
  return (
    <li className="nav-item">
    <Link to={props.data.route} className="nav-link">
        <i className={props.data.icon}></i>
        <span className="menu-title">{ props.data.title }</span>
    </Link>
  </li>
  );
}

const Sidebar = () => {
  var menu = [
    {
      title: 'Dashboard',
      route: '/',
      icon: 'mdi mdi-home menu-icon'
    },
    {
      title: 'Categories',
      route: '/',
      icon: 'mdi mdi-table menu-icon'
    },
    {
      title: 'Product',
      route: '/product',
      icon: 'mdi mdi-table menu-icon'
    },
    {
      title: 'Supplier',
      route: '/',
      icon: 'mdi mdi-table menu-icon'
    },
    {
      title: 'Order Management',
      route: '/',
      icon: 'mdi mdi-database menu-icon'
    },
  ];

  const menuList = (data) => {
    console.log(data)
    return data.map((val, key) => {
      return <SidebarMain data={val} key={key}/>
    })
  };

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        { menuList(menu) }
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
            <i className="mdi mdi-settings menu-icon"></i>
            <span className="menu-title">Settings</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar;