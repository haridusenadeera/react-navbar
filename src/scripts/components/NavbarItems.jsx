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
          }
      };
    }

    render() {
      const defStyle = this.getStyles();
      const {style, children} = this.props;
      return (
          <div>
              <ul style={[defStyle.base, style && style]}>
                  {children}
              </ul>
          </div>
      );
    }
}
