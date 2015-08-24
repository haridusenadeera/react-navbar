import React from 'react';
import Radium from 'radium';

@Radium
export default class NavbarItems extends React.Component {
    displayName = 'Navigation list of items'

    static propTypes = {
        style:    React.PropTypes.object,
        children: React.PropTypes.node
    }

    getStyles = () => {
      return {
          base: {
              margin: '7.5px -15px',
              listStyle: 'none',
              paddingLeft: '0',

              fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
              fontSize: '14px',

              '@media (min-width: 768px)': {
                  float: 'left',
                  margin: '0'
              }
          },
          collapse: {
              borderColor: '#E7E7E7',
              marginRight: '-15px',
              marginLeft: '-15px',
              maxHeight: '340px',
              paddingRight: '15px',
              paddingLeft: '15px',
              overflowX: 'visible',
              borderTop: '1px solid transparent',
              boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.1)',
              display: 'none',
              boxSizing: 'border-box',

              '@media (min-width: 768px)': {
                  marginRight: '0px',
                  marginLeft: '0px',
                  paddingRight: '0px',
                  paddingLeft: '0px',
                  height: 'auto',
                  paddingBottom: '0px',
                  display: 'block',
                  overflow: 'visible',
                  width: 'auto',
                  borderTop: '0px none',
                  boxShadow: 'none'
              }
          }
      };
    }

    render() {
      const defStyle = this.getStyles();
      const {style, children} = this.props;
      return (
          <div ref ="collapse" style={[defStyle.collapse]}>
              <ul ref= "navitems" style={[defStyle.base, style && style]}>
                  {children}
              </ul>
          </div>
      );
    }
}
