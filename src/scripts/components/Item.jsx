import React from 'react';

export default class Item extends React.Component {
	
	render() {
		return (
			<a href={this.props.link}>{this.props.title}</a>
		)
	}
}