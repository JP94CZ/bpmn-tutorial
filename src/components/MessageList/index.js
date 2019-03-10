import React, { Component } from 'react';
import dialogue from 'C:/zlo/react project/bpmn-tutorial/src/assets/dialogue.json';
import Toolbar from '../Toolbar';
import Message from '../Message';
import moment from 'moment';


import './MessageList.css';

const MY_USER_ID = 'apple';

export default class MessageList extends Component {
  constructor(props) {
        super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.getMessages();
  }

  getMessages = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        messages: [
          {
            id: 1,
            author: 'apple',
            message: dialogue.pavelNaplava.a,
            timestamp: new Date().getTime()
          },
          {
            id: 2,
            author: 'orange',
            message: dialogue.pavelNaplava.b,
            timestamp: new Date().getTime()
          }
        ]
      };
    });
  }

  renderMessages() {
    let i = 0;
    let messageCount = this.state.messages.length;
    let messages = [];

    while (i < messageCount) {
      let previous = this.state.messages[i - 1];
      let current = this.state.messages[i];
      let next = this.state.messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      messages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return messages;
  }

  render() {
    return(
      <div className="message-list">
        <Toolbar
          convName = {this.props.convName}
        />

        <div className="message-list-container">{this.renderMessages()}</div>

      </div>
    );
  }
}