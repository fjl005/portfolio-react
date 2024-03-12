import { faReact, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDna, faGraduationCap, faMicroscope } from '@fortawesome/free-solid-svg-icons';

export const timelineData = [
    {
        index: 0,
        date: 'DEC 2022 - PRESENT',
        title: 'Full Stack Developer',
        subtitle: 'San Diego, CA',
        p: [
            {
                link: false,
                text: `I embarked my web development journey with an introductory HTML, CSS, and JavaScript course. Finding the content captivating, I enrolled in `,
            },
            {
                link: 'https://www.nucamp.co/bootcamp-overview/full-stack-web-mobile-development',
                text: `Nucamp's Full Stack Bootcamp course`,
            },
            {
                link: false,
                text: ` and graduated in June with an Honors certificate; the bootcamp emphasized Bootstrap, React, React Native, Node.js, Express, and MongoDB.  After graduating, I studied data structures and algorithms on the side to bolster my computer science knowledge while continuing to build full-stack projects (see Projects section below).`,
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
                text: `Initially joining `,
            },
            {
                link: 'https://www.crownbio.com/',
                text: `Crown Bioscience`,
            },
            {
                link: false,
                text: ` as a Study Coordinator, I worked across departments to ensure smooth daily operations and plan future initiatives. Progressing to a Study Director, I continued these responsibilities at a higher level and also collaborated closely with various pharmaceutical clients in drafting study protocols and concluding reports. Now as a Project Manager, I focus on revenue milestones and develop documentation to improve operational processes.`,
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
                text: `, I embraced the opportunity to explore bio research through the BS/MS Program. This included defending a thesis focused on my research in corticosterone's impact on stress-induced inhibition of neuronal activation. `,
            },
            {
                link: 'https://escholarship.org/content/qt6q719888/qt6q719888.pdf?t=q89epl',
                text: `Click here`,
            },
            {
                link: false,
                text: ` to see my Master's Thesis!`,
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
                text: `In addition to academics and research, I was blessed by the year-round sunny weather, outstanding Mexican food, and beautiful beaches that were perhaps too overcrowded on the weekends. As I studied Physiology and Neuroscience, I joined the Kauffman Lab during my fourth year.`,
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
                text: `Although software engineering remained dormant throughout my college, grad school, and early years of work, high school was the inception of my innate passion for coding. Thanks Mr. Ferrante for a fun course! Although I didn't pursue computer science in college, I am grateful to still have the opportunity today to dive into this field.`,
            },
        ],
        icon: faJava,
    },
];

