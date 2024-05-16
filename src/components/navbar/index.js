import {
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    // NavLink,
    Tooltip,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NAVBAR_ICONS, NAV_ITEMS, COPIED_EMAIL, tooltipInitial } from './app-content/navbarData';

const NavbarApp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showEmailCopied, setShowEmailCopied] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [tooltips, setTooltips] = useState(tooltipInitial);

    const toggleNavbar = () => setIsOpen(prev => !prev);

    const toggleTooltip = (tooltip) => {
        setTooltips({ ...tooltips, [tooltip]: !tooltips[tooltip] });
    };

    const copyEmail = async () => {
        try {
            if (timeoutId) {
                clearTimeout(timeoutId);
                setTimeoutId(null);
            }

            setShowEmailCopied(true);
            await navigator.clipboard.writeText(COPIED_EMAIL);

            const id = setTimeout(() => {
                setShowEmailCopied(false);
                setTimeoutId(null);
            }, 2000);

            setTimeoutId(id);
        } catch (err) {
            console.error('Failed to copy text to clipboard:', err);
        }
    };

    return (
        <Navbar color="black" light expand="md" sticky='top' id='pagetop'>
            <NavbarToggler onClick={toggleNavbar} className='navbar-toggler' />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {NAV_ITEMS.map((item, index) => (
                        <NavItem key={index}>
                            <NavLink
                                // href={item.href}
                                to={item.to}
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
                    {NAVBAR_ICONS.map((icon, index) => (
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
                                    {showEmailCopied ? icon.copied : icon.text}
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