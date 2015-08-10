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
              
          },
          name: {
              position: 'relative',
              display: 'block',
              padding: '10px 15px',
              textDecoration: 'none'
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
        <li style={[defStyle.dropdown]}>
            <a href="#" style={[defStyle.name]} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                {name}
                <span style={[defStyle.caret]}></span>
            </a>
            {children}
        </li>
      );
    }
}
