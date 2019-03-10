import React, { Component } from 'react';
import './App.css';

// import Ref from './refs/oldRefs'
// import Ref from './refs/newRefsCreateRef'
import Ref from './refs/newRefsCallback'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ref />
      </div>
    );
  }
}

export default App;
