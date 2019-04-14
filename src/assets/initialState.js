import naplava from './pictures/pavel_naplava.png';
import zoubek from './pictures/lukas_zoubek.jpg';
import koci from './pictures/jan_koci.jpg';
import gorecki from './pictures/ales_gorecki.jpg';
import malinkovic from './pictures/tomas-malinkovic2.png';
import { emptyBpmn } from './empty.bpmn';

export const initialState = {
    chapters: [
      {
        name: 'Tutorial',
        finished: false,
        process: emptyBpmn,
        conversations: [
          {
            photo: naplava,
            name: 'Pavel Náplava',
            title: 'BPMN Master',
            conversation: "pavelNaplava",
            id: 0,
            conversationProgress: [],
            conversationFinalLength: null,
            finished: false
          },
          {
            photo: malinkovic,
            name: `Tomáš Malinkovič`,
            title: 'BPM Chief',
            conversation: "tomasMalinkovic",
            id: 1,
            conversationProgress: [],

            finished: false
          }
        ]
      },
      {
        name: 'Chapter 1',
        finished: false,
        conversations: [

          {
            photo: koci,
            name: `Jan Kočí`,
            title: 'Big Boss',
            conversation: "janKoci",
            id: 0,
            conversationProgress: [],
            finished: false
          }
        ]
      },
      {
        name: 'Chapter 2',
        finished: false,
        conversations: [

          {
            photo: zoubek,
            name: `Lukáš Zoubek`,
            title: 'Lil\' Boss',
            conversation: "lukasZoubek",
            id: 0,
            conversationProgress: [],
            finished: false
          }
        ]
      },
      {
        name: 'Chapter 3',
        finished: false,
        conversations: [
          {
            photo: gorecki,
            name: `Aleš Górecki`,
            title: 'Moodle Captain',
            conversation: "alesGorecki",
            id: 0,
            conversationProgress: [],
            finished: false
          }
        ]
      }
    ]
    ,
    actualConversation: 0,
    actualChapter: 0,
    availableChaptersAmount: 1,
    displayDraw: false
  }