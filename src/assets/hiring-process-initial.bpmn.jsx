export const hiringProcess = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_0n2f8pc" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="3.4.0">
  <bpmn:collaboration id="Collaboration_1r59tcq">
    <bpmn:participant id="Participant_0wgc3gd" name="HR" processRef="Process_1hwq6zg" />
  </bpmn:collaboration>
  <bpmn:process id="Process_1hwq6zg" isExecutable="false">
    <bpmn:laneSet id="LaneSet_1pfnx56">
      <bpmn:lane id="Lane_131y2rq" name="HR manager">
        <bpmn:flowNodeRef>Task_0m70ln9</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_03a8jnf</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>ExclusiveGateway_199oqez</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>StartEvent_0y74yxx</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>ExclusiveGateway_10sa5y8</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_0ivcctl" name="Backoffice worker">
        <bpmn:flowNodeRef>Task_0hdypsa</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_0gcdf6o</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_0ivtcw6</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_1tg544g</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_11rmy0s</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_00s4wnx" name="Assisant">
        <bpmn:flowNodeRef>Task_0wscrok</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_1d4oouv</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_1uuegz7</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_0h20s9y</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>ExclusiveGateway_04es42d</bpmn:flowNodeRef>
      </bpmn:lane>
    </bpmn:laneSet>
    <bpmn:task id="Task_0wscrok" name="Background check" />
    <bpmn:task id="Task_0hdypsa" name="Job offer publication" />
    <bpmn:task id="Task_1d4oouv" name="Making the decision" />
    <bpmn:task id="Task_0gcdf6o" name="Finishing paperwork" />
    <bpmn:task id="Task_0ivtcw6" name="Contacting applicant" />
    <bpmn:task id="Task_1uuegz7" name="Reference check" />
    <bpmn:task id="Task_0m70ln9" name="Filtering and registering applicants" />
    <bpmn:task id="Task_03a8jnf" name="Credit check" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_199oqez" name="Applicant chosen?" />
    <bpmn:task id="Task_1tg544g" name="Interview scheduling" />
    <bpmn:startEvent id="StartEvent_0y74yxx" name="Hiring request accepted" />
    <bpmn:task id="Task_0h20s9y" name="Holding interviews" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_10sa5y8" name="Applicant still interested?" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_04es42d" name="Everything ok?" />
    <bpmn:endEvent id="EndEvent_11rmy0s" name="Applicant hired" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_1r59tcq">
      <bpmndi:BPMNShape id="Participant_0wgc3gd_di" bpmnElement="Participant_0wgc3gd" isHorizontal="true">
        <dc:Bounds x="156" y="81" width="1322" height="603" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_0y74yxx">
        <dc:Bounds x="263" y="166" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="246" y="209" width="70" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_131y2rq_di" bpmnElement="Lane_131y2rq" isHorizontal="true">
        <dc:Bounds x="186" y="81" width="1292" height="200" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_0ivcctl_di" bpmnElement="Lane_0ivcctl" isHorizontal="true">
        <dc:Bounds x="186" y="281" width="1292" height="183" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_00s4wnx_di" bpmnElement="Lane_00s4wnx" isHorizontal="true">
        <dc:Bounds x="186" y="464" width="1292" height="220" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0hdypsa_di" bpmnElement="Task_0hdypsa">
        <dc:Bounds x="372" y="330" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0m70ln9_di" bpmnElement="Task_0m70ln9">
        <dc:Bounds x="372" y="144" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1tg544g_di" bpmnElement="Task_1tg544g">
        <dc:Bounds x="231" y="330" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0h20s9y_di" bpmnElement="Task_0h20s9y">
        <dc:Bounds x="231" y="537" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1d4oouv_di" bpmnElement="Task_1d4oouv">
        <dc:Bounds x="520" y="537" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0wscrok_di" bpmnElement="Task_0wscrok">
        <dc:Bounds x="372" y="537" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_03a8jnf_di" bpmnElement="Task_03a8jnf">
        <dc:Bounds x="520" y="144" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_199oqez_di" bpmnElement="ExclusiveGateway_199oqez" isMarkerVisible="true">
        <dc:Bounds x="690" y="159" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="670" y="129" width="90" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1uuegz7_di" bpmnElement="Task_1uuegz7">
        <dc:Bounds x="665" y="537" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_04es42d_di" bpmnElement="ExclusiveGateway_04es42d" isMarkerVisible="true">
        <dc:Bounds x="815" y="552" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="852" y="546" width="74" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0ivtcw6_di" bpmnElement="Task_0ivtcw6">
        <dc:Bounds x="665" y="330" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_10sa5y8_di" bpmnElement="ExclusiveGateway_10sa5y8" isMarkerVisible="true">
        <dc:Bounds x="815" y="159" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="808" y="129" width="64" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0gcdf6o_di" bpmnElement="Task_0gcdf6o">
        <dc:Bounds x="520" y="330" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_11rmy0s_di" bpmnElement="EndEvent_11rmy0s">
        <dc:Bounds x="822" y="352" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="804" y="395" width="73" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;
