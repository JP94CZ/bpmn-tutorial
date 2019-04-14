import React, { Component } from 'react';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-font/dist/css/bpmn-embedded.css';
import BpmnModelerBar from '../BpmnModelerBar';
import process from '../../assets/proccess.json';

export default class BpmnModelerComponent extends Component {

    modeler = null;

    extraElements = 2;

    alertClasses = {
        primary: 'primary',
        warning: 'warning',
        danger: 'danger',
        success: 'success'
    }

    originalBarText = 'Try to connect these elements to finish the process! Do not delete any of the present elements!';
    
    successText = 'You did it right! Unlock the next chapter by clicking the button on the right!';

    state = {
        barText: this.originalBarText,
        alertType: this.alertClasses.primary,
        doneCorrectly: false
    }

    componentDidMount = () => {
        this.modeler = new BpmnModeler({
            container: '#bpmnview',
            keyboard: {
                bindTo: window
            }

        });

        this.newBpmnDiagram();
    }

    checkModel() {
        if(this.checkSubmittedProcess( )){
            this.setState({doneCorrectly: true});
        }
    }



    reset = () => {
        this.newBpmnDiagram();
        this.setBarTextAndAlertType(this.originalBarText, this.alertClasses.primary);

    }


    newBpmnDiagram = () => {
        this.openBpmnDiagram(this.props.process);
    }

    openBpmnDiagram = (xml) => {
        this.modeler.importXML(xml, (error) => {
            if (error) {
                return console.log('fail import xml');
            }
            var canvas = this.modeler.get('canvas');
            canvas.zoom('fit-viewport');
        });
    }

    checkSubmittedProcess = () => {
        let elementRegistry = this.modeler.get('elementRegistry');
        if (!this.checkIfRightElementsArePresent(elementRegistry)) {
            return false;
        }
        if (!this.checkConnections(elementRegistry)) {
            return false;
        }
        if (!this.checkAccordingPlacement(elementRegistry)) {
            return false;
        }
        if (!this.checkForAdditionalElements(elementRegistry)) {
            return false;
        }
        this.setBarTextAndAlertType(this.successText, this.alertClasses.success);
        return true;
    }

    checkIfRightElementsArePresent = (elementRegistry) => {
        let i = 0;
        while (i < process.length) {
            let z = 0;
            let lane = process[i];
            while (z < lane.elements.length) {
                let result = this.checkIfElementIsPresent(elementRegistry, lane.elements[z].id);
                if (result !== null) {
                    this.setBarTextAndAlertType(result, this.alertClasses.danger)
                    return false;
                }

                z++;
            }
            i++;
        }
        return true;
    }

    setBarTextAndAlertType = (text, type) => {
        this.setState({ barText: text, alertType: type })
    }

    checkIfElementIsPresent = (elementRegistry, id) => {
        let element = elementRegistry.get(id);
        if (element === undefined) {
            return ("You deleted one of the elements! Reset and start again or redo changes (CTRL+Z) and submit again!")
        }
        return null;
    }

    checkConnections = (elementRegistry) => {
        let sequenceFlows = this.getAllSequenceFlows(elementRegistry);
        let i = 0;
        while (i < process.length) {
            let z = 0;
            let lane = process[i];
            while (z < lane.elements.length) {
                if (lane.elements[z].connections !== null) {
                    let u = 0;
                    while (u < lane.elements[z].connections.length) {
                        let result = this.checkConnection(sequenceFlows, lane.elements[z].id, lane.elements[z].connections[u]);
                        if (result !== -1) {
                            sequenceFlows.splice(result, 1);
                        } else {
                            this.setBarTextAndAlertType("There are connections missing from " + lane.elements[z].id, this.alertClasses.warning)
                            return false;
                        }
                        u++
                    }
                }
                z++;
            }
            i++;
        }
        if (sequenceFlows.length !== 0) {
            this.setBarTextAndAlertType("You have additional connections somewhere", this.alertClasses.warning)
        }
        return true;
    }

