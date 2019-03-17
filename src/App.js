import React, { Component } from 'react';
import './App.css';


// Ref demos
// import Ref from './refs/oldRefs'
// import Ref from './refs/newRefsCreateRef'
// import Ref from './refs/newRefsCallback'

// Controlled Component and Uncontrolled Component
import Demo1 from './controlled'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Ref /> */}
        <Demo1 />
      </div>
    );
  }
}

export default App;
