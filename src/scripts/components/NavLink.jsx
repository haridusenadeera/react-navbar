import React from 'react';
import Radium from 'radium';

@Radium
export default class NavLink extends React.Component {
    displayName = 'Navigation bar link'

    static propTypes = {
        key:   React.PropTypes.string,
        href:  React.PropTypes.string,
        name:  React.PropTypes.string,
        style: React.PropTypes.object
    }

    getStyles = () => {
      return {
          base: {
              padding: '10px 15px',
              lineHeight: '20px',
              position: 'relative',
              display: 'block',
              boxSizing: 'border-box',
              textDecoration: 'none',
              color: '#777',
              backgroundColor: 'transparent',

              ':hover': {
                  color: '#333',
                  backgroundColor: 'transparent'
              },

              ':focus': {
                  color: '#333',
                  backgroundColor: 'transparent'
              },

              '@media (min-width: 768px)': {
                  paddingTop: '15px',
                  paddingBottom: '15px'
              }
          }
      };
    }

    render() {
      const defStyle = this.getStyles();
      const {key, href, name, style} = this.props;
      return (
        <a key ={key} style ={[defStyle.base, style && style]} href={href}>
            {name}
        </a>
      );
    }
}
