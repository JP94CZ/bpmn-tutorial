import React, { Component } from 'react';
import './Reply.css';

export default class Reply extends Component {
    render() {
        return(
        <div className="reply-container">
        <button className = 'reply' onClick = {this.props.clicked} >{this.props.message}</button>
        </div>

        )
    }
  }