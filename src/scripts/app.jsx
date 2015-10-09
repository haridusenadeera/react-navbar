import React from 'react';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import NavbarHeader from './components/NavbarHeader';
import NavbarItems from './components/NavbarItems';
import NavbarDropdown from './components/NavbarDropdown';
import DropdownMenu from './components/DropdownMenu';

const navitems = [
    {link: '#', title: 'Setup'},
    {link: '#', title: 'Usage'},
    {link: '#', title: 'Advanced'},
    {link: '#', title: 'Try it out'},
    {link: '#', title: 'FAQ'}
];

const dropdownItems = [
    {href: '#', name: 'ES2015'},
    {href: '#', name: 'Setup'},
    {href: '#', name: 'Usage'},
    {href: '#', name: 'Advanced'},
    {href: '#', name: 'Try it'},
    {href: '#', name: 'FAQ'}
];

const navbarInstance = (
    <Navbar>
        <NavbarHeader href="http://www.google.com" name="Babel"/>
        <NavbarItems>
            {navitems.map(item => {
                return <NavItem key={navitems.indexOf(item)} link={item.link} title={item.title} />;
            })}
            <NavbarDropdown name="Dropdown">
                <DropdownMenu menuItems={dropdownItems}/>
            </NavbarDropdown>
            <NavbarDropdown name="Dropdown">
                <DropdownMenu menuItems={dropdownItems}/>
            </NavbarDropdown>
        </NavbarItems>
    </Navbar>
);

React.render(navbarInstance, document.getElementById('navigation_bar'));
