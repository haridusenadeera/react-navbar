import React from 'react';
import Radium from 'radium';

@Radium
export default class NavbarHeader extends React.Component {
    displayName = 'Navigation bar header'

    static propTypes = {
<<<<<<< HEAD
        headerStyle: React.PropTypes.object,
        brandStyle: React.PropTypes.object
=======
        href:        React.PropTypes.string,
        name:        React.PropTypes.string,
        headerStyle: React.PropTypes.object,
        brandStyle:  React.PropTypes.object
>>>>>>> 0c8a7ebcf3cf7c96cb23441a0656905eac0e8f08
    }

    getStyles = () => {
      return {
            header: {
                marginRight: '-15px',
                marginLeft: '-15px',
                boxSizing: 'border-box',
                display: 'table',

                '@media (min-width: 768px)': {
                    float: 'left',
                    marginRight: '0',
                    marginLeft: '0'
                }
            },
            brand: {
                float: 'left',
                height: '50px',
                padding: '15px 15px',
                lineHeight: '20px',
                textDecoration: 'none',
                backgroundColor: 'transparent',
                boxSizing: 'border-box',

                fontSize: '18px',
                color: '#777',
                fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',

                ':hover': {
                    color: '#5e5e5e'
                },

                ':focus': {
                    color: '#5e5e5e'
                },

                '@media (min-width: 768px)': {
                    marginLeft: '-15px'
                }
            }
        };
    }
    render() {
      const defStyle = this.getStyles();
      const {href, name, headerStyle, brandStyle} = this.props;
      return (
          <div key="header" style={[defStyle.header, headerStyle && headerStyle]}>
              <a key="brand" style={[defStyle.brand, brandStyle && brandStyle]} href={href}>
                  {name}
              </a>
          </div>
      );
    }
}
