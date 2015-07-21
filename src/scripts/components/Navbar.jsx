import React from 'react';
import Radium from 'radium';

//@Radium
export default class Navbar extends React.Component {
    displayName = 'Navigation bar item link'
    getStyles = () => {
      return {
            base: {
                paddingRight: '15px',
                paddingLeft: '15px',
                marginRight: 'auto',
                marginLeft: 'auto'
            }
        };
    }
    render() {
      const defStyle = this.getStyles();
      return (
          <nav className = "navbar navbar-default" role = "navigation">
            <div className = "container-fluid">
            {this.props.children}
            </div>
          </nav>
        );
    }
}
