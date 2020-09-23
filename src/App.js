import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Template/vendors/mdi/css/materialdesignicons.min.css'
import './Template/css/style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Categories from './Components/Categories/Index';
import Product from './Components/Product/Index';

const App = () => {

  return (
    <Router>
      <div className="container-scroller">
        <Header/>
        <div className="container-fluid page-body-wrapper">
          <Sidebar/>
          <div className="main-panel">
            <div className="content-wrapper">
              <Switch>
                <Route exact path ={["/"]} component={ Categories }/>
                <Route exact path ={["/product"]} component={ Product }/>
              </Switch>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;