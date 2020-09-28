import React, { Component } from 'react';
import Layout from '../Components/layout/layout';
import classes from './App.css';
import Chatbox from './ChatBox/Chatbox';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Chatbox />
        </Layout>
      </div>
    );
  }
}

export default App;
