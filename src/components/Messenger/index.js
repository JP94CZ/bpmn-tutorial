import React, { Component } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList/';
import './Messenger.css';
import naplava from '../../assets/pictures/pavel_naplava.png';
import zoubek from '../../assets/pictures/lukas_zoubek.jpg';
import koci from '../../assets/pictures/jan_koci.jpg';
import gorecki from '../../assets/pictures/ales_gorecki.jpg';
import malinkovic from '../../assets/pictures/tomas-malinkovic2.png';

export default class Messenger extends Component {

  state = {
    chapters: [
      {
        conversations: [
          {
            photo: naplava,
            name: 'Pavel Náplava',
            title: 'BPMN Master',
            conversation: "pavelNaplava",
            id: 0,
            conversationProgress: [],
            conversationFinalLength: null
          },
          {
            photo: malinkovic,
            name: `Tomáš Malinkovič`,
            title: 'BPM Chief',
            conversation: "tomasMalinkovic",
            id: 1,
            conversationProgress: [],
            conversationFinalLength: null
          }
        ]
      },
      {
        conversations: [

           {
            photo: koci,
            name: `Jan Kočí`,
            title: 'Big Boss',
            conversation: "janKoci",
            id: 0,
            conversationProgress: []
          }
        ]
      },
      {
        conversations: [
 
          {
            photo: zoubek,
            name: `Lukáš Zoubek`,
            title: 'Lil\' Boss',
            conversation: "lukasZoubek",
            id: 0,
            conversationProgress: [],
            conversationFinalLength: null
          }
        ]
      },
      {
        conversations: [      
          {
            photo: gorecki,
            name: `Aleš Górecki`,
            title: 'Moodle Captain',
            conversation: "alesGorecki",
            id: 0,
            conversationProgress: [],
            conversationFinalLength: null
          }
        ]
      }
    ]
    ,
    actualConversation: 0,
    actualChapter: 1
  }



  changeConversation = (id) => {
    this.setState({ actualConversation: id })
  }

  progressConversation = (convProgressed) => {
    let conversations = [...this.state.chapters[this.state.actualChapter].conversations];
    conversations[this.state.actualConversation].conversationProgress.push(convProgressed);
    this.setState(
      { conversations: conversations }
    )

  }

  changeChapter = (chapter) => {
    this.setState({actualChapter: chapter, actualConversation: 0})
  }

  render() {
    return (
      <div className="messenger">
        <div className="scrollable sidebar">
          <ConversationList
            conversations={this.state.chapters[this.state.actualChapter].conversations}
            clicked={this.changeConversation}
            changeChapter = {this.changeChapter}
          />
        </div>

        <div className="scrollable content">
          <MessageList
            convName={this.state.chapters[this.state.actualChapter].conversations[this.state.actualConversation].name + " - " + this.state.chapters[this.state.actualChapter].conversations[this.state.actualConversation].title}
            convDataSource={this.state.chapters[this.state.actualChapter].conversations[this.state.actualConversation].conversation}
            conversationProgress={this.state.chapters[this.state.actualChapter].conversations[this.state.actualConversation].conversationProgress}
            reply={this.progressConversation} />
        </div>
      </div>
    );
  }
}