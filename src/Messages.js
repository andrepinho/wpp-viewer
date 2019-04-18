import React, { Component } from 'react';
import './Messages.css';
import MessageItem from './MessageItem';

class Messages extends Component {
  render() {
    return (
      <div className="Messages">
        {console.log(this.props.data)}
        {this.props.data.messages.map(message => {
          return <MessageItem data={message} names={this.props.data.names}/>;
        })}
      </div>
    );
  }
}

export default Messages;
