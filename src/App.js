import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Template/vendors/mdi/css/materialdesignicons.min.css'
import './Template/css/style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Categories from './Components/Categories/Index';
import SubHeader from './Components/SubHeader';

const App = () => {

  return (
    <div className="container-scroller">
      <Header/>
      <div className="container-fluid page-body-wrapper">
        <Sidebar/>
        <div className="main-panel">
          <div className="content-wrapper">
            <SubHeader/>
            <Banner/>
            <Categories/>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App;