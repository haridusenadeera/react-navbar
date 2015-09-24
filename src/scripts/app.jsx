import React from 'react';
import Navbar from './components/Navbar';
import Item from './components/Item';
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

const navbarInstance4 = (
    <Navbar>
        <NavbarHeader href="http://www.google.com" name="Babel"/>
        <NavbarItems>
          {
            navitems.map(item => {
              return <Item key={navitems.indexOf(item)} link={item.link} title={item.title} />;
            })
          }
          <NavbarDropdown name="Dropdown">
              <DropdownMenu menuItems={dropdownItems}/>
           </NavbarDropdown>
          <NavbarDropdown name="Dropdown">
              <DropdownMenu menuItems={dropdownItems}/>
          </NavbarDropdown>
        </NavbarItems>
    </Navbar>
);

React.render(navbarInstance4, document.getElementById('navigation_bar'));
