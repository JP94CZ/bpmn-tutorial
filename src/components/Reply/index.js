import React, { Component } from 'react';
import './Reply.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Reply extends Component {
    render() {
        return(
        <div className="reply-container">
        <Button className = 'reply' onClick = {this.props.clicked} >{this.props.message}</Button>
        </div>

        )
    }
  }