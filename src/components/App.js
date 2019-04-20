import React, { Component } from 'react';
import './App.css';
import Header from './header';
import ContentContainer from './contentContainer';

class App extends Component {
  
  render() {
    return (
      <div className="stackline-application">
        <Header />
		<ContentContainer />
      </div>
    );
  }
}

export default App;
