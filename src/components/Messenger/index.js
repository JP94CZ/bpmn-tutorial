import React, { Component } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList/';
import './Messenger.css';
import naplava from '../ConversationList/pavel_naplava.png';
import zoubek from'../ConversationList/lukas_zoubek.jpg';
import koci from '../ConversationList/jan_koci.jpg';
import gorecki from '../ConversationList/ales_gorecki.jpg';
import malinkovic from '../ConversationList/tomas-malinkovic2.png';

export default class Messenger extends Component {


  state = {
    conversations : [
          {
            photo: naplava,
            name: 'Pavel Náplava',
            title: 'BPMN Master',
            conversation: null,
            id:0
          },
          {
            photo: malinkovic,
            name: `Tomáš Malinkovič`,
            title: 'BPM Chief',
            conversation: null,
            id:1
          },{
            photo: koci,
            name: `Jan Kočí`,
            title: 'Big Boss',
            conversation: null,
            id:2
          },
          {
            photo: zoubek,
            name: `Lukáš Zoubek`,
            title: 'Lil Boss',
            conversation: null,
            id:3
          },{
            photo: gorecki,
            name: `Aleš Górecki`,
            title: 'Moodle Captain',
            conversation: null,
            id:4
          }
        ],
        actualConversation : 0
  }

  changeConversation = (id) =>{
    this.setState({actualConversation: id})
  }

  render() {
    return (
      <div className="messenger">
        <div className="scrollable sidebar">
          <ConversationList 
          conversations = {this.state.conversations}
          clicked = {this.changeConversation}
          />
        </div>

        <div className="scrollable content">
          <MessageList 
          convName = {this.state.conversations[this.state.actualConversation].name + " - " +this.state.conversations[this.state.actualConversation].title}/>
        </div>
      </div>
    );
  }
}