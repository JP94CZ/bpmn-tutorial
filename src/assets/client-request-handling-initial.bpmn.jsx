export const clientRequest = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_06epe0n" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="3.4.0">
  <bpmn:collaboration id="Collaboration_1j4s4sg">
    <bpmn:participant id="Participant_15imqfk" processRef="Process_0l1pz58" />
  </bpmn:collaboration>
  <bpmn:process id="Process_0l1pz58" isExecutable="false">
    <bpmn:laneSet id="LaneSet_0rbfx64">
      <bpmn:lane id="Lane_0cv53s9" name="Client support">
        <bpmn:flowNodeRef>StartEvent_08isnhu</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>ExclusiveGateway_09ny737</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_16h2ihq</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_0ruc5dj</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_13haohx" name="Technical support">
        <bpmn:flowNodeRef>Task_0dygzyh</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>ExclusiveGateway_00d8fba</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_1uxmkfi</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_0fvibs4" name="Test center">
        <bpmn:flowNodeRef>Task_1qnsc4e</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_0e4zap6</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_1j403y7</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>ExclusiveGateway_12biciz</bpmn:flowNodeRef>
      </bpmn:lane>
    </bpmn:laneSet>
    <bpmn:startEvent id="StartEvent_08isnhu" name="Request received" />
    <bpmn:task id="Task_0dygzyh" name="Request analysis" />
    <bpmn:task id="Task_1qnsc4e" name="Problem analysis" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_00d8fba" name="Needs solving?" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_09ny737" name="Technical support needed?" />
    <bpmn:task id="Task_16h2ihq" name="Response creation" />
    <bpmn:task id="Task_0e4zap6" name="Bug solving" />
    <bpmn:task id="Task_1j403y7" name="Testing" />
    <bpmn:endEvent id="EndEvent_1uxmkfi" name="Request handled" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_12biciz" name="Bug solved?" />
    <bpmn:endEvent id="EndEvent_0ruc5dj" name="Request handled" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_1j4s4sg">
      <bpmndi:BPMNShape id="Participant_15imqfk_di" bpmnElement="Participant_15imqfk" isHorizontal="true">
        <dc:Bounds x="156" y="55" width="928" height="604" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_08isnhu">
        <dc:Bounds x="264" y="546" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="240" y="589" width="86" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_0cv53s9_di" bpmnElement="Lane_0cv53s9" isHorizontal="true">
        <dc:Bounds x="186" y="467" width="898" height="192" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_13haohx_di" bpmnElement="Lane_13haohx" isHorizontal="true">
        <dc:Bounds x="186" y="263" width="898" height="204" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_0fvibs4_di" bpmnElement="Lane_0fvibs4" isHorizontal="true">
        <dc:Bounds x="186" y="55" width="898" height="208" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0dygzyh_di" bpmnElement="Task_0dygzyh">
        <dc:Bounds x="232" y="327" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_09ny737_di" bpmnElement="ExclusiveGateway_09ny737" isMarkerVisible="true">
        <dc:Bounds x="402" y="539" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="384" y="596" width="87" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1qnsc4e_di" bpmnElement="Task_1qnsc4e">
        <dc:Bounds x="232" y="117" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_16h2ihq_di" bpmnElement="Task_16h2ihq">
        <dc:Bounds x="539" y="524" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_00d8fba_di" bpmnElement="ExclusiveGateway_00d8fba" isMarkerVisible="true">
        <dc:Bounds x="402" y="342" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="462" y="360" width="76" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_0ruc5dj_di" bpmnElement="EndEvent_0ruc5dj">
        <dc:Bounds x="699" y="546" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="675" y="589" width="84" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0e4zap6_di" bpmnElement="Task_0e4zap6">
        <dc:Bounds x="377" y="117" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1j403y7_di" bpmnElement="Task_1j403y7">
        <dc:Bounds x="539" y="117" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_12biciz_di" bpmnElement="ExclusiveGateway_12biciz" isMarkerVisible="true">
        <dc:Bounds x="692" y="132" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="687" y="102" width="61" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_1uxmkfi_di" bpmnElement="EndEvent_1uxmkfi">
        <dc:Bounds x="571" y="349" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="547" y="392" width="84" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;