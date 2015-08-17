import React from 'react';
import Radium from 'radium';
import NavLink from './NavLink';

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
      const {children, style} = this.props;
      const defStyle = this.getStyles();
      return (
        <li style={[defStyle.dropdown, style && style]}>
            <NavLink href="#" name="Dropdown">
                <b style={[defStyle.caret]}></b>
            </NavLink>
            {children}
        </li>
      );
    }
}
