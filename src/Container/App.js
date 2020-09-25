import React, { Component } from 'react';
import Layout from '../Components/layout/layout';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout/>
      </div>
    );
  }
}

export default App;
