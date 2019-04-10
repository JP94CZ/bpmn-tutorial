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

    //null for going to the next replies, followingId for getting to the next message, false for ending the conversation
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
          if(followingMessage === false){
            this.props.endConversation();
              break;
          }
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

          if(followingMessage === false){
            this.props.endConversation();
              break;
          }
        }
        else {
          messages.push(<ReplyHolder
            replies = {current.replies}
            clicked={this.props.reply} />);
          
          break;
        }
      }
      i++;
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