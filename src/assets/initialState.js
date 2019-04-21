import { tutorial } from './tutorial.bpmn';
import polan from './pictures/jan_polan.jpg';
import bachmaier from './pictures/karel_bachmaier.jpg';
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
        process: tutorial,
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
          }
        ]
      },
      {
        name: 'Chapter 2',
        finished: false,
        process: tutorial,
        conversations: [

        ]
      },
      {
        name: 'Chapter 3',
        finished: false,
        process: tutorial,
        conversations: [
          
        ]
      }
    ]
    ,
    actualConversation: 0,
    actualChapter: 0,
    availableChaptersAmount: 1,
    displayDraw: false
  }