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
        // link: '',
    },
    {
        icon: faEnvelope,
        id: 'emailTooltip',
        text: 'Email',
        tooltip: 'email',
        // link: '',
    }
];

export const navItems = [
    { text: 'Back to Top', href: '#top', className: 'navlink navlink-white navlink-cursor', onClick: scrollToTop, },
    { text: 'Skills', href: '#mySkills', className: 'navlink navlink-white' },
    { text: 'Journey', href: '#myJourney', className: 'navlink navlink-white' },
    { text: 'Projects', href: '#myProjects', className: 'navlink navlink-white' },
    { text: 'Contact', href: '#contactMe', className: 'navlink navlink-white' },

]