import React, { Component } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList/';
import BpmnModelerComponent from '../BpmnModelerComponent/';
import './Messenger.css';
import {initialState} from '../../assets/initialState.js';

export default class Messenger extends Component {

  state = initialState;

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

  restartConversation = () => {
    let conversations = [...this.state.chapters[this.state.actualChapter].conversations];
    let actualConversation = conversations[this.state.actualConversation];
    actualConversation.conversationProgress = [];
      this.setState(conversations)

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
      process = {this.state.chapters[this.state.actualChapter].process}
      processSolution = {this.state.chapters[this.state.actualChapter].processSolution}
        finishChapter={() => this.finishChapter()}
      />;
    } else {
      convWindow = <MessageList
        convName={this.state.chapters[this.state.actualChapter].conversations[this.state.actualConversation].name + " - " + this.state.chapters[this.state.actualChapter].conversations[this.state.actualConversation].title}
        convDataSource={this.state.chapters[this.state.actualChapter].conversations[this.state.actualConversation].conversation}
        conversationProgress={this.state.chapters[this.state.actualChapter].conversations[this.state.actualConversation].conversationProgress}
        reply={this.progressConversation}
        endConversation={this.endConversation} 
        restartConversation={() => this.restartConversation()}/>
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