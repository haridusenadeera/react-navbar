import React from 'react';
import Navbar from './components/Navbar';
import Item from './components/Item';
import NavbarHeader from './components/NavbarHeader';
<<<<<<< HEAD
import NavbarItem from './components/NavbarItem';

=======
import NavbarItems from './components/NavbarItems';
import NavbarDropdown from './components/NavbarDropdown';
import DropdownMenu from './components/DropdownMenu';
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08

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
<<<<<<< HEAD
            <NavbarItem>
=======
            <NavbarItems>
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08
              {
                navitems.map(item => {
                  return <Item key={navitems.indexOf(item)} link={item.link} title={item.title} />;
                })
              }
<<<<<<< HEAD
            </NavbarItem>
=======
            </NavbarItems>
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08
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
<<<<<<< HEAD
            <NavbarItem >
=======
            <NavbarItems>
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08
              {
                navitems2.map(item => {
                  return <Item key={navitems2.indexOf(item)} link={item.link} title={item.title} />;
                })
              }
<<<<<<< HEAD
            </NavbarItem>
=======
            </NavbarItems>
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08
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
<<<<<<< HEAD
            <NavbarItem >
=======
            <NavbarItems>
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08
              {
                navitems3.map(item => {
                  return <Item key={navitems3.indexOf(item)} link={item.link} title={item.title} />;
                })
              }
<<<<<<< HEAD
            </NavbarItem>
=======
            </NavbarItems>
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08
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

<<<<<<< HEAD
=======
const dropdownItems = [
    {href: '#', name: 'ES2015'},
    {href: '#', name: 'Setup'},
    {href: '#', name: 'Usage'},
    {href: '#', name: 'Advanced'},
    {href: '#', name: 'Try it'},
    {href: '#', name: 'FAQ'}
];
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08

const navbarInstance4 = (
    <Navbar>
        <NavbarHeader href="http://www.google.com" name="Babel"/>
<<<<<<< HEAD
            <NavbarItem >
=======
            <NavbarItems>
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08
              {
                navitems4.map(item => {
                  return <Item key={navitems4.indexOf(item)} link={item.link} title={item.title} />;
                })
              }
<<<<<<< HEAD
            </NavbarItem>
=======
              <NavbarDropdown name="Dropdown">
                  <DropdownMenu menuItems={dropdownItems}/>
              </NavbarDropdown>
            </NavbarItems>
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08
    </Navbar>
);

React.render(navbarInstance, document.getElementById('navigation_bar'));
React.render(navbarInstance2, document.getElementById('navigation_bar2'));
React.render(navbarInstance3, document.getElementById('navigation_bar3'));
React.render(navbarInstance4, document.getElementById('navigation_bar4'));
