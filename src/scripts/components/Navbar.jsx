import React from 'react';
import Radium from 'radium';

@Radium
export default class Navbar extends React.Component {
    displayName = 'Navigation bar'
    getStyles = () => {
      return {
          navbar: {
              backgroundColor: '#f8f8f8',
              border: '1px solid transparent',
              borderColor: '#e7e7e7',
              borderRadius: '4px',
              position: 'relative',
              minHeight: '50px',
              marginBottom: '20px',
              display: 'block',
              boxSizing: 'border-box',
              zIndex: '1000',
              borderWidth: '0 0 1px',

              '@media (min-width: 768px)': {
                  borderRadius: '0'
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
      return (
          <nav style= {[defStyle.navbar]}>
            <div style= {[defStyle.container]}>
              {this.props.children}
            </div>
          </nav>
        );
    }
}
