import { tutorial } from './tutorial.bpmn';
import { hiringProcess } from './hiring-process-initial.bpmn';
import { clientRequest } from './client-request-handling-initial.bpmn';
import { rightsRequest } from './rights-request-initial.bpmn';
import polan from './pictures/jan_polan.jpg';
import bachmaier from './pictures/karel_bachmaier.jpg';
import ton from './pictures/martinTon.jpeg';
import hobitphile from './pictures/michaelHobitphile.jpeg';
import mollusc from './pictures/mollusc.jpeg';
import clutterbuck from './pictures/Clutterbuck.png';
import schwarz from './pictures/schwarz.jpeg';
import ima from './pictures/ima.png';
import process from './proccess.json';

export const initialState = {
    chapters: [
      {
        name: 'Tutorial',
        finished: false,
        process: tutorial,
        processSolution: process.tutorial,
        conversations: [
          {
            photo: polan,
            name: 'Jan Polan',
            title: 'Creator',
            conversation: "janPolan-tutorial",
            id: 0,
            conversationProgress: [],
            conversationFinalLength: null,
            finished: false
          }
        ]
      },
      {
        name: 'Chapter 1',
        finished: false,
        process: rightsRequest,
        processSolution: process.rightsRequest,
        conversations: [
          {
            photo: polan,
            name: 'Jan Polan',
            title: 'Creator',
            conversation: "janPolan-chapterOne",
            id: 0,
            conversationProgress: [],
            conversationFinalLength: null,
            finished: false
          },
          {
            photo: hobitphile,
            name: 'Michael Hobitphile',
            title: 'Project manager',
            conversation: "michaelHobitphile",
            id: 1,
            conversationProgress: [],
            conversationFinalLength: null,
            finished: false
          },
          {
            photo: ton,
            name: 'Martin Ton',
            title: 'System administrator',
            conversation: "martinTon",
            id: 2,
            conversationProgress: [],
            conversationFinalLength: null,
            finished: false
          }
        ]
      },
      {
        name: 'Chapter 2',
        finished: false,
        process: clientRequest,
        processSolution: process.clientRequest,
        conversations: [
          {
            photo: polan,
            name: 'Jan Polan',
            title: 'Creator',
            conversation: "janPolan-chapterOne",
            id: 0,
            conversationProgress: [],
            conversationFinalLength: null,
            finished: false
          },
          {
            photo: ima,
            name: 'Ima Kettle',
            title: 'Client support specialist',
            conversation: "ima",
            id: 1,
            conversationProgress: [],
            conversationFinalLength: null,
            finished: false
          },
          {
            photo: mollusc,
            name: 'Lucas Mollusc',
            title: 'Technical support leader',
            conversation: "lucasMullusc",
            id: 2,
            conversationProgress: [],
            conversationFinalLength: null,
            finished: false
          },
          {
            photo: clutterbuck,
            name: 'Phillip Clutterbuck',
            title: 'Lead tester',
            conversation: "clutterbuck",
            id: 3,
            conversationProgress: [],
            conversationFinalLength: null,
            finished: false
          }
        ]
      },
      {
        name: 'Chapter 3',
        finished: false,
        process: hiringProcess,
        processSolution: process.hiringProcess,
        conversations: [
          {
            photo: polan,
            name: 'Jan Polan',
            title: 'Creator',
            conversation: "janPolan-chapterOne",
            id: 0,
            conversationProgress: [],
            conversationFinalLength: null,
            finished: false
          },
          {
            photo: bachmaier,
            name: 'Charlie Doughnut',
            title: 'HR background',
            conversation: "charlieDoughnut",
            id: 1,
            conversationProgress: [],
            conversationFinalLength: null,
            finished: false
          },
          {
            photo: schwarz,
            name: 'Cindy Schwarz',
            title: 'Client support assistant',
            conversation: "lucasMullusc",
            id: 2,
            conversationProgress: [],
            conversationFinalLength: null,
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