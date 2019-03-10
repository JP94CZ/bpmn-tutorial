import React, { Component } from 'react';
import './Toolbar.css';

export default class Toolbar extends Component {
  render() {
    const { convName } = this.props;
    return (
      <div className="toolbar">
        <h1 className="toolbar-title">{ convName }</h1>
      </div>
    );
  }
}