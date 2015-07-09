import React from 'react';

export default class Brand extends React.Component {
	
	render() {
		return (
			<a href={this.props.link}>{this.props.title}</a>
		)
	}
}