import React, { Component } from 'react';
import './css/App.css';
import Layout from './containers/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout >
          This is the application
        </Layout>
      </div>
    );
  }
}

export default App;
