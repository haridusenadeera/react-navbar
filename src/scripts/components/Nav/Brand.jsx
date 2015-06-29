import React from 'react';

export default class Brand extends React.Component {
	
	render() {
		return (
			<a className="navbar-brand" href={this.props.link}>{this.props.title}</a>
		)
	}
}