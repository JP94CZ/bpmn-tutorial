import React, { Component } from 'react';
import ConversationListItem from '../ConversationListItem';
import ChapterToolbar from '../ChapterToolbar';
import './ConversationList.css';

export default class ConversationList extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="conversation-list">
        <ChapterToolbar changeChapter={this.props.changeChapter}
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
      </div>
    );
  }
}