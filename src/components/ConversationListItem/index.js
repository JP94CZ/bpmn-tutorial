import React, { Component } from 'react';

import './ConversationListItem.css';

export default class ConversationListItem extends Component {
  

  render() {
    const { photo, name, title, id } = this.props.data;

    return (
      <div className="conversation-list-item"
      onClick = {this.props.clicked}
      >
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{name}</h1>
          <p className="conversation-snippet">{title}</p>
        </div>
      </div>
    );
  }
}