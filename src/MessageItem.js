import React, { Component } from 'react';
import './Messages.css';
import './App.css';


class MessageItem extends Component {
  render() {
    return (
      <div className={`MessageItem ${this.props.names[0] === this.props.data.name ? 'one' : 'two'}`}>
        <div>
          <span className='MessageItem-name'>{this.props.data.name}</span>
        <div className='MessageItem-message'>{this.props.data.message}</div>
        <span className='MessageItem-info'>
          {this.props.data.date}
          {this.props.data.time}
        </span>
        </div>
      </div>
    );
  }
}

export default MessageItem;




