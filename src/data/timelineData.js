import { faReact, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDna, faGraduationCap, faMicroscope } from '@fortawesome/free-solid-svg-icons';

export const timelineData = [
    {
        index: 0,
        date: 'JAN 2023 - PRESENT',
        title: 'Full Stack Developer',
        subtitle: 'San Diego, CA',
        p: [
            {
                link: false,
                text: `I enrolled in `,
            },
            {
                link: 'https://www.nucamp.co/bootcamp-overview/full-stack-web-mobile-development',
                text: `Nucamp's Full Stack Bootcamp course`,
            },
            {
                link: false,
                text: ` and graduated in June with an Honors certificate. After graduating, I studied data structures and algorithms on the side and continued working on projects (see Projects section).`,
            },
        ],
        icon: faReact,
    },
    {
        index: 1,
        date: 'APR 2020 - PRESENT',
        title: 'Crown Bioscience',
        subtitle: 'San Diego, CA',
        p: [
            {
                link: false,
                text: `I joined `,
            },
            {
                link: 'https://www.crownbio.com/',
                text: `Crown Bioscience`,
            },
            {
                link: false,
                text: ` as a Study Coordinator eventually promoted to a Study Director. After some time, I transitioned to the Project Manager role, which is my current role today.`,
            },
        ],
        icon: faMicroscope,
    },
    {
        index: 2,
        date: 'JAN 2019 - MAR 2020',
        title: 'M.S. Biology',
        subtitle: 'Kauffman Lab (UCSD)',
        p: [
            {
                link: false,
                text: `As a Research Assistant in the `,
            },
            {
                link: 'https://obgyn.ucsd.edu/research/labs/kauffman/index.html',
                text: `Kauffman Lab`,
            },
            {
                link: false,
                text: `, I seized the chance to further explore bio research through the BS/MS Program. This involved defending a thesis based on my research on corticosterone's impact on stress-induced inhibition of neuronal activation. `,
            },
        ],
        icon: faDna,
    },
    {
        index: 3,
        date: 'OCT 2014 - DEC 2018',
        title: 'B.S. Biology',
        subtitle: 'University of California, San Diego (UCSD)',
        p: [
            {
                link: false,
                text: `I miraculously got accepted to the great University of California, San Diego! I was truly blessed by the year-round sunny weather, amazing Mexican food, and beautiful beaches that were a little too overcrowded on the weekends. As I studied Physiology and Neuroscience, I joined the Kauffman Lab during my fourth year.`,
            },
        ],
        icon: faGraduationCap,
    },
    {
        index: 4,
        date: 'AUG 2010 - JUN 2014',
        title: 'Intro to Java',
        subtitle: 'Cupertino High',
        p: [
            {
                link: false,
                text: `I'd say this is the inception of my passion for coding. Thanks Mr. Ferrante for a fun course! I regret not having pursued computer science in college, but I have to trust that everything happens for a reason.`,
            },
        ],
        icon: faJava,
    },
];

