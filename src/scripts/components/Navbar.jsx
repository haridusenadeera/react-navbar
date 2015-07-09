
import React from 'react';

export default class Navbar extends React.Component {

  render(){
    return (
      
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              {this.props.children}
            </div>
          </nav>
      
    );
  }
}






