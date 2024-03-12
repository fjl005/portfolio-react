import {
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Tooltip,
} from 'reactstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navbarIcons, navItems } from '../data/navbarData';

const NavbarApp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const toggleNavbar = () => setIsOpen(prev => !prev);

    const [tooltips, setTooltips] = useState({
        linkedin: false,
        github: false,
        resume: false,
        email: false
    });

    const toggleTooltip = (tooltip) => {
        setTooltips({ ...tooltips, [tooltip]: !tooltips[tooltip] });
    };

    const copyEmail = async () => {
        try {
            if (timeoutId) {
                clearTimeout(timeoutId);
                setTimeoutId(null);
            }

            setCopiedEmail(true);
            await navigator.clipboard.writeText('frank.jk.lee96@gmail.com');

            const id = setTimeout(() => {
                setCopiedEmail(false);
                setTimeoutId(null);
            }, 2000);

            setTimeoutId(id);
        } catch (err) {
            console.error('Failed to copy text to clipboard:', err);
        }
    };

    return (
        <Navbar color="black" light expand="md" sticky='top' id='navbarTop'>
            <NavbarToggler onClick={toggleNavbar} className='navbar-toggler' />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {navItems.map((item, index) => (
                        <NavItem key={index}>
                            <NavLink
                                href={item.href}
                                className={item.className}
                                onClick={item.onClick}
                            >
                                {item.text}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </Collapse>
            <Nav className="mr-auto" navbar>
                <div className='d-flex'>
                    {navbarIcons.map((icon, index) => (
                        <NavItem
                            key={index}
                            id={icon.id}
                            className='mx-3'
                            onClick={icon.id === 'emailTooltip' ? copyEmail : () => null}
                        >
                            <NavLink
                                href={icon.link}
                                target="_blank"
                                style={{ cursor: icon.cursor }}
                            >
                                <FontAwesomeIcon
                                    icon={icon.icon}
                                    size='xl'
                                    className='navlink navlink-white'
                                />
                                <Tooltip
                                    placement="bottom"
                                    isOpen={tooltips[icon.tooltip]}
                                    target={icon.id}
                                    toggle={() => toggleTooltip(icon.tooltip)}
                                >
                                    {copiedEmail ? icon.copied : icon.text}
                                </Tooltip>
                            </NavLink>
                        </NavItem>
                    ))}
                </div>
            </Nav>
        </Navbar>
    )
}

export default NavbarApp;