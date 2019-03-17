import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {
  render() {
    const {
      data,
      isMine,
    } = this.props;

    return (
      <div className={[
        'message',
        `${isMine ? 'mine' : ''}`,

      ].join(' ')}>
        {
          
            
        }

        <div className="bubble-container">
          <div className="bubble">
            { data.message }
          </div>
        </div>
      </div>
    );
  }
}