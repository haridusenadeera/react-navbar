import React from 'react';

export default class NavbarHeader extends React.Component {
	
	render() {
		return (
			<div className="navbar-header">
				 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
				<a className="navbar-brand" href={this.props.href}>{this.props.name}</a>
			</div>
		)
	}
}