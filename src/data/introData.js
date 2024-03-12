import hardworker from '../img/hardworker.png';
import learner from '../img/learner.png';
import communicator from '../img/communicator.png';
import speaker from '../img/speaker.gif';
import hammerAnvil from '../img/hammerAnvil.gif';
import books from '../img/books.gif';

export const introData = [
    {
        title: 'A Tenacious Hardworker',
        p: 'Refining my current skills and thanking my future-self by implementing disciplined, consistent habits.',
        img: {
            id: 'hardworker',
            imgSrc: hardworker,
            gifSrc: hammerAnvil
        },
    },
    {
        title: 'A Lifelong Learner',
        p: 'Seeking to not only solve problems, but also understand the questions and processes completely.',
        img: {
            id: 'learner',
            imgSrc: learner,
            gifSrc: books
        },
    },
    {
        title: 'An Effective Communicator',
        p: 'Articulating my thoughts, comments, and questions clearly (online & in person) and listening attentively.',
        img: {
            id: 'communicator',
            imgSrc: communicator,
            gifSrc: speaker
        },
    },
];