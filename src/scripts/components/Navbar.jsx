
import React from 'react';
import Radium from 'radium';

@Radium
export default class Navbar extends React.Component {
  displayName = 'Navigation bar parent'

  getStyles = () => {
    return {
            base: {
                backgroundColor: '#f8f8f8',
                borderColor: '#e7e7e7'
            }
    };
  }

  render() {
    const defStyle = this.getStyles();
    return (
      <nav style={[defStyle.base]} role="navigation">
        <div className="container-fluid">
          {this.props.children}
        </div>
      </nav>
    );
  }
}
