export const rightsRequest = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_03w41jj" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="3.4.0">
  <bpmn:collaboration id="Collaboration_0ru3dcw">
    <bpmn:participant id="Participant_0bzoxha" processRef="Process_0oxqneo" />
  </bpmn:collaboration>
  <bpmn:process id="Process_0oxqneo" isExecutable="false">
    <bpmn:laneSet id="LaneSet_158sqmm">
      <bpmn:lane id="Lane_00losv1" name="Manager">
        <bpmn:flowNodeRef>ExclusiveGateway_0926bt5</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_1qx8qkh</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_1t0pb21</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>StartEvent_0p9a2n5</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_1e5laqk" name="New employee">
        <bpmn:flowNodeRef>ExclusiveGateway_1txbhaq</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_0enoqfh</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_0u5t4h5</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_1jojdbg" name="System administrator">
        <bpmn:flowNodeRef>Task_090oxhi</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_0kcqv7a</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_117iggz</bpmn:flowNodeRef>
      </bpmn:lane>
    </bpmn:laneSet>
    <bpmn:task id="Task_090oxhi" name="Approving the request" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_0926bt5" name="User present in database?" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_1txbhaq" name="Approved?" />
    <bpmn:task id="Task_1qx8qkh" name="Access rights distribution" />
    <bpmn:task id="Task_0kcqv7a" name="Request filled" />
    <bpmn:task id="Task_1t0pb21" name="Checking database" />
    <bpmn:task id="Task_0enoqfh" name="Adding user" />
    <bpmn:endEvent id="EndEvent_117iggz" name="Request denied" />
    <bpmn:startEvent id="StartEvent_0p9a2n5" name="Need for access" />
    <bpmn:endEvent id="EndEvent_0u5t4h5" name="Request fulfilled" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_0ru3dcw">
      <bpmndi:BPMNShape id="Participant_0bzoxha_di" bpmnElement="Participant_0bzoxha" isHorizontal="true">
        <dc:Bounds x="156" y="81" width="1143" height="627" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_0p9a2n5">
        <dc:Bounds x="700" y="419" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="678" y="462" width="80" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_00losv1_di" bpmnElement="Lane_00losv1" isHorizontal="true">
        <dc:Bounds x="186" y="318" width="1113" height="201" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_1e5laqk_di" bpmnElement="Lane_1e5laqk" isHorizontal="true">
        <dc:Bounds x="186" y="519" width="1113" height="189" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0kcqv7a_di" bpmnElement="Task_0kcqv7a">
        <dc:Bounds x="383" y="161" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_090oxhi_di" bpmnElement="Task_090oxhi">
        <dc:Bounds x="227" y="161" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_1txbhaq_di" bpmnElement="ExclusiveGateway_1txbhaq" isMarkerVisible="true">
        <dc:Bounds x="397" y="592" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="396" y="649" width="53" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_1jojdbg_di" bpmnElement="Lane_1jojdbg" isHorizontal="true">
        <dc:Bounds x="186" y="81" width="1113" height="237" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1t0pb21_di" bpmnElement="Task_1t0pb21">
        <dc:Bounds x="242" y="386" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_117iggz_di" bpmnElement="EndEvent_117iggz">
        <dc:Bounds x="570" y="183" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="549" y="226" width="78" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_0u5t4h5_di" bpmnElement="EndEvent_0u5t4h5">
        <dc:Bounds x="570" y="599" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="549" y="642" width="79" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_0926bt5_di" bpmnElement="ExclusiveGateway_0926bt5" isMarkerVisible="true">
        <dc:Bounds x="397" y="401" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="385" y="458" width="75" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0enoqfh_di" bpmnElement="Task_0enoqfh">
        <dc:Bounds x="242" y="577" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1qx8qkh_di" bpmnElement="Task_1qx8qkh">
        <dc:Bounds x="538" y="397" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;