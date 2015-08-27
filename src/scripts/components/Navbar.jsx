import React from 'react';
import Radium from 'radium';

@Radium
export default class Navbar extends React.Component {
    displayName = 'Navigation bar'

    static propTypes = {
<<<<<<< HEAD
        navStyle: React.PropTypes.object,
        contStyle: React.PropTypes.object
=======
        navStyle:  React.PropTypes.object,
        contStyle: React.PropTypes.object,
        children:  React.PropTypes.node
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08
    }

    getStyles = () => {
      return {
          navbar: {
              backgroundColor: '#f8f8f8',
              border: '1px solid #e7e7e7',
              borderRadius: '4px',
              position: 'relative',
              minHeight: '50px',
              marginBottom: '20px',
              display: 'block',
              boxSizing: 'border-box',

              '@media (min-width: 768px)': {
                  borderRadius: '4px'
              }
          },
          container: {
              paddingRight: '15px',
              paddingLeft: '15px',
              marginRight: 'auto',
              marginLeft: 'auto',
              boxSizing: 'border-box'
          }
      };
    }
    render() {
      const defStyle = this.getStyles();
      const {navStyle, contStyle, children} = this.props;
      return (
          <nav style={[defStyle.navbar, navStyle && navStyle]}>
              <div style={[defStyle.container, contStyle && contStyle]}>
                  {children}
              </div>
          </nav>
      );
    }
}
