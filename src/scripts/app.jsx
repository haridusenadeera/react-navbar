import React from 'react';
import Navbar from './components/Navbar';
import Item from './components/Item';
import NavbarHeader from './components/NavbarHeader';
import NavbarItem from './components/NavbarItem';
import DropdownButton from './components/DropdownButton';
import MenuItem from './components/MenuItem';

/** ~~~ Navigation 1 ~~~~ */
const navitems = [
    {link: '#', title: 'Learn ES2015'},
    {link: '#', title: 'Setup'},
    {link: '#', title: 'Usage'},
    {link: '#', title: 'Advanced'},
    {link: '#', title: 'Try it out'},
    {link: '#', title: 'FAQ'}
];

const navbarInstance = (
    <Navbar>
        <NavbarHeader href="http://www.google.com" name="Babel"/>
            <NavbarItem>
              {
                navitems.map(item => {
                  return <Item key={navitems.indexOf(item)} link={item.link} title={item.title} />;
                })
              }
            </NavbarItem>
    </Navbar>
);

/** ~~~ Navigation 2 ~~~~ */
const navitems2 = [
    {link: '#', title: 'Homepage'},
    {link: '#', title: 'Contact'},
    {link: '#', title: 'Northwestern'},
    {link: '#', title: 'About'},
    {link: '#', title: 'See more'},
    {link: '#', title: 'NUCATS'}
];


const navbarInstance2 = (
    <Navbar>
        <NavbarHeader href="http://www.google.com" name="Babel"/>
            <NavbarItem >
              {
                navitems2.map(item => {
                  return <Item key={navitems2.indexOf(item)} link={item.link} title={item.title} />;
                })
              }
            </NavbarItem>
    </Navbar>
);

/** ~~~ Navigation 3 ~~~~ */
const navitems3 = [
    {link: '#', title: 'GIT'},
    {link: '#', title: 'Usage'},
    {link: '#', title: 'About Us'},
    {link: '#', title: 'More Info'},
    {link: '#', title: 'New Features'},
    {link: '#', title: 'Contact'}
];

const navbarInstance3 = (
    <Navbar>
        <NavbarHeader href="http://www.google.com" name="Babel"/>
            <NavbarItem >
              {
                navitems3.map(item => {
                  return <Item key={navitems3.indexOf(item)} link={item.link} title={item.title} />;
                })
              }
            </NavbarItem>
    </Navbar>
);

/** ~~~ Navigation 4 ~~~~ */
const navitems4 = [
    {link: '#', title: 'Learn ES2015'},
    {link: '#', title: 'Setup'},
    {link: '#', title: 'Usage'},
    {link: '#', title: 'Advanced'},
    {link: '#', title: 'Try it out'},
    {link: '#', title: 'FAQ'}
];


const navbarInstance4 = (
    <Navbar>
        <NavbarHeader href="http://www.google.com" name="Babel"/>
            <NavbarItem >
                <Item link="#" title="Home" />
                <Item link="#" title="About" />
                <Item link="#" title="Contact" />
                <Item link="#" title="More Info" />
                <DropdownButton navItem="TRUE" title="Dropdown">
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
            </NavbarItem>
    </Navbar>
);

React.render(navbarInstance, document.getElementById('navigation_bar'));
React.render(navbarInstance2, document.getElementById('navigation_bar2'));
React.render(navbarInstance3, document.getElementById('navigation_bar3'));
React.render(navbarInstance4, document.getElementById('navigation_bar4'));
