import React from 'react';
import Radium from 'radium';

@Radium
export default class Navbar extends React.Component {
    displayName = 'Navigation bar'

    static propTypes = {
        navStyle:  React.PropTypes.object,
        contStyle: React.PropTypes.object,
        children:  React.PropTypes.node
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

              '@media (min-width: 768px)': {
                  width: '750px'
              },
              '@media (min-width: 992px)': {
                  width: '970px'
              },
              '@media (min-width: 1200px)': {
                  width: '1170px'
              }
          }
      };
    }
    render() {
      const defStyle = this.getStyles();
      const {navStyle, contStyle, children} = this.props;
      return (
          <nav ref="navbar" style={[defStyle.navbar, navStyle && navStyle]}>
              <div ref="container" style={[defStyle.container, contStyle && contStyle]}>
                  {children}
              </div>
          </nav>
      );
    }
}
