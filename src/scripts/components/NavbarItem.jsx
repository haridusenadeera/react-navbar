import React from 'react';


export default class NavbarItem extends React.Component {
	
	render() {
		return (
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                            {
                                this.props.children.map(child => {
                                       return  <li>{child}</li>
                                })
                            }
                </ul>
            </div>
        )
	}
}