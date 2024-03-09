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

    return (
        <Navbar color="black" light expand="md" sticky='top' id='top'>
            <NavbarToggler onClick={toggleNavbar} style={{ backgroundColor: 'white' }} />
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
                        <NavItem key={index} id={icon.id} className='mx-3'>
                            <NavLink href={icon.link} target="_blank">
                                <FontAwesomeIcon icon={icon.icon} size='xl' className='navlink navlink-white' />
                                <Tooltip
                                    placement="bottom"
                                    isOpen={tooltips[icon.tooltip]}
                                    target={icon.id}
                                    toggle={() => toggleTooltip(icon.tooltip)}
                                >
                                    {icon.text}
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