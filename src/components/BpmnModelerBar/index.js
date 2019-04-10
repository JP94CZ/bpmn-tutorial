import React, { Component } from 'react';
import './BpmnModelerBar.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class BpmnModelerBar extends Component {

    render() {

        return (
            <div className="toolbar">
                <div className='quoteSpace'>
                    <div className={'alert alert-' + this.props.alertType +' mb-0'}  role="alert" >
                        {this.props.barText}</div>

                </div>
                <div className='buttonToolbar'>
                    <div className='marginRight'>
                        <Button variant="primary" onClick={this.props.checkModel}>Submit</Button>
                    </div>
                    <div className='marginRight'>
                        <Button variant="secondary" onClick={this.props.resetDiagram}>Reset</Button>
                    </div>
                    <div className='marginRight'>
                        <Button variant="success" onClick={this.props.finishChapter} disabled = {this.props.doneCorrectly}>Unlock next chapter</Button>
                    </div>
                </div>

            </div>
        );
    }

}