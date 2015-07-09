import React from 'react';
import Navbar from './components/Navbar';
import Item from './components/Item';
import NavbarHeader from './components/NavbarHeader';
import NavbarItem from './components/NavbarItem';

const navitems = [
	{	
		id: 0,
		link:"#", 
		title: "Learn ES2015"
	},
	{
		id: 1,
		link:"#", 
		title: "Setup"
	},
	{
		id: 2,
		link:"#", 
		title: "Usage"
	},
	{
		id: 3,
		link:"#", 
		title: "Advanced"
	},
	{
		id: 4,
		link:"#", 
		title: "Try it out"
	},
	{
		id: 5,
		link:"#", 
		title: "FAQ"
	}
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

React.render(navbarInstance, document.getElementById('navigation_bar'));
