import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

import './css/App.css';
import 'bulma/css/bulma.css'

import Layout from './containers/Layout';
import MainHeader from './components/mainheader';
// import Card from './components/card';

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout >
          <MainHeader />
        </Layout>
      </div>
    );
  }
}

export default App;