    checkConnection(sequenceFlows, source, target) {
        let searchedConnection = sequenceFlows.findIndex(e => e.businessObject.sourceRef.id === source && e.businessObject.targetRef.id === target);
        return searchedConnection;
    }

    getAllSequenceFlows = (elementRegistry) => {
        let sequenceFlows = [];
        let elements = [...elementRegistry.getAll()];
        let i = 0;
        while (i < elements.length) {
            if (elements[i].id.startsWith('SequenceFlow')) {
                sequenceFlows.push(elements[i]);
            }
            i++;
        }
        return sequenceFlows;
    }

    checkAccordingPlacement = (elementRegistry) => {
        let i = 0;
        while (i < process.length) {
            let swimlane = elementRegistry.get(process[i].lane);
            let y = 0;
            while (y < process[i].elements.length) {
                let element = elementRegistry.get(process[i].elements[y].id);
                if (!this.checkIfIsInSwimlane(element, swimlane)) {
                    this.setBarTextAndAlertType("Following element is misplaced: "+ element.id, this.alertClasses.warning)
                    return false;
                }
                y++;
            }
            i++;
        }
        return true;
    }

    checkIfIsInSwimlane(element, swimlane) {
        let maxSwimlaneYposition = this.getMaxYPosition(swimlane);
        let maxSwimlaneXposition = this.getMaxXPosition(swimlane);
        let minSwimlaneYposition = this.getMinYPosition(swimlane);
        let minSwimlaneXposition = this.getMinXPosition(swimlane);
        let maxElementYposition = this.getMaxYPosition(element);
        let maxElementXposition = this.getMaxXPosition(element);
        let minElementYposition = this.getMinYPosition(element);
        let minElementXposition = this.getMinXPosition(element);

        if (maxSwimlaneYposition < maxElementYposition) {
            return false;
        }
        if (maxSwimlaneXposition < maxElementXposition) {
            return false;
        }
        if (minSwimlaneYposition > minElementYposition) {
            return false
        }
        if (minSwimlaneXposition > minElementXposition) {
            return false
        }
        return true;
    }

    getMaxXPosition(element) {
        return element.x + element.width;
    }

    getMaxYPosition(element) {
        return element.y + element.height;
    }

    getMinXPosition(element) {
        return element.y;
    }

    getMinYPosition(element) {
        return element.y;
    }

    countAllSequenceFlows = (elementRegistry) => {
        let result = 0;
        let elements = [...elementRegistry.getAll()];
        let i = 0;
        while (i < elements.length) {
            if (elements[i].id.startsWith('SequenceFlow')) {
                result++;
            }
            i++;
        }
        return result;
    }

    countAllProcessElements() {
        let result = process.length;
        let i = 0;
        while (i < process.length) {
            result += process[i].elements.length;
            i++;
        }
        return result;
    }

    countAllLabelObjects = (elementRegistry) => {
        let elements = elementRegistry.getAll();
        let result = 0;
        let i = 0;
        while (i < elements.length) {
            if (elements[i].id.endsWith("_label")) {
                result++;
            }
            i++;
        }
        return result;
    }

    checkForAdditionalElements = (elementRegistry) => {
        let elements = elementRegistry.getAll();
        let expectedElements = this.countAllProcessElements();
        let amountOfLegitElements = elements.length - this.countAllSequenceFlows(elementRegistry) - this.countAllLabelObjects(elementRegistry) - this.extraElements;
        if (expectedElements !== amountOfLegitElements) {
            this.setBarTextAndAlertType("There are extra elements in the process! Delete them or hit reset to start over!", this.alertClasses.warning);
            return false;
        }
        return true;
    }

    render = () => {
        return (
            <div>
                <BpmnModelerBar
                    resetDiagram={() => this.reset()}
                    checkModel={() => this.checkModel()}
                    barText={this.state.barText}
                    alertType={this.state.alertType}
                    finishChapter={this.props.finishChapter} 
                    doneCorrectly = {!this.state.doneCorrectly}/>
                <div id="bpmncontainer">
                    <div id="bpmnview" style={{ width: '100%', height: '94vh', float: 'left' }}></div>
                </div>

            </div>
        )
    }
}