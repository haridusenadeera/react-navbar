import React from 'react';
import Radium from 'radium';

@Radium
export default class NavbarDropdown extends React.Component {
    displayName = 'Navigation bar dropdown button'

    static propTypes = {
        name: React.PropTypes.string
    }

    getStyles = () => {
      return {
          dropdown: {
            position: 'relative',
            display: 'block',

            '@media (min-width: 768px)': {
                float: 'left'
            }
          },
          name: {
              padding: '10px 15px',
              lineHeight: '20px',
              position: 'relative',
              display: 'block',
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
          },
          caret: {
              display: 'inline-block',
              width: '0',
              height: '0',
              marginLeft: '2px',
              verticalAlign: 'middle',
              borderTop: '4px dashed',
              borderRight: '4px solid transparent',
              borderLeft: '4px solid transparent'
          }
      };
    }

    render() {
      const {name, children} = this.props;
      const defStyle = this.getStyles();
      return (
        <li key="dropdown" style={[defStyle.dropdown]}>
            <a key="name" href="#" style={[defStyle.name]} data-toggle="dropdown">
                {name}&nbsp;
                <b style={[defStyle.caret]}></b>
            </a>
            {children}
        </li>
      );
    }
}
