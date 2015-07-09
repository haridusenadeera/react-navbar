import React from 'react';

export default class Button extends React.Component {
	
	render() {
		return (
			<button type="button" className="btn btn-success">{this.props.display} {this.props.meme}</button>
		)
	}
}