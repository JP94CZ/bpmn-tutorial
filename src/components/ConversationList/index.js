import React, { Component } from 'react';
import ConversationListItem from '../ConversationListItem';
import ChapterToolbar from '../ChapterToolbar';
import './ConversationList.css';
import pic from '../../assets/pictures/bpmn.png';


export default class ConversationList extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    let bpmnConv = null

    if (this.props.drawingAvailable) {
      bpmnConv = <ConversationListItem
        clicked={() => this.props.displayDrawingBoard()}
        key={null}
        data={{
          photo: pic,
          name: 'Draw the process',
          title: null,
        }}
      />
    }

    return (
      <div className="conversation-list">
        <ChapterToolbar
          changeChapter={this.props.changeChapter}
          chapters={this.props.availableChaptersList}
        />
        {
          this.props.conversations.map(conversation =>
            <ConversationListItem
              clicked={() => this.props.clicked(conversation.id)}
              key={conversation.id}
              data={conversation}

            />
          )

        }
        {bpmnConv}
      </div>
    );
  }
}