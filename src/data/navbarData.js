import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};


export const navbarIcons = [
    {
        icon: faLinkedin,
        id: 'linkedinTooltip',
        text: 'LinkedIn',
        tooltip: 'linkedin',
        link: 'https://www.linkedin.com/in/frank-lee-183212114/',
    },
    {
        icon: faGithub,
        id: 'githubTooltip',
        text: 'GitHub',
        tooltip: 'github',
        link: 'https://github.com/fjl005',
    },
    {
        icon: faFile,
        id: 'fileTooltip',
        text: 'Resume',
        tooltip: 'resume',
        link: 'https://drive.google.com/file/d/1cgYHZ3FGpnn_FKSMJZ8J22WfvQJWGr2N/view?usp=sharing',
    },
    {
        icon: faEnvelope,
        id: 'emailTooltip',
        text: 'Copy Email',
        tooltip: 'email',
        copied: 'Copied!',
        cursor: 'pointer'
        // link: '',
    }
];

export const navItems = [
    { text: 'Back to Top', href: '#pagetop', className: 'navlink navlink-white navlink-cursor', onClick: scrollToTop, },
    { text: 'Skills', href: '#skills', className: 'navlink navlink-white' },
    { text: 'Journey', href: '#journey', className: 'navlink navlink-white' },
    { text: 'Projects', href: '#projects', className: 'navlink navlink-white' },
    { text: 'Contact', href: '#contact', className: 'navlink navlink-white' },
]