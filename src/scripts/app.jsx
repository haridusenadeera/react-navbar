import React from 'react';
import Navbar from './components/Navbar';
import Item from './components/Item';
import NavbarHeader from './components/NavbarHeader';
import NavbarItem from './components/NavbarItem';
import NavbarSearch from './components/NavbarSearch';

/** ~~~ Navigation 1 ~~~~ */
const navitems = [
	{	id: 0,	link:"#",	title: "Learn ES2015" },
	{	id: 1,	link:"#", 	title: "Setup" },
	{	id: 2,	link:"#", 	title: "Usage" },
	{	id: 3,	link:"#", 	title: "Advanced" },
	{	id: 4,	link:"#", 	title: "Try it out" },
	{	id: 5,	link:"#", 	title: "FAQ" }
]


const navbarInstance = (

		<Navbar>
			<NavbarHeader href="http://www.google.com" name="Babel"/>
			<NavbarItem >
				
               {
                    navitems.map(item => {
                     	return 	<Item key={item.id} link={item.link} title={item.title} />
                    })
                }
            </NavbarItem>
        </Navbar>
);

/** ~~~ Navigation 2 ~~~~ */
const navitems2 = [
	{	id: 0,	link:"#",	title: "Homepage" },
	{	id: 1,	link:"#", 	title: "Contact" },
	{	id: 2,	link:"#", 	title: "Northwestern" },
	{	id: 3,	link:"#", 	title: "About" },
	{	id: 4,	link:"#", 	title: "See more" },
	{	id: 5,	link:"#", 	title: "NUCATS" }
]


const navbarInstance2 = (

		<Navbar>
			<NavbarHeader href="http://www.google.com" name="Northwestern"/>
			<NavbarItem >
				
               {
                    navitems2.map(item => {
                     	return 	<Item key={item.id} link={item.link} title={item.title} />
                    })
                }

			</NavbarItem>
			<NavbarSearch />
		</Navbar>
);

/** ~~~ Navigation 3 ~~~~ */
const navitems3 = [
	{	id: 0,	link:"#",	title: "GIT" },
	{	id: 1,	link:"#", 	title: "Usage" },
	{	id: 2,	link:"#", 	title: "About Us" },
	{	id: 3,	link:"#", 	title: "More Info" },
	{	id: 4,	link:"#", 	title: "New Features" },
	{	id: 5,	link:"#", 	title: "Contact" }
]

const navbarInstance3 = (

		<Navbar>
			<NavbarHeader href="http://www.google.com" name="Github"/>
			<NavbarItem >
				
               {
                    navitems3.map(item => {
                     	return 	<Item key={item.id} link={item.link} title={item.title} />
                    })
                }
			</NavbarItem>
		</Navbar>
);

/** ~~~ Navigation 4 ~~~~ */
const navitems4 = [
	{	id: 0,	link:"#",	title: "Learn ES2015" },
	{	id: 1,	link:"#", 	title: "Setup" },
	{	id: 2,	link:"#", 	title: "Usage" },
	{	id: 3,	link:"#", 	title: "Advanced" },
	{	id: 4,	link:"#", 	title: "Try it out" },
	{	id: 5,	link:"#", 	title: "FAQ" }
]


const navbarInstance4 = (

		<Navbar>
			<NavbarHeader href="http://www.google.com" name="dictyBase"/>
			<NavbarItem >
				
               {
                    navitems4.map(item => {
                     	return 	<Item key={item.id} link={item.link} title={item.title} />
                    })
                }
			</NavbarItem>
			<NavbarSearch />
		</Navbar>
);



React.render(navbarInstance, document.getElementById('navigation_bar'));
React.render(navbarInstance2, document.getElementById('navigation_bar2'));
React.render(navbarInstance3, document.getElementById('navigation_bar3'));
React.render(navbarInstance4, document.getElementById('navigation_bar4'));
