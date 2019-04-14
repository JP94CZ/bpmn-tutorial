import React, { Component } from 'react';
import './Toolbar.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Toolbar extends Component {
  render() {
    const { convName } = this.props;
    return (
      <div className="toolbar">
        <h1 className="toolbar-title">{convName}</h1>
        <div className="buttonLast">
          <div className="blast">
            <Button variant="secondary" onClick={() => this.props.restartConversation()}>Restart conversation</Button>
          </div>
        </div>
      </div>
    );
  }
}