
import React from 'react';
import Radium from 'radium';

@Radium
export default class Navbar extends React.Component {
  displayName = 'Navigation bar parent'

  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          {this.props.children}
        </div>
      </nav>
    );
  }
}

var styles ={
	navbarDefault: {
		display: "none",
    backgroundColor: "#f8f8f8",
    borderColor: "#e7e7e7"
  },
}; 
