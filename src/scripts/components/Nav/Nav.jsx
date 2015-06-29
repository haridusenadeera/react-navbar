import React from 'react';

export default class Nav extends React.Component {
	
	render() {
		return (
			<li className={this.props.class}><a href={this.props.link}>{this.props.title}</a></li>
		)
	}
}