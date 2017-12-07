import React, { Component } from 'react';
import CardApp from './CardApp';
import CardButton from './CardButton';

class App extends Component {
  render() {
    return (
      <div>
        <h2>React Flash Cards</h2>
        <CardApp />
        <CardButton />
      </div>
    );
  }
}

export default App;
