import React, { Component }  from 'react';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-font/dist/css/bpmn-embedded.css';
import { emptyBpmn } from '../../assets/empty.bpmn';

class BpmnModelerComponent extends Component {
    
    modeler = null;
    
    componentDidMount = () => {
        this.modeler = new BpmnModeler({
            container: '#bpmnview',
            keyboard: {
                bindTo: window
            }
  
        });

        this.newBpmnDiagram();
    }

    saveModel(){
        this.modeler.exportXML();
    }


    newBpmnDiagram = () => {
        this.openBpmnDiagram(emptyBpmn);
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

    render = () => {
        return(
            <div id="bpmncontainer">
                <div id="bpmnview" style={{ width: '100%', height: '98vh', float: 'left' }}></div>
            </div>

        )
    }
}

export default BpmnModelerComponent;