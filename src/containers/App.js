import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      items: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3005/items')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => this.setState({items: data}))
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
