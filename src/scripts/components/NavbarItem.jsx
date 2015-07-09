import React from 'react';


export default class NavbarItem extends React.Component {
	
	render() {
		return (
             <ul className="nav navbar-nav">
                        {
                            this.props.children.map(child => {
                                   return  <li>{child}</li>
                            })
                        }
             </ul>
        )
	}
}