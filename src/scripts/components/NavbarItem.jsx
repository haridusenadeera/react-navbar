import React from 'react';
import Radium from 'radium';

@Radium
export default class NavbarItem extends React.Component {
    displayName = 'Navigation list of items'
    getStyles = () => {
      return {
          base: {
              margin: '7.5px -15px',
              listStyle: 'outside none none',
              paddingLeft: '0',
              boxSizing: 'border-box',

              fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
              fontSize: '14px',
              color: '#333',

              '@media (min-width: 768px)': {
                  float: 'left',
                  margin: '0'
              },

              li: {
                  float: 'left',
                  position: 'relative',
                  display: 'block',
                  boxSizing: 'border-box'
              }
          }
      };
    }

    render() {
      const defStyle = this.getStyles();
      const {style, children} = this.props;
      return (
          <div>
              <ul className="nav navbar-nav">
                  {children}
              </ul>
          </div>
      );
    }
}
