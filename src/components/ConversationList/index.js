import React, { Component } from 'react';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';


import './ConversationList.css';

export default class ConversationList extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="conversation-list">
        <Toolbar
          convName = "BPMN"
        />        {
          this.props.conversations.map(conversation =>
            <ConversationListItem
              clicked = {() => this.props.clicked(conversation.id)}
              key={conversation.id}
              data={conversation}
            />
          )
        }
      </div>
    );
  }
}