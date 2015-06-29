
import React from 'react';
import Brand from './Nav/Brand';
import Nav from './Nav/Nav';


export class Navbar extends React.Component {

  constructor (){
    super();

  }

  render(){
    return (
      
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Brand link ="#" title="Brand Title" />
              </div>
                <div>
                    <ul className="nav navbar-nav">
                      <Nav class="active" link="#" title="Home" />
                      <Nav link="#" title="About" />
                      <Nav link="#" title="Contact" />
                      <Nav link="#" title="Services" />
                    </ul>
                </div>
            </div>
          </nav>
      
    );
  }
}






