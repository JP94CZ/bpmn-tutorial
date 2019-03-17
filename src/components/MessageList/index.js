import React, { Component } from 'react';
import dialogue from '../../assets/dialogue.json';
import Toolbar from '../Toolbar';
import Message from '../Message';
import './MessageList.css';
import ReplyHolder from '../ReplyHolder';

export default class MessageList extends Component {


  getDerivedStateFromProps(props, state) {
    this.getMessages();
  }

  getMessages = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        messages: dialogue[this.props.convDataSource]
      };
    });
  }

  renderMessages() {
    let i = 0;
    let messageCount = dialogue[this.props.convDataSource].length;
    let messages = [];
    let currentReplies = 0;
    let repliesChosen = this.props.conversationProgress;
    let repliesMade = this.props.conversationProgress.length;
    let followingMessage = null;

    while (i < messageCount) {
      let current = dialogue[this.props.convDataSource][i];
      if ("undefined" === typeof (current["replies"])) {
        if (followingMessage === null || current.id === followingMessage) {
          messages.push(
            <Message
              key={i}
              isMine={false}
              data={current}
            />
          );
          followingMessage = current.followingId;
        }

      } else {
        if (repliesMade > currentReplies) {
          let activeReply = current.replies[repliesChosen[currentReplies]];
          messages.push(
            <Message
              key={i}
              isMine={true}
              data={activeReply}
            />
          );
          currentReplies++;
          followingMessage = activeReply.followingId;
        }
        else {
          messages.push(<ReplyHolder
            replies = {current.replies}
            clicked={this.props.reply} />);
          //tady budu renderovat policka s odpovedmi
          break;
        }
      }
      i += 1;
    }
    return messages;
  }

  render() {
    return (
      <div className="message-list">
        <Toolbar
          convName={this.props.convName}
        />

        <div className="message-list-container">{this.renderMessages()}</div>


      </div>
    );
  }
}