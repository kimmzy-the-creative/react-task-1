import React, {Fragment, useState, Component} from 'react';
import Header from './components/Layout/Header.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProductFetch from './components/Layout/ProductFetch';

class App extends Component {
  render() {
    return(
      <Fragment>
        <Header/>
        <ProductFetch/>
      </Fragment>
    );
}
}
export default App;
