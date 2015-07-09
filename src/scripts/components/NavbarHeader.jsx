import React from 'react';

export default class NavbarHeader extends React.Component {
	
	render() {
		return (
			<div className="navbar-header">
				<a className="navbar-brand" href={this.props.href}>{this.props.name}</a>
			</div>
		)
	}
}