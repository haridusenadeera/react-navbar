import React from 'react';

export default class Navbar extends React.Component {
  displayName = 'Navbar parent component'
  render() {
    return (
      <nav className = "navbar navbar-default" role = "navigation">
        <div className = "container-fluid">
        {this.props.children}
        </div>
      </nav>
    );
  }
}
