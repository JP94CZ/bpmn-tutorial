import React, { Component } from 'react';
import './ReplyHolder.css';

import Reply from '../Reply';

export default class ReplyHolder extends Component {
    render() {
        return (
            <div className='replyHolder'>
                {
                    this.props.replies.map((reply, index) =>
                        <Reply
                            clicked={() => this.props.clicked(index)}
                            message={reply.message}
                        />
                    )
                }
            </div>
        )
    }
}