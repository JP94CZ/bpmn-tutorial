export const emptyBpmn = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_1jvkj98" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="3.2.1">
  <bpmn:collaboration id="Collaboration_068xg5q">
    <bpmn:participant id="Participant_1v7kyai" processRef="Process_1k83mb9" />
  </bpmn:collaboration>
  <bpmn:process id="Process_1k83mb9" isExecutable="false">
    <bpmn:laneSet id="LaneSet_0knex5f">
      <bpmn:lane id="Lane_0m2ndut" name="Pool 1">
        <bpmn:flowNodeRef>ExclusiveGateway_0fa8mw8</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_05pa5u4</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_10zfjdi</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>StartEvent_1gbuuz4</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_1xeo2x9" name="Pool 2">
        <bpmn:flowNodeRef>Task_1fntjqy</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_1g2dvvy</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_1h0yrnv</bpmn:flowNodeRef>
      </bpmn:lane>
    </bpmn:laneSet>
    <bpmn:task id="Task_1fntjqy" name="Aktivita 2" />
    <bpmn:task id="Task_1g2dvvy" name="Aktivita 3" />
    <bpmn:task id="Task_1h0yrnv" name="Aktivita 1" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_0fa8mw8" name="Rozhodnutí" />
    <bpmn:endEvent id="EndEvent_05pa5u4" name="End" />
    <bpmn:endEvent id="EndEvent_10zfjdi" name="Konec" />
    <bpmn:startEvent id="StartEvent_1gbuuz4" name="Start" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_068xg5q">
      <bpmndi:BPMNShape id="Participant_1v7kyai_di" bpmnElement="Participant_1v7kyai" isHorizontal="true">
        <dc:Bounds x="156" y="60.5" width="600" height="619" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1gbuuz4">
        <dc:Bounds x="258" y="74" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="264" y="117" width="25" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1h0yrnv_di" bpmnElement="Task_1h0yrnv">
        <dc:Bounds x="226" y="581" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1g2dvvy_di" bpmnElement="Task_1g2dvvy">
        <dc:Bounds x="226" y="473" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1fntjqy_di" bpmnElement="Task_1fntjqy">
        <dc:Bounds x="226" y="375" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_0fa8mw8_di" bpmnElement="ExclusiveGateway_0fa8mw8" isMarkerVisible="true">
        <dc:Bounds x="251" y="306" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="248" y="276" width="57" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_10zfjdi_di" bpmnElement="EndEvent_10zfjdi">
        <dc:Bounds x="258" y="144" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="260" y="187" width="33" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_05pa5u4_di" bpmnElement="EndEvent_05pa5u4">
        <dc:Bounds x="258" y="210" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="266" y="253" width="20" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_0m2ndut_di" bpmnElement="Lane_0m2ndut" isHorizontal="true">
        <dc:Bounds x="186" y="60.5" width="570" height="310" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_1xeo2x9_di" bpmnElement="Lane_1xeo2x9" isHorizontal="true">
        <dc:Bounds x="186" y="370.5" width="570" height="309" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;