import React, { Component } from 'react';
import './App.css';
import messageParser from './messageParser';
import Messages from './Messages'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputData: {
        messages: []
      }
    }
  }

  parse() {
    this.setState({inputData: messageParser(this.refs.textArea.value)})
  }

  render() {
    return (
      <div className="App">
        <textarea ref='textArea'></textarea>
        <button onClick={this.parse.bind(this)}>Vai!</button>
        <Messages data={this.state.inputData}/>
      </div>
    );
  }
}

export default App;
