import React, { Component } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList/';
import BpmnModelerComponent from '../BpmnModelerComponent/';
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
        name: 'Tutorial',
        finished: false,
        conversations: [
          {
            photo: naplava,
            name: 'Pavel Náplava',
            title: 'BPMN Master',
            conversation: "pavelNaplava",
            id: 0,
            conversationProgress: [],
            conversationFinalLength: null,
            finished: false
          },
          {
            photo: malinkovic,
            name: `Tomáš Malinkovič`,
            title: 'BPM Chief',
            conversation: "tomasMalinkovic",
            id: 1,
            conversationProgress: [],

            finished: false
          }
        ]
      },
      {
        name: 'Chapter 1',
        finished: false,
        conversations: [

          {
            photo: koci,
            name: `Jan Kočí`,
            title: 'Big Boss',
            conversation: "janKoci",
            id: 0,
            conversationProgress: [],
            finished: false
          }
        ]
      },
      {
        name: 'Chapter 2',
        finished: false,
        conversations: [

          {
            photo: zoubek,
            name: `Lukáš Zoubek`,
            title: 'Lil\' Boss',
            conversation: "lukasZoubek",
            id: 0,
            conversationProgress: [],
            finished: false
          }
        ]
      },
      {
        name: 'Chapter 3',
        finished: false,
        conversations: [
          {
            photo: gorecki,
            name: `Aleš Górecki`,
            title: 'Moodle Captain',
            conversation: "alesGorecki",
            id: 0,
            conversationProgress: [],
            finished: false
          }
        ]
      }
    ]
    ,
    actualConversation: 0,
    actualChapter: 0,
    availableChaptersAmount: 1,
    displayDraw: false
  }

  getAvailableChaptersNames = () => {
    let chapterNames = [];
    let i = 0;
    while (i < this.state.availableChaptersAmount) {
      chapterNames.push(this.state.chapters[i].name);
      i++;
    }
    return chapterNames;
  }

  changeConversation = (id) => {
    this.setState({ actualConversation: id, displayDraw: false });

  }

  progressConversation = (convProgressed) => {
    let conversations = [...this.state.chapters[this.state.actualChapter].conversations];
    conversations[this.state.actualConversation].conversationProgress.push(convProgressed);
    this.setState(
      { conversations: conversations }
    )

  }

  endConversation = () => {
    let conversations = [...this.state.chapters[this.state.actualChapter].conversations];
    let actualConversation = conversations[this.state.actualConversation];
    if (actualConversation.finished !== true) {
      actualConversation.finished = true;
      this.setState(conversations)
    }
  }

  finishChapter = () => {
    let chapters = [...this.state.chapters];
    let actualChapter = chapters[this.state.actualChapter];
    if (actualChapter.finished === false) {
      actualChapter.finished = true;
      let newAvailableChaptersAmount = this.state.availableChaptersAmount;
      if(this.state.chapters.length !== newAvailableChaptersAmount){
        newAvailableChaptersAmount++;
      }
      this.setState({ chapters: chapters, availableChaptersAmount: newAvailableChaptersAmount })
    }
  }

  drawingAvailable = () => {
    let conversations = [...this.state.chapters[this.state.actualChapter].conversations];
    let i = 0;
    while (i < conversations.length) {
      if (conversations[i].finished === false) {
        return false
      }
      i++;
    }
    return true;
  }

  changeChapter = (chapter) => {
    this.setState({ actualChapter: chapter, actualConversation: 0, displayDraw: false })
  }

  displayDrawingBoard = () => {
    this.setState({ displayDraw: true });
  }

  render() {
    let convWindow = null;
    if (this.state.displayDraw === true) {  
      convWindow = <BpmnModelerComponent
        finishChapter={() => this.finishChapter()}
      />;
    } else {
      convWindow = <MessageList
        convName={this.state.chapters[this.state.actualChapter].conversations[this.state.actualConversation].name + " - " + this.state.chapters[this.state.actualChapter].conversations[this.state.actualConversation].title}
        convDataSource={this.state.chapters[this.state.actualChapter].conversations[this.state.actualConversation].conversation}
        conversationProgress={this.state.chapters[this.state.actualChapter].conversations[this.state.actualConversation].conversationProgress}
        reply={this.progressConversation}
        endConversation={this.endConversation} />
    }

    return (
      <div className="messenger">
        <div className="scrollable sidebar">
          <ConversationList
            conversations={this.state.chapters[this.state.actualChapter].conversations}
            clicked={this.changeConversation}
            changeChapter={this.changeChapter}
            availableChaptersList={this.getAvailableChaptersNames()}
            displayDrawingBoard={this.displayDrawingBoard}
            drawingAvailable={this.drawingAvailable()}
          />
        </div>
        <div className="scrollable content">
          {convWindow}
        </div>
      </div>
    );
  }
}