import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

import './css/App.css';
import 'bulma/css/bulma.css'

import Layout from './containers/Layout';
import MainHeader from './components/mainheader';
import Loader from './components/loader';
// import Card from './components/card';

library.add(faIgloo)

class App extends Component {
  componentDidMount(){
    const loader = document.getElementById('bounce')
    
    window.onload = () => {
      setTimeout(()=>{ 
        loader.style.display = "none";
      },2000)
    }
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Loader id="bounce"/>
          <MainHeader />
        </Layout>
      </div>
    );
  }
}

export default App;
